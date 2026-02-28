'use client';

import Image from "next/image";
import Link from "next/link";
import "./blog-details.scss"

interface Blog {
  id: number;
  slug: string;
  image?: string;
  description: string;
}

export default function BlogDetail() {

  const apiUrl = "https://your-api-url.com";

  /* ✅ Main Blog Data */
  const pageImage =
    "https://your-api-url.com/uploads/main-blog.jpg";

  const safePageDescription = `
    <h2>Main Blog Heading</h2>
    <p>This is full blog description content...</p>
  `;

  /* ✅ Recent Blogs */
  const recentBlogs: Blog[] = [
    {
      id: 1,
      slug: "blog-one",
      image: "blog1.jpg",
      description:
        "<h4>Recent Blog One</h4><p>content...</p>",
    },
    {
      id: 2,
      slug: "blog-two",
      image: "blog2.jpg",
      description:
        "<h4>Recent Blog Two</h4><p>content...</p>",
    },
  ];

  /* ✅ Extract Heading */
  const extractFirstHeading = (html: string) => {
    const match = html.match(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/i);
    return match ? match[0] : "";
  };

  return (
    <div className="blogs header_top mt-4">
      <div className="container">
        <div className="header">
          <h4>Blogs</h4>
        </div>

        <div className="row">

          {/* ✅ Main Blog */}
          <div className="col-lg-8 col-md-8 col-sm-12 blog_detail_content">

            {pageImage && (
              <Image
                src={pageImage}
                alt="Blog Image"
                width={800}
                height={500}
                className="img-fluid mb-3"
              />
            )}

            <div
              dangerouslySetInnerHTML={{
                __html: safePageDescription,
              }}
            />

          </div>

          {/* ✅ Recent Blogs */}
          <div className="col-lg-4 col-md-4 col-sm-12 recent_blog">
            <h5>
              <b>Recent Blogs</b>
            </h5>

            {recentBlogs.map((blog) => (
              <Link
                key={blog.id}
                href={`/blog-detail/${blog.slug}`}
                className="features_blog"
                style={{ cursor: "pointer", display: "block" }}
              >

                {blog.image && (
                  <Image
                    src={`${apiUrl}/${blog.image}`}
                    alt="Blog Image"
                    width={350}
                    height={200}
                    className="img-fluid mb-2"
                  />
                )}

                <div
                  dangerouslySetInnerHTML={{
                    __html: extractFirstHeading(
                      blog.description
                    ),
                  }}
                />

              </Link>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}