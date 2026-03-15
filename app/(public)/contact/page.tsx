import React from 'react';
import ContactContent from './ContactContent';
import { getStaticPageMetadata, getStaticPageSchema } from '@/lib/seo';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    return await getStaticPageMetadata('/contact');
}

export default async function ContactPage() {
    const schemaScript = await getStaticPageSchema('/contact');

    return (
        <ContactContent schemaScript={schemaScript} />
    );
}