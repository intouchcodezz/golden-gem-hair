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
    fetch(`${import.meta.env.VITE_API_BASE}/api/getblogs.php`)
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            to={`/blog/${blog.slug}`}
            className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            {blog.cover_image && (
              <img
                src={`${import.meta.env.VITE_API_BASE}${blog.cover_image}`}
                className="w-full h-[220px] object-cover"
              />
            )}

            <div className="p-4">
              <h2 className="text-lg font-semibold">{blog.title}</h2>
              <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                {blog.excerpt}
              </p>

              <span className="text-blue-600 font-medium mt-4 inline-block">
                Read more →
              </span>
            </div>
          </Link>
        ))}
      </div>


      <Footer />
    </>
  );
}
