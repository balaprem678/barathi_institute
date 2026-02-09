import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import LandingPage from '@/models/LandingPage';

export async function GET(req: Request) {
    try {
        await dbConnect();
        // Fetch all landing pages, sorted by creation date
        const pages = await LandingPage.find({}).sort({ createdAt: -1 });
        return NextResponse.json(pages);
    } catch (error) {
        return NextResponse.json({ message: 'Error fetching landing pages' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        await dbConnect();

        // Auth check - should be added here similar to settings
        const authHeader = req.headers.get('authorization');
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        const body = await req.json();

        // Basic validation
        if (!body.slug || !body.city || !body.courseType) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        // Check if slug already exists
        const existingPage = await LandingPage.findOne({ slug: body.slug });
        if (existingPage) {
            return NextResponse.json({ message: 'Slug already exists' }, { status: 400 });
        }

        const newPage = await LandingPage.create(body);
        return NextResponse.json(newPage, { status: 201 });
    } catch (error) {
        console.error('Error creating landing page:', error);
        return NextResponse.json({ message: 'Error creating landing page' }, { status: 500 });
    }
}
