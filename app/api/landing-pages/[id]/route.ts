import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import LandingPage from '@/models/LandingPage';
import { writeFile, mkdir, unlink } from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

// Get individual landing page by ID or Slug
export async function GET(
    req: Request,
    { params }: { params: Promise<{ id: string }> } // Updated to match Next.js 15+ async params
) {
    try {
        await dbConnect();
        const { id } = await params;
        const page = await LandingPage.findOne({ $or: [{ _id: id.match(/^[0-9a-fA-F]{24}$/) ? id : null }, { slug: id }] });

        if (!page) {
            return NextResponse.json({ message: 'Page not found' }, { status: 404 });
        }
        return NextResponse.json(page);
    } catch (error) {
        return NextResponse.json({ message: 'Error fetching landing page' }, { status: 500 });
    }
}

// Update landing page
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

        const formData = await req.formData();
        console.log('PUT FormData Keys:', Array.from(formData.keys()));
        const existingPage = await LandingPage.findById(id);

        if (!existingPage) {
            return NextResponse.json({ message: 'Page not found' }, { status: 404 });
        }

        const body: any = {
            slug: formData.get('slug') as string,
            title: formData.get('title') as string,
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
                return existingPage.imagePath;
            })()
        };

        const file = formData.get('image') as File;
        console.log('Check Image File (Update):', file ? { name: file.name, size: file.size, type: file.type } : 'No new file');
        if (file && file.size > 0) {
            // Delete old image if it exists
            if (existingPage.imagePath) {
                try {
                    const oldPath = path.resolve(process.cwd(), 'public', existingPage.imagePath.startsWith('/') ? existingPage.imagePath.substring(1) : existingPage.imagePath);
                    await unlink(oldPath);
                } catch (err) {
                    console.error('Error deleting old image:', err);
                }
            }

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
        } else if (formData.get('removeImage') === 'true') {
            body.imagePath = '';
            if (existingPage.imagePath) {
                try {
                    const oldPath = path.resolve(process.cwd(), 'public', existingPage.imagePath.startsWith('/') ? existingPage.imagePath.substring(1) : existingPage.imagePath);
                    await unlink(oldPath);
                } catch (err) {
                    console.error('Error deleting old image during removal:', err);
                }
            }
        }

        console.log('Update Body imagePath:', body.imagePath);
        const updatedPage = await LandingPage.findByIdAndUpdate(id, body, { new: true });
        console.log('Update success:', updatedPage?._id, 'ImagePath:', updatedPage?.imagePath);
        return NextResponse.json(updatedPage);
    } catch (error) {
        console.error('Landing page update error:', error);
        return NextResponse.json({ message: 'Error updating landing page', error: String(error) }, { status: 500 });
    }
}

// Delete landing page
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

        const page = await LandingPage.findById(id);
        if (!page) {
            return NextResponse.json({ message: 'Page not found' }, { status: 404 });
        }

        // Delete associated image
        if (page.imagePath) {
            try {
                const imagePath = path.resolve(process.cwd(), 'public', page.imagePath.startsWith('/') ? page.imagePath.substring(1) : page.imagePath);
                await unlink(imagePath);
            } catch (err) {
                console.error('Error deleting image:', err);
            }
        }

        await LandingPage.findByIdAndDelete(id);
        return NextResponse.json({ message: 'Page deleted successfully' });
    } catch (error) {
        return NextResponse.json({ message: 'Error deleting landing page' }, { status: 500 });
    }
}
