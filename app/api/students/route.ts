import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Student from '@/models/Student';
import Settings from '@/models/Settings'; // Import Settings model
import { verifyToken } from '@/lib/auth';
import nodemailer from 'nodemailer';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { Buffer } from 'buffer';

export async function GET(req: Request) {
    try {
        await dbConnect();

        // Verification
        const authHeader = req.headers.get('authorization');
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return NextResponse.json({ message: 'No token provided' }, { status: 401 });
        }

        const token = authHeader.split(' ')[1];
        const decoded = verifyToken(token);

        if (!decoded) {
            return NextResponse.json({ message: 'Failed to authenticate token' }, { status: 401 });
        }

        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get('page') || '0');
        const limit = parseInt(searchParams.get('limit') || '0');
        const search = searchParams.get('search') || '';
        const startDate = searchParams.get('startDate');
        const endDate = searchParams.get('endDate');

        // Determine if we should paginate (Admin) or return all
        if (page > 0 && limit > 0) {
            const query: any = {};

            if (search) {
                query.$or = [
                    { name: { $regex: search, $options: 'i' } },
                    { email: { $regex: search, $options: 'i' } },
                    { phone: { $regex: search, $options: 'i' } },
                    { course: { $regex: search, $options: 'i' } }
                ];
            }

            if (startDate && endDate) {
                const start = new Date(startDate);
                const end = new Date(endDate);
                end.setHours(23, 59, 59, 999);
                query.createdAt = {
                    $gte: start,
                    $lte: end
                };
            }

            const total = await Student.countDocuments(query);
            const totalPages = Math.ceil(total / limit);

            const students = await Student.find(query)
                .sort({ createdAt: -1 })
                .skip((page - 1) * limit)
                .limit(limit);

            return NextResponse.json({
                data: students,
                totalPages,
                currentPage: page,
                totalEntries: total
            });
        }

        // Fetch all students by default
        const students = await Student.find().sort({ createdAt: -1 });
        return NextResponse.json(students);

    } catch (error) {
        return NextResponse.json({ message: 'Error fetching students', error }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        await dbConnect();

        // Check content type to determine if it's form-data
        const contentType = req.headers.get('content-type') || '';

        let body: any = {};
        let fileBuffer: Buffer | null = null;
        let fileName = '';
        let fileType = '';

        if (contentType.includes('multipart/form-data')) {
            const formData = await req.formData();

            body = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                qualification: formData.get('qualification') || '',
                yearOfPassing: formData.get('yearOfPassing') || '',
                location: formData.get('location') || '',
                course: formData.get('course'),
                message: formData.get('message') || '',
                address: formData.get('address') || '',
                dob: formData.get('dob') || null,
                isSubmit: formData.get('isSubmit') === 'true',
            };

            // Validation for explicit submission
            if (body.isSubmit) {
                const requiredFields = ['name', 'email', 'phone'];
                for (const field of requiredFields) {
                    if (!body[field]) {
                        return NextResponse.json({ message: `Missing required field: ${field}` }, { status: 400 });
                    }
                }
            }

            const file = formData.get('file') as File;
            if (file && file.size > 0) {
                const buffer = Buffer.from(await file.arrayBuffer());
                fileName = Date.now() + '_' + file.name.replace(/\s+/g, '_');
                fileType = file.type;
                fileBuffer = buffer;

                try {
                    const uploadDir = path.join(process.cwd(), 'public/uploads');
                    await mkdir(uploadDir, { recursive: true });
                    await writeFile(path.join(uploadDir, fileName), buffer);
                    body.markSheetPath = `/uploads/${fileName}`;
                } catch (fsError) {
                    console.error('File save error (local):', fsError);
                }
            }
        } else {
            body = await req.json();
        }

        const { email, phone, isSubmit } = body;

        // Upsert Student (Deduplication based on Email or Phone)
        let student;
        const query = [];
        if (email) query.push({ email });
        if (phone) query.push({ phone });

        if (query.length > 0) {
            student = await Student.findOneAndUpdate(
                { $or: query },
                { $set: body },
                { new: true, upsert: true, setDefaultsOnInsert: true }
            );
        } else if (body.name) {
            student = await Student.create(body);
        } else {
            return NextResponse.json({ message: 'Insufficient data for auto-save' }, { status: 400 });
        }

        // --- EMAIL NOTIFICATION LOGIC ---
        if (isSubmit) {
            try {
                let settings = await Settings.findOne();
                if (!settings) settings = {}; // fallback if empty

                if (settings.smtpHost && settings.recipientEmails) {
                    const transporter = nodemailer.createTransport({
                        host: settings.smtpHost,
                        port: Number(settings.smtpPort) || 587,
                        secure: Number(settings.smtpPort) === 465, // true for 465, false for other ports
                        auth: {
                            user: settings.smtpUser,
                            pass: settings.smtpPass,
                        },
                    });

                    const sender = settings.fromEmail || settings.smtpUser;

                    const mailOptions: any = {
                        from: `"Bharathi Institute" <${sender}>`,
                        to: settings.recipientEmails,
                        subject: `New Admission Enquiry: ${body.name}`,
                        html: `
                            <h3>New Admission Form from Website</h3>
                            <p>This is a confirmed registration from the website.</p>
                            <p><strong>Name:</strong> ${body.name}</p>
                            <p><strong>Email:</strong> ${body.email}</p>
                            <p><strong>Phone:</strong> ${body.phone}</p>
                            <p><strong>Qualification:</strong> ${body.qualification || 'N/A'}</p>
                            <p><strong>Year of Passing:</strong> ${body.yearOfPassing || 'N/A'}</p>
                            <p><strong>Location:</strong> ${body.location || 'N/A'}</p>
                            <p><strong>Course:</strong> ${body.course || 'N/A'}</p>
                            <p><strong>Message:</strong> ${body.message || 'No message'}</p>
                            <p><strong>Submitted At:</strong> ${new Date().toLocaleString()}</p>
                        `,
                    };

                    // Add attachment if file exists
                    if (fileBuffer) {
                        mailOptions.attachments = [
                            {
                                filename: fileName.split('_').slice(1).join('_'),
                                content: fileBuffer,
                                contentType: fileType
                            }
                        ];
                    }

                    await transporter.sendMail(mailOptions);
                    console.log('Notification email sent successfully');
                } else {
                    console.log('SMTP settings missing, skipping email notification');
                }

            } catch (emailError) {
                console.error('Email sending failed:', emailError);
            }
        }
        // --------------------------------

        return NextResponse.json({ message: 'Registration successful', student }, { status: 201 });

    } catch (error) {
        console.error('Registration Error:', error);
        return NextResponse.json({ message: 'Error registering student', error }, { status: 500 });
    }
}
