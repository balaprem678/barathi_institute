export const dynamic = 'force-dynamic';
import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import dbConnect from '@/lib/db';
import Blog from '@/models/Blog';
import '../blog.scss';
import { Images } from '@/app/utilis/Images';

interface PageProps {
    params: Promise<{ slug: string }>;
}

async function getBlogData(slug: string) {
    await dbConnect();
    const blog = await Blog.findOne({ slug, isActive: true });

    // Fetch recent blogs for the sidebar (excluding current)
    const recentBlogs = await Blog.find({
        slug: { $ne: slug },
        isActive: true
    })
        .sort({ createdAt: -1 })
        .limit(5);

    return { blog, recentBlogs };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const { blog } = await getBlogData(slug);

    if (!blog) return {};

    const { seo } = blog;
    const title = seo?.metaTitle || blog.title;
    const description = seo?.metaDescription;
    const imageUrl = blog.imagePath || 'https://bharathiinstitutes.com/images/fav-icon/apple-touch-icon.png';

    return {
        title,
        description,
        keywords: [seo?.focusKeywords, seo?.metaKeywords].filter(Boolean).join(', '),
        openGraph: {
            title,
            description,
            type: 'article',
            publishedTime: blog.createdAt.toISOString(),
            images: blog.imagePath ? [{ url: blog.imagePath, width: 1200, height: 630, alt: title }] : [],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [imageUrl],
        }
    };
}

export default async function BlogDetail({ params }: PageProps) {
    const { slug } = await params;
    const { blog, recentBlogs } = await getBlogData(slug);

    if (!blog) notFound();

    return (
        <div className="blog-detail-wrapper">
            {/* Banner */}
            <section className="blog_banner">
                <Image 
                    src={Images.testimonials_banner} 
                    alt="Blog Detail Banner" 
                    priority 
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="100vw"
                />
                <h1 style={{ zIndex: 1 }}>Blog Details</h1>
            </section>

            <div className="container py-20">
                <div className="flex flex-col lg:flex-row gap-16 my-5">
                    {/* Main Content */}
                    <div className="lg:w-2/3">
                        <article className="blog-post-content">
                            {blog.imagePath && (
                                <div className="relative w-full rounded-3xl overflow-hidden mb-10 shadow-2xl ">
                                    <Image
                                        src={blog.imagePath}
                                        alt={blog.title}
                                        fill
                                        className="object-contain blog-img-details"
                                        priority
                                        unoptimized
                                          
                                    />    
                                </div>
                            )}

                            <div className="flex flex-wrap items-center gap-6 mb-8 mt-4">
                                <span className="course-badge-large">
                                    {blog.course || 'Educational'}
                                </span>
                                <div className="flex items-center text-gray-400 text-sm bg-gray-50 px-4 py-2 rounded-full">
                                    <span className="mr-2">📅</span>
                                    {new Date(blog.createdAt).toLocaleDateString('en-US', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                    })}
                                </div>
                                {blog.studentName && (
                                    <div className="flex items-center text-gray-400 text-sm bg-gray-50 px-4 py-2 rounded-full">
                                        <span className="mr-2">👤</span>
                                        {blog.studentName}
                                    </div>
                                )}
                            </div>

                            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-10 leading-[1.1] tracking-tight">
                                {blog.title}
                            </h1>

                            {/* Dynamic Schema Script */}
                            {blog.schemaScript && (
                                <div dangerouslySetInnerHTML={{ __html: blog.schemaScript }} />
                            )}

                            {/* Automated BlogPosting Schema for Google Image Indexing */}
                            <script
                                type="application/ld+json"
                                dangerouslySetInnerHTML={{
                                    __html: JSON.stringify({
                                        "@context": "https://schema.org",
                                        "@type": "BlogPosting",
                                        "headline": blog.title,
                                        "image": blog.imagePath ? [`https://bharathiinstitutes.com${blog.imagePath}`] : [],
                                        "datePublished": blog.createdAt.toISOString(),
                                        "dateModified": blog.updatedAt ? blog.updatedAt.toISOString() : blog.createdAt.toISOString(),
                                        "author": {
                                            "@type": "Person",
                                            "name": blog.studentName || "Bharathi Institute Team"
                                        },
                                        "publisher": {
                                            "@type": "Organization",
                                            "name": "Bharathi Institute",
                                            "logo": {
                                                "@type": "ImageObject",
                                                "url": "https://bharathiinstitutes.com/images/favicons/192x192.png"
                                            }
                                        },
                                        "description": blog.seo?.metaDescription || blog.title
                                    })
                                }}
                            />

                            <div
                                className="blog-content-body prose max-w-none"
                                dangerouslySetInnerHTML={{ __html: blog.content }}
                            />

                        </article>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:w-1/3">
                        <div className="sticky top-24">
                            {/* Recent Blogs Widget */}
                            <div className="widget-box">
                                <h3 className="widget-title">Recent Stories</h3>
                                <div className="space-y-6">
                                    {recentBlogs.map((recent) => (
                                        <Link
                                            key={recent._id.toString()}
                                            href={`/blog/${recent.slug}`}
                                            className="recent-post-item group"
                                        >
                                            <div className="post-thumb">
                                                {recent.imagePath ? (
                                                    <Image
                                                        src={recent.imagePath}
                                                        alt={recent.title}
                                                        fill
                                                        className="object-cover"
                                                        unoptimized
                                                    />
                                                ) : (
                                                    <div className="no-image-text">
                                                        No Image
                                                    </div>
                                                )}
                                            </div>
                                            <div className="post-info">
                                                <h4 className="post-title">
                                                    {recent.title}
                                                </h4>
                                                <span className="post-date">
                                                    {new Date(recent.createdAt).toLocaleDateString('en-US', {
                                                        month: 'short',
                                                        day: 'numeric'
                                                    })}
                                                </span>
                                            </div>
                                        </Link>
                                    ))}

                                    {recentBlogs.length === 0 && (
                                        <p className="text-gray-400 text-sm italic">Stay tuned for more stories.</p>
                                    )}
                                </div>
                            </div>

                            {/* CTA Widget */}
                            <div className="cta-widget shadow-2xl">
                                <h3>Ready to start?</h3>
                                <p>Join Bharathi Institutes today and begin your journey towards a successful career.</p>
                                <Link href="/register" className="cta-btn">
                                    Apply for Admission
                                </Link>
                                <div className="mt-4 text-center">
                                    <Link href="/contact" className="text-white/70 text-sm hover:text-white transition-colors underline-offset-4 hover:underline">
                                        Have questions? Contact us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
