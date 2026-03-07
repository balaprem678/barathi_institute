import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Enquiry from '@/models/Enquiry';
import Settings from '@/models/Settings';
import { verifyToken } from '@/lib/auth';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        await dbConnect();
        const body = await req.json();

        // Save Enquiry
        const enquiry = await Enquiry.create(body);

        // --- EMAIL NOTIFICATION LOGIC ---
        try {
            let settings = await Settings.findOne();
            if (!settings) settings = {};

            if (settings.smtpHost && settings.recipientEmails) {
                const transporter = nodemailer.createTransport({
                    host: settings.smtpHost,
                    port: Number(settings.smtpPort) || 587,
                    secure: Number(settings.smtpPort) === 465,
                    auth: {
                        user: settings.smtpUser,
                        pass: settings.smtpPass,
                    },
                });



                const sender = settings.fromEmail || settings.smtpUser;
                const mailOptions = {
                    from: `"Bharathi Institute" <${sender}>`,
                    to: settings.recipientEmails,
                    subject: `New Enquiry: ${body.name} - ${body.course}`,
                    html: `
                        <h3>New Enquiry from Website</h3>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${body.name}</td></tr>
                            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${body.email}</td></tr>
                            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${body.phone}</td></tr>
                            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Alt. Phone:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${body.alternatePhone || 'N/A'}</td></tr>
                            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>City:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${body.city || 'N/A'}</td></tr>
                            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Qualification:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${body.qualification || 'N/A'}</td></tr>
                            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Year of Passing:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${body.yearOfPassing || 'N/A'}</td></tr>
                            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Course Interest:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${body.course || 'N/A'}</td></tr>
                            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Occupation:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${body.occupation || 'N/A'}</td></tr>
                            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Message:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${body.message || 'N/A'}</td></tr>
                            <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Submitted At:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${new Date().toLocaleString()}</td></tr>
                        </table>
                    `,
                };

                await transporter.sendMail(mailOptions);
                console.log('Enquiry notification email sent');
            }
        } catch (emailError) {
            console.error('Email sending failed:', emailError);
            // Don't fail the request if email fails
        }

        return NextResponse.json({ message: 'Enquiry submitted successfully', enquiry }, { status: 201 });
    } catch (error) {
        console.error('Enquiry Submission Error:', error);
        return NextResponse.json({ message: 'Error submitting enquiry', error }, { status: 500 });
    }
}

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

        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get('page') || '0');
        const limit = parseInt(searchParams.get('limit') || '0');
        const search = searchParams.get('search') || '';

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

            const total = await Enquiry.countDocuments(query);
            const totalPages = Math.ceil(total / limit);

            const enquiries = await Enquiry.find(query)
                .sort({ createdAt: -1 })
                .skip((page - 1) * limit)
                .limit(limit);

            return NextResponse.json({
                data: enquiries,
                totalPages,
                currentPage: page,
                totalEntries: total
            });
        }

        // Fetch all enquiries by default
        const enquiries = await Enquiry.find().sort({ createdAt: -1 });
        return NextResponse.json(enquiries);

    } catch (error) {
        return NextResponse.json({ message: 'Error fetching enquiries', error }, { status: 500 });
    }
}
