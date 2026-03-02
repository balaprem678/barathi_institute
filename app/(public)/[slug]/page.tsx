import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import dbConnect from '@/lib/db';
import LandingPage from '@/models/LandingPage';
import '../locationseo/locationseo.scss';

interface PageProps {
    params: Promise<{ slug: string }>;
}

// Fetch landing page data
async function getLandingPage(slug: string) {
    await dbConnect();
    const page = await LandingPage.findOne({ slug, isActive: true });
    return page;
}

// Generate Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const page = await getLandingPage(slug);

    if (!page) {
        return {};
    }

    const { seo } = page;

    const keywords = [seo.focusKeywords, seo.metaKeywords].filter(Boolean).join(', ');

    return {
        title: seo.metaTitle || page.course,
        description: seo.metaDescription,
        keywords: keywords,
        openGraph: {
            title: seo.metaTitle || page.course,
            description: seo.metaDescription,
        },
        other: {
            'focus-keywords': seo.focusKeywords || '',
        }
    };
}

export const dynamic = 'force-dynamic';

export default async function DynamicLandingPage({ params }: PageProps) {
    const { slug } = await params;
    const page = await getLandingPage(slug);

    if (!page) {
        notFound();
    }

    if (page.htmlContent) {
        return (
            <div className="seo-page-content">
                {page.imagePath && (
                    <div className="landing-banner w-full relative h-[400px] md:h-[500px] mb-12">
                        <img
                            src={page.imagePath}
                            alt={page.course}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center p-6">
                            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                                {page.course} <br />
                                <span className="text-blue-400">in {page.city}</span>
                            </h1>
                        </div>
                    </div>
                )}
                <div dangerouslySetInnerHTML={{ __html: page.htmlContent }} />
            </div>
        );
    }

    return (
        <div className="p-10 text-center">
            <h1 className="text-2xl font-bold">{page.course} in {page.city}</h1>
            <p className="mt-4 text-gray-600">This page is still being customized. Check back soon!</p>
        </div>
    );
}
