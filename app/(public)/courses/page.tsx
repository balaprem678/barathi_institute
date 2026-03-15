import React from 'react';
import CoursesContent from './CoursesContent';
import { getStaticPageMetadata, getStaticPageSchema } from '@/lib/seo';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    return await getStaticPageMetadata('/courses');
}

export default async function CoursesPage() {
    const schemaScript = await getStaticPageSchema('/courses');

    return (
        <CoursesContent schemaScript={schemaScript} />
    );
}
