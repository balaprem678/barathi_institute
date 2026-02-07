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
            return NextResponse.json({ message: 'No token provided' }, { status: 403 });
        }

        const token = authHeader.split(' ')[1];
        const decoded = verifyToken(token);

        if (!decoded) {
            return NextResponse.json({ message: 'Failed to authenticate token' }, { status: 500 });
        }

        // Fetch students
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
                course: formData.get('course'), // Maps to 'subject' in form
                address: formData.get('address') || '',
                dob: formData.get('dob') || null,
                qualification: formData.get('qualification') || '',
            };

            const file = formData.get('file') as File;
            if (file) {
                const buffer = Buffer.from(await file.arrayBuffer());
                fileName = Date.now() + '_' + file.name.replace(/\s+/g, '_');
                fileType = file.type;
                fileBuffer = buffer;

                // Save file locally (optional, but good for persistence if not using S3)
                // Note: Vercel specific limitations apply here as noted before
                try {
                    const uploadDir = path.join(process.cwd(), 'public/uploads');
                    await mkdir(uploadDir, { recursive: true });
                    await writeFile(path.join(uploadDir, fileName), buffer);
                    body.markSheetPath = `/uploads/${fileName}`;
                } catch (fsError) {
                    console.error('File save error (local):', fsError);
                    // Proceed without local save if strictly on Vercel without persistent storage
                }
            }
        } else {
            body = await req.json();
        }

        // Save Student to DB
        const student = new Student(body);
        await student.save();

        // --- EMAIL NOTIFICATION LOGIC ---
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

                const mailOptions: any = {
                    from: `"Bharathi Institute" <${settings.smtpUser}>`,
                    to: settings.recipientEmails, // "admin1@mail.com, admin2@mail.com"
                    subject: `New Admission Enquiry: ${body.name}`,
                    html: `
                        <h3>New Enquiry from Website</h3>
                        <p><strong>Name:</strong> ${body.name}</p>
                        <p><strong>Email:</strong> ${body.email}</p>
                        <p><strong>Phone:</strong> ${body.phone}</p>
                        <p><strong>Course:</strong> ${body.course}</p>
                        <p><strong>Message:</strong> ${body.message || 'No message'}</p>
                    `,
                };

                // Add attachment if file exists
                if (fileBuffer) {
                    mailOptions.attachments = [
                        {
                            filename: fileName.split('_').slice(1).join('_'), // Original name slightly cleaned
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
            // Don't fail the request if email fails, just log it
        }
        // --------------------------------

        return NextResponse.json({ message: 'Registration successful', student }, { status: 201 });

    } catch (error) {
        console.error('Registration Error:', error);
        return NextResponse.json({ message: 'Error registering student', error }, { status: 500 });
    }
}
