import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Settings from '@/models/Settings';
import { verifyToken } from '@/lib/auth';

export async function GET(req: Request) {
    try {
        await dbConnect();

        // Auth check
        const authHeader = req.headers.get('authorization');
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        let settings = await Settings.findOne();
        if (!settings) {
            settings = await Settings.create({});
        }
        return NextResponse.json(settings);
    } catch (error) {
        return NextResponse.json({ message: 'Error fetching settings' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        await dbConnect();

        // Auth check
        const authHeader = req.headers.get('authorization');
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        const body = await req.json();
        let settings = await Settings.findOne();

        if (settings) {
            settings.smtpHost = body.smtpHost;
            settings.smtpPort = body.smtpPort;
            settings.smtpUser = body.smtpUser;
            settings.smtpPass = body.smtpPass;
            settings.fromEmail = body.fromEmail;
            settings.recipientEmails = body.recipientEmails;

            // Update SEO settings
            if (body.seo) {
                settings.seo = { ...settings.seo, ...body.seo };
            }

            // Update General settings
            if (body.general) {
                settings.general = { ...settings.general, ...body.general };
            }

            await settings.save();
        } else {
            await Settings.create(body);
        }

        return NextResponse.json({ message: 'Settings updated successfully' });
    } catch (error) {
        return NextResponse.json({ message: 'Error updating settings' }, { status: 500 });
    }
}
