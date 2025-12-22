import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Blog = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  cover_image: string;
};

export default function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/getBlogs.php")
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          setBlogs(json.data);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <>
      <Header />

      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Blogs</h1>

        {loading && <p>Loading blogs...</p>}

        {!loading && blogs.length === 0 && (
          <p>No blogs available.</p>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              to={`/blog/${blog.slug}`}
              className="block border rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              {blog.cover_image && (
                <img
                  src={blog.cover_image}
                  alt={blog.title}
                  className="h-48 w-full object-cover"
                />
              )}

              <div className="p-4">
                <h2 className="text-xl font-semibold">{blog.title}</h2>
                <p className="text-gray-600 mt-2">{blog.excerpt}</p>

                <span className="text-blue-600 font-medium mt-3 inline-block">
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
