import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import dbConnect from '@/lib/db';
import LandingPage from '@/models/LandingPage';
import Image from 'next/image';
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
            <div className="seo-page-content 1">
                {page.imagePath ? (
                    <div className="landing-banner w-full relative h-[400px] md:h-[500px] mb-12">
                        <Image
                            src={page.imagePath}
                            alt={page.course}
                            fill
                            className="object-cover"
                            priority
                            unoptimized
                        />
                        {page.title && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-center px-4">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-md max-w-4xl">
                                    {page.title}
                                </h1>
                            </div>
                        )}
                    </div>
                ) : page.title ? (
                    <div className="bg-gradient-to-r from-blue-700 to-indigo-900 py-16 px-4 text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-sm max-w-4xl mx-auto">
                            {page.title}
                        </h1>
                    </div>
                ) : null}

                {/* Dynamic Schema Script */}
                {page.schemaScript && (
                    <div dangerouslySetInnerHTML={{ __html: page.schemaScript }} />
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
