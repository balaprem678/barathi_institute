import React from 'react';
import GalleryContent from './GalleryContent';
import { getStaticPageMetadata, getStaticPageSchema } from '@/lib/seo';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    return await getStaticPageMetadata('/gallery');
}

export default async function GalleryPage() {
    const schemaScript = await getStaticPageSchema('/gallery');

    return (
        <GalleryContent schemaScript={schemaScript} />
    );
}