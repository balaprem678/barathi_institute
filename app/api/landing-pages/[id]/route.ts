import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import LandingPage from '@/models/LandingPage';

export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> } // Updated to match Next.js 15+ async params
) {
    try {
        await dbConnect();
        const { id } = await params;
        const page = await LandingPage.findById(id);
        if (!page) {
            return NextResponse.json({ message: 'Page not found' }, { status: 404 });
        }
        return NextResponse.json(page);
    } catch (error) {
        return NextResponse.json({ message: 'Error fetching landing page' }, { status: 500 });
    }
}

export async function PUT(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await dbConnect();
        const { id } = await params;

        // Auth check
        const authHeader = req.headers.get('authorization');
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        const body = await req.json();
        const updatedPage = await LandingPage.findByIdAndUpdate(id, body, { new: true });

        if (!updatedPage) {
            return NextResponse.json({ message: 'Page not found' }, { status: 404 });
        }

        return NextResponse.json(updatedPage);
    } catch (error) {
        return NextResponse.json({ message: 'Error updating landing page' }, { status: 500 });
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await dbConnect();
        const { id } = await params;

        // Auth check
        const authHeader = req.headers.get('authorization');
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        const deletedPage = await LandingPage.findByIdAndDelete(id);

        if (!deletedPage) {
            return NextResponse.json({ message: 'Page not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Page deleted successfully' });
    } catch (error) {
        return NextResponse.json({ message: 'Error deleting landing page' }, { status: 500 });
    }
}
