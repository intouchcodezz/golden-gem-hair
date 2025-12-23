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

      <main className="min-h-screen bg-gradient-to-b from-[#F9F3E6] to-white">
        <div className="max-w-7xl mx-auto px-6 py-14">
          {/* Page Title */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Our Journal
            </h1>
            <p className="text-[#8A6A2F]">
              Expert insights, updates, and guidance from our specialists
            </p>
          </div>

          {/* Loading Skeleton */}
          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse rounded-2xl bg-white shadow-sm"
                >
                  <div className="h-[220px] bg-[#EFE6CF] rounded-t-2xl" />
                  <div className="p-5 space-y-3">
                    <div className="h-4 bg-[#E6D7B0] rounded w-3/4" />
                    <div className="h-3 bg-[#EFE6CF] rounded w-full" />
                    <div className="h-3 bg-[#EFE6CF] rounded w-5/6" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && blogs.length === 0 && (
            <div className="text-center py-24">
              <div className="text-6xl mb-4">📝</div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                No articles yet
              </h2>
              <p className="text-[#8A6A2F]">
                Our experts are preparing valuable content. Stay tuned.
              </p>
            </div>
          )}

          {/* Blog Grid */}
          {!loading && blogs.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <Link
                  key={blog.slug}
                  to={`/blog/${blog.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  {/* Image */}
                  {blog.cover_image && (
                    <div className="relative h-[220px] overflow-hidden">
                      <img
                        src={`${import.meta.env.VITE_API_BASE}${blog.cover_image}`}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {blog.title}
                    </h2>

                    <p className="text-gray-600 text-sm line-clamp-3 mb-5">
                      {blog.excerpt}
                    </p>

                    <span className="inline-flex items-center text-[#C9A24D] font-medium group-hover:gap-2 transition-all">
                      Read article
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
