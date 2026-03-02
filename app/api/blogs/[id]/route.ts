import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Blog from '@/models/Blog';
import { writeFile, mkdir, unlink } from 'fs/promises';
import path from 'path';

// Get individual blog by ID or Slug
export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        await dbConnect();
        const { id } = await params;
        const blog = await Blog.findOne({ $or: [{ _id: id.match(/^[0-9a-fA-F]{24}$/) ? id : null }, { slug: id }] });

        if (!blog) {
            return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
        }

        return NextResponse.json(blog);
    } catch (error) {
        return NextResponse.json({ message: 'Error fetching blog', error }, { status: 500 });
    }
}

// Update blog
export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        await dbConnect();
        const { id } = await params;
        const formData = await req.formData();

        const existingBlog = await Blog.findById(id);
        if (!existingBlog) {
            return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
        }

        const body: any = {
            title: formData.get('title'),
            slug: formData.get('slug'),
            content: formData.get('content'),
            course: formData.get('course'),
            studentName: formData.get('studentName'),
            isFeatured: formData.get('isFeatured') === 'true',
            isActive: formData.get('isActive') === 'true',
            seo: {
                metaTitle: formData.get('seo.metaTitle'),
                metaDescription: formData.get('seo.metaDescription'),
                metaKeywords: formData.get('seo.metaKeywords'),
                focusKeywords: formData.get('seo.focusKeywords'),
            }
        };

        const file = formData.get('image') as File;
        if (file && file.size > 0) {
            // Delete old image if it exists
            if (existingBlog.imagePath) {
                try {
                    const oldPath = path.resolve(process.cwd(), 'public', existingBlog.imagePath.startsWith('/') ? existingBlog.imagePath.substring(1) : existingBlog.imagePath);
                    await unlink(oldPath);
                } catch (err) {
                    console.error('Error deleting old image:', err);
                }
            }

            const buffer = Buffer.from(await file.arrayBuffer());
            const fileName = Date.now() + '_' + file.name.replace(/\s+/g, '_');
            const uploadDir = path.resolve(process.cwd(), 'public/uploads/blogs');

            await mkdir(uploadDir, { recursive: true });
            await writeFile(path.join(uploadDir, fileName), buffer);
            body.imagePath = `/uploads/blogs/${fileName}`;
        }

        const updatedBlog = await Blog.findByIdAndUpdate(id, body, { new: true });
        return NextResponse.json({ message: 'Blog updated successfully', blog: updatedBlog });

    } catch (error) {
        console.error('Blog update error:', error);
        return NextResponse.json({ message: 'Error updating blog', error }, { status: 500 });
    }
}

// Delete blog
export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        await dbConnect();
        const { id } = await params;

        const blog = await Blog.findById(id);
        if (!blog) {
            return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
        }

        // Delete associated image
        if (blog.imagePath) {
            try {
                const imagePath = path.resolve(process.cwd(), 'public', blog.imagePath.startsWith('/') ? blog.imagePath.substring(1) : blog.imagePath);
                await unlink(imagePath);
            } catch (err) {
                console.error('Error deleting image:', err);
            }
        }

        await Blog.findByIdAndDelete(id);
        return NextResponse.json({ message: 'Blog and associated image deleted successfully' });

    } catch (error) {
        return NextResponse.json({ message: 'Error deleting blog', error }, { status: 500 });
    }
}
