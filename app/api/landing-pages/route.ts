import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import LandingPage from '@/models/LandingPage';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

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

        // Auth check
        const authHeader = req.headers.get('authorization');
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        const formData = await req.formData();
        console.log('POST FormData Keys:', Array.from(formData.keys()));

        const slug = formData.get('slug') as string;
        const city = formData.get('city') as string;
        const course = formData.get('course') as string;
        const htmlContent = formData.get('htmlContent') as string;
        const isActive = formData.get('isActive') === 'true';

        console.log('POST Data Parsed:', { slug, city, course, isActive });

        // Basic validation
        if (!slug || !city || !course) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        // Check if slug already exists
        const existingPage = await LandingPage.findOne({ slug });
        if (existingPage) {
            return NextResponse.json({ message: 'Slug already exists' }, { status: 400 });
        }

        const body: any = {
            slug: formData.get('slug') as string,
            city: formData.get('city') as string,
            course: formData.get('course') as string,
            htmlContent: formData.get('htmlContent') as string,
            isActive: formData.get('isActive') === 'true',
            seo: {
                metaTitle: formData.get('seo.metaTitle') as string,
                metaDescription: formData.get('seo.metaDescription') as string,
                metaKeywords: formData.get('seo.metaKeywords') as string,
                focusKeywords: formData.get('seo.focusKeywords') as string,
            },
            imagePath: (() => {
                const img = formData.get('imagePath') as string;
                if (img && img !== 'undefined' && img !== 'null' && img !== '') return img;
                return undefined;
            })()
        };

        const file = formData.get('image') as File;
        console.log('Check Image File:', file ? { name: file.name, size: file.size, type: file.type } : 'No file');
        if (file && file.size > 0) {
            const buffer = Buffer.from(await file.arrayBuffer());
            const baseName = file.name.replace(/\.[^/.]+$/, "").replace(/\s+/g, '_');
            const fileName = `${Date.now()}_${baseName}.webp`;
            const uploadDir = path.resolve(process.cwd(), 'public/uploads/landing-pages');

            await mkdir(uploadDir, { recursive: true });

            // Compress and convert to webp
            const optimizedBuffer = await sharp(buffer)
                .webp({ quality: 80 })
                .toBuffer();

            await writeFile(path.join(uploadDir, fileName), optimizedBuffer);
            body.imagePath = `/uploads/landing-pages/${fileName}`;
        }

        console.log('--- DB Record ---');
        const newPage = await LandingPage.create(body);
        console.log('Saved success:', newPage._id, 'ImagePath:', newPage.imagePath);
        return NextResponse.json(newPage, { status: 201 });
    } catch (error) {
        console.error('Error creating landing page:', error);
        return NextResponse.json({ message: 'Error creating landing page', error: String(error) }, { status: 500 });
    }
}
