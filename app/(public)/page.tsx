import React from 'react';
import Home from '@/components/Home';
import Blogs from './blog/page';
import { getStaticPageMetadata, getStaticPageSchema } from '@/lib/seo';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    return await getStaticPageMetadata('/');
}


export default async function App() {
    const schemaScript = await getStaticPageSchema('/');

    return (
        <>
            <Home schemaScript={schemaScript} />
            {/* <Blogs /> */}
        </>
    );
}
