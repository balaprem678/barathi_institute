import dbConnect from '@/lib/db';
import StaticPageSEO from '@/models/StaticPageSEO';
import { Metadata } from 'next';

export async function getStaticPageMetadata(path: string): Promise<Metadata> {
    try {
        await dbConnect();
        const seo = await StaticPageSEO.findOne({ pagePath: path });

        if (!seo) return {};

        return {
            title: seo.metaTitle,
            description: seo.metaDescription,
            keywords: seo.metaKeywords,
        };
    } catch (error) {
        console.error(`Error fetching SEO for ${path}:`, error);
        return {};
    }
}

export async function getStaticPageSchema(path: string): Promise<string> {
    try {
        await dbConnect();
        const seo = await StaticPageSEO.findOne({ pagePath: path });
        return seo?.schemaScript || '';
    } catch (error) {
        console.error(`Error fetching schema for ${path}:`, error);
        return '';
    }
}
