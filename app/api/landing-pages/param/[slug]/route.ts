import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import LandingPage from '@/models/LandingPage';

export async function GET(
    req: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        await dbConnect();
        const { slug } = await params;

        const page = await LandingPage.findOne({ slug, isActive: true });

        if (!page) {
            return NextResponse.json({ message: 'Page not found' }, { status: 404 });
        }

        return NextResponse.json(page);
    } catch (error) {
        return NextResponse.json({ message: 'Error fetching landing page' }, { status: 500 });
    }
}
