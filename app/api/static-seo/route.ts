import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import StaticPageSEO from '@/models/StaticPageSEO';
import { verifyToken } from '@/lib/auth';

export async function GET() {
    try {
        await dbConnect();
        const seoData = await StaticPageSEO.find().sort({ pageName: 1 });
        return NextResponse.json(seoData);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch SEO data' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const token = request.headers.get('authorization')?.split(' ')[1];
        const user = verifyToken(token);
        if (!user || user.role !== 'admin') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        await dbConnect();
        const body = await request.json();
        
        const newSEO = await StaticPageSEO.create(body);
        return NextResponse.json(newSEO, { status: 201 });
    } catch (error: any) {
        if (error.code === 11000) {
            return NextResponse.json({ error: 'Page path already exists' }, { status: 400 });
        }
        return NextResponse.json({ error: 'Failed to create SEO entry' }, { status: 500 });
    }
}
