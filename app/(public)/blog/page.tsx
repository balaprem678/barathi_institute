import PageBreadcrumb from '@/components/PageBreadcrumb';
import Link from 'next/link';
import Image from 'next/image';
import './blog.scss';
import { Images } from '@/app/utilis/Images';
import dbConnect from '@/lib/db';
import Blog from '@/models/Blog';

export const dynamic = 'force-dynamic';

export default async function Blogs() {
  await dbConnect();
  // Fetch active blogs, featured first, then newest
  const blogs = await Blog.find({ isActive: true }).sort({ isFeatured: -1, createdAt: -1 });

  return (
    <div className="blogs header_top">
      <div className="container">

        <div className="header">
          <h4>Blogs</h4>
        </div>

        {blogs.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-xl text-gray-500">No blog posts found. Check back soon!</h3>
          </div>
        ) : (
          <div className="blog-grid">
            {blogs.map((post) => (
              <div className="blog-card" key={post._id.toString()}>
                <div className="card-image">
                  <div className="image-wrapper">
                    {post.imagePath ? (
                      <Image
                        src={post.imagePath}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="blog-image"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">No Image</span>
                      </div>
                    )}
                    <div className="image-overlay">
                      <span className="course-badge">{post.course || 'Institute'}</span>
                    </div>
                  </div>
                </div>

                <div className="card-content">
                  <div className="student-info">
                    <h3 className="student-name">{post.studentName || 'Bharathi Student'}</h3>
                    <div className="course-info">
                      <span className="course">{post.course} Student</span>
                      <span className="duration">{new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                    </div>
                  </div>

                  <h4 className="blog-title">{post.title}</h4>

                  <div className="content-preview">
                    <p>{post.content.substring(0, 150).replace(/<[^>]*>?/gm, '')}...</p>
                  </div>

                  <div className="card-footer pt-4">
                    <Link href={`/blog/${post.slug}`} className="read-more-btn w-full justify-center">
                      Read Full Story
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="cta-section">
          <div className="cta-content">
            <h2>Ready to Write Your Success Story?</h2>
            <p>Join hundreds of successful graduates who started their journey at our institute</p>
            <div className="cta-buttons">
              <Link href="/register" className="cta-primary">
                Apply Now
              </Link>
              <Link href="/contact" className="cta-secondary">
                Book Campus Tour
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
