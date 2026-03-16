import React from 'react';
import AboutContent from './AboutContent';
import { getStaticPageMetadata, getStaticPageSchema } from '@/lib/seo';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    return await getStaticPageMetadata('/about');
}

export default async function AboutPage() {
    const schemaScript = await getStaticPageSchema('/about');

    return (
        <AboutContent schemaScript={schemaScript} />
    );
}