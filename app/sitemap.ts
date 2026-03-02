import { MetadataRoute } from 'next'
import dbConnect from '@/lib/db'
import LandingPage from '@/models/LandingPage'
import Blog from '@/models/Blog'

const BASE_URL = 'https://bharathiinstitutes.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    await dbConnect();

    // Static Routes
    const routes = [
        '',
        '/about',
        '/courses',
        '/placements',
        '/gallery',
        '/contact',
        '/facilities',
        '/register',
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    // Dynamic Landing Pages
    const landingPages = await LandingPage.find({}, 'slug updatedAt');

    const landingPageRoutes = landingPages.map((page) => ({
        url: `${BASE_URL}/${page.slug}`,
        lastModified: page.updatedAt || new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))

    // Dynamic Blogs
    const blogs = await Blog.find({ isActive: true }, 'slug updatedAt');
    const blogRoutes = blogs.map((blog) => ({
        url: `${BASE_URL}/blog/${blog.slug}`,
        lastModified: blog.updatedAt || new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    return [...routes, ...landingPageRoutes, ...blogRoutes]
}
