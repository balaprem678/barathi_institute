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
    <div className="blogs header_top mb-4">
      <div className="container">

        <div className="headers mb-4">
          <h4>Blogs</h4>
          <p className="text-muted text-center font-medium">
            Our Latest Blogs and Student Success Stories: Get Inspired by Real Experiences and Achievements at Bharathi Institute.
          </p>

        </div>

        {blogs.length === 0 ? (
          <div className="text-center py-5">
            <h3 className="text-xl text-muted">
              No blog posts found. Check back soon!
            </h3>
          </div>
        ) : (
          <div className="row g-4">
            {blogs.map((post) => (
              <div
                className="col-12 col-sm-6 col-md-4"
                key={post._id.toString()}
              >
                <div className="card h-100 shadow-sm">

                  {/* Image Section */}
                  <div className="position-relative blog_img">
                    {post.imagePath ? (
                      <Image
                        src={post.imagePath}
                        alt={post.title}
                        fill
                        className="card-img-top object-fit-contain"
                        unoptimized
                      />
                    ) : (
                      <div className="w-100 h-100 bg-light d-flex align-items-center justify-content-center">
                        <span className="text-muted">No Image</span>
                      </div>
                    )}

                    <span className="badge bg-primary position-absolute top-0 start-0 m-2">
                      {post.course || "Institute"}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="card-body d-flex flex-column">

                    <h6 className="fw-bold mb-1">
                      {post.studentName || "Bharathi Student"}
                    </h6>

                    <small className="text-muted mb-2">
                      {post.course} Student •{" "}
                      {new Date(post.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })}
                    </small>

                    <h5 className="card-title">{post.title}</h5>

                    <p className="card-text text-muted flex-grow-1">
                      {post.content
                        .substring(0, 150)
                        .replace(/<[^>]*>?/gm, "")}
                      ...
                    </p>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="btn btn-outline-primary mt-auto w-100"
                    >
                      Read Full Story
                    </Link>

                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
