import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Blog from '@/models/Blog';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

// Public GET - fetch all active blogs, sorted by isFeatured then date
export async function GET(req: Request) {
    try {
        await dbConnect();
        const blogs = await Blog.find({ isActive: true }).sort({ isFeatured: -1, createdAt: -1 });
        return NextResponse.json(blogs);
    } catch (error) {
        return NextResponse.json({ message: 'Error fetching blogs', error }, { status: 500 });
    }
}

// Admin POST - Create new blog with image
export async function POST(req: Request) {
    try {
        await dbConnect();
        const formData = await req.formData();

        const title = formData.get('title') as string;
        const slug = formData.get('slug') as string;
        const content = formData.get('content') as string;
        const course = formData.get('course') as string;
        const studentName = formData.get('studentName') as string;
        const isFeatured = formData.get('isFeatured') === 'true';
        const isActive = formData.get('isActive') === 'true';

        // SEO details
        const seo = {
            metaTitle: formData.get('seo.metaTitle') as string,
            metaDescription: formData.get('seo.metaDescription') as string,
            metaKeywords: formData.get('seo.metaKeywords') as string,
            focusKeywords: formData.get('seo.focusKeywords') as string,
        };

        const body: any = {
            title,
            slug,
            content,
            course,
            studentName,
            isFeatured,
            isActive,
            seo
        };

        const file = formData.get('image') as File;
        if (file && file.size > 0) {
            const buffer = Buffer.from(await file.arrayBuffer());
            const fileName = Date.now() + '_' + file.name.replace(/\s+/g, '_');
            const uploadDir = path.join(process.cwd(), 'public/uploads/blogs');

            await mkdir(uploadDir, { recursive: true });
            await writeFile(path.join(uploadDir, fileName), buffer);
            body.imagePath = `/uploads/blogs/${fileName}`;
        }

        const blog = new Blog(body);
        await blog.save();

        return NextResponse.json({ message: 'Blog created successfully', blog }, { status: 201 });
    } catch (error: any) {
        console.error('Blog creation error:', error);
        if (error.code === 11000) {
            return NextResponse.json({ message: 'Slug already exists. Please choose a different title or slug.' }, { status: 400 });
        }
        return NextResponse.json({ message: 'Error creating blog', error }, { status: 500 });
    }
}
