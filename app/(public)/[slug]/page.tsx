import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import dbConnect from '@/lib/db';
import LandingPage from '@/models/LandingPage';
import HotelManagementTemplate from '@/components/templates/HotelManagementTemplate';
import ParamedicalTemplate from '@/components/templates/ParamedicalTemplate';

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

    return {
        title: seo.title || seo.metaTitle || page.courseType, // Fallback to courseType if no title
        description: seo.description || seo.metaDescription,
        keywords: seo.keywords || seo.metaKeywords,
        openGraph: {
            title: seo.ogTitle || seo.metaTitle || seo.title,
            description: seo.ogDescription || seo.metaDescription || seo.description,
        },
    };
}

export default async function DynamicLandingPage({ params }: PageProps) {
    const { slug } = await params;
    const page = await getLandingPage(slug);

    if (!page) {
        notFound();
    }

    // Render the appropriate template based on courseType
    // We pass the 'city' to the template so it can dynamically update headings
    switch (page.courseType) {
        case 'hotel-management':
            return <HotelManagementTemplate city={page.city} />;
        case 'paramedical':
            return <ParamedicalTemplate city={page.city} />;
        default:
            // Fallback or specific error if course type is unknown
            return <div>Unknown Course Type</div>;
    }
}
