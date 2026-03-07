import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Blog from '@/models/Blog';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

export async function GET(req: Request) {
    try {
        await dbConnect();

        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get('page') || '0');
        const limit = parseInt(searchParams.get('limit') || '0');
        const search = searchParams.get('search') || '';

        // Determine if we should paginate (Admin) or return all active (Public)
        if (page > 0 && limit > 0) {
            const query: any = {};
            if (search) {
                query.$or = [
                    { title: { $regex: search, $options: 'i' } },
                    { course: { $regex: search, $options: 'i' } },
                    { studentName: { $regex: search, $options: 'i' } }
                ];
            }

            const total = await Blog.countDocuments(query);
            const totalPages = Math.ceil(total / limit);

            const blogs = await Blog.find(query)
                .select('-content') // Exclude heavy field for admin lists
                .sort({ createdAt: -1 })
                .skip((page - 1) * limit)
                .limit(limit);

            return NextResponse.json({
                data: blogs,
                totalPages,
                currentPage: page,
                totalEntries: total
            });
        }

        // Default behavior (Public) - fetch all active blogs
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
            const baseName = file.name.replace(/\.[^/.]+$/, "").replace(/\s+/g, '_');
            const fileName = `${Date.now()}_${baseName}.webp`;
            const uploadDir = path.resolve(process.cwd(), 'public/uploads/blogs');

            console.log('--- Upload Check ---');
            console.log('Saving image to:', uploadDir);
            console.log('Working directory:', process.cwd());

            await mkdir(uploadDir, { recursive: true });
            const optimizedBuffer = await sharp(buffer).webp({ quality: 80 }).toBuffer();
            await writeFile(path.join(uploadDir, fileName), optimizedBuffer);
            body.imagePath = `/uploads/blogs/${fileName}`;
            console.log('Image saved successfully as:', body.imagePath);
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
