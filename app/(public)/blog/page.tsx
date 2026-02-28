'use client';

import Image from "next/image";
import Link from "next/link";
import "./blog.scss";
interface Blog {
  id: number;
  image?: string;
  description: string;
  slug: string;
}

export default function Blogs() {

  const apiUrl = "https://your-api-url.com";

  const blogs: Blog[] = [
    {
      id: 1,
      image: "blog1.jpg",
      description: "<h2>Blog Heading One</h2><p>Content here...</p>",
      slug: "blog-heading-one"
    },
    {
      id: 2,
      image: "blog2.jpg",
      description: "<h2>Blog Heading Two</h2><p>Content here...</p>",
      slug: "blog-heading-two"
    }
  ];

  /* ✅ Extract First Heading */
  const extractFirstHeading = (html: string) => {
    const match = html.match(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/i);
    return match ? match[0] : "";
  };

  if (blogs.length === 0) return null;

  return (
    <div className="blogs header_top">
      <div className="container">

        <div className="header">
          <h4>Blogs</h4>
        </div>

        <div className="row">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="col-lg-4 col-md-4 col-sm-12 blog_content"
            >

              {/* ✅ Image */}
              {blog.image && (
                <Image
                  src={`${apiUrl}/${blog.image}`}
                  alt="Blog Image"
                  width={400}
                  height={250}
                  className="img-fluid mb-3"
                />
              )}

              {/* ✅ Show Only Heading */}
              <div
                dangerouslySetInnerHTML={{
                  __html: extractFirstHeading(blog.description),
                }}
              />

              {/* ✅ Navigation */}
              <Link
                href={`/blog-detail/${blog.slug}`}
                className="pink_bg mt px-4"
              >
                See More
              </Link>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}