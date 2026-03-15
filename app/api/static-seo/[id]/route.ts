import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import StaticPageSEO from '@/models/StaticPageSEO';
import { verifyToken } from '@/lib/auth';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await dbConnect();
        const { id } = await params;
        const seoData = await StaticPageSEO.findById(id);
        if (!seoData) {
            return NextResponse.json({ error: 'SEO data not found' }, { status: 404 });
        }
        return NextResponse.json(seoData);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch SEO data' }, { status: 500 });
    }
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const authHeader = request.headers.get('authorization');
        const token = authHeader?.split(' ')[1];

        if (!token) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const user = verifyToken(token) as any;
        if (!user || user.role !== 'admin') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        await dbConnect();
        const { id } = await params;
        const body = await request.json();
        
        const updatedSEO = await StaticPageSEO.findByIdAndUpdate(id, body, { new: true });
        if (!updatedSEO) {
            return NextResponse.json({ error: 'SEO data not found' }, { status: 404 });
        }
        return NextResponse.json(updatedSEO);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update SEO data' }, { status: 500 });
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const authHeader = request.headers.get('authorization');
        const token = authHeader?.split(' ')[1];

        if (!token) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const user = verifyToken(token) as any;
        if (!user || user.role !== 'admin') {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        await dbConnect();
        const { id } = await params;
        await StaticPageSEO.findByIdAndDelete(id);
        return NextResponse.json({ message: 'SEO data deleted' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete SEO data' }, { status: 500 });
    }
}
