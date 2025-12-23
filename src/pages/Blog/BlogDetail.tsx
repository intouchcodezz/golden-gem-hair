import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

type Blog = {
  title: string;
  content: string;
  cover_image: string;
  meta_title: string;
  meta_description: string;
  slug: string;
  created_at?: string;
  author?: string;
  read_time?: number;
};

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    fetch(`${import.meta.env.VITE_API_BASE}/api/getblog.php?slug=${slug}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        setBlog(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog?.title,
          url: window.location.href,
        });
      } catch {}
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#F9F3E6] to-white">
        <Header />
        <div className="flex items-center justify-center py-24">
          <div className="w-14 h-14 border-4 border-[#C9A24D] border-t-transparent rounded-full animate-spin" />
        </div>
        <Footer />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#F9F3E6] to-white">
        <Header />
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Blog Post Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              The article you're looking for doesn't exist or has been removed.
            </p>

            <a
              href="/blog"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#C9A24D] to-[#B18A3D] text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Blog
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <SEO
        title={blog.meta_title || blog.title}
        description={blog.meta_description}
        canonical={`https://thegoldengemhairclinic.com/blog/${blog.slug}`}
      />

      <div className="min-h-screen bg-gradient-to-b from-[#F9F3E6] to-white">
        <Header />

        <article className="max-w-5xl mx-auto px-6 py-10">
          {/* Back */}
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-[#8A6A2F] hover:text-[#B18A3D] mb-8 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </a>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {blog.cover_image && (
              <div className="relative h-[480px]">
                <img
                  src={`${import.meta.env.VITE_API_BASE}${blog.cover_image}`}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                <div className="absolute bottom-0 p-8 md:p-12 text-white">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    {blog.title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-5 text-sm text-white/90">
                    {blog.author && (
                      <div className="flex items-center gap-2">
                        <div className="w-9 h-9 bg-[#C9A24D]/80 rounded-full flex items-center justify-center font-semibold text-black">
                          {blog.author.charAt(0)}
                        </div>
                        <span>{blog.author}</span>
                      </div>
                    )}

                    {blog.created_at && (
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#F5D98B]" />
                        <span>
                          {new Date(blog.created_at).toLocaleDateString(
                            "en-US",
                            { year: "numeric", month: "long", day: "numeric" }
                          )}
                        </span>
                      </div>
                    )}

                    {blog.read_time && (
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#F5D98B]" />
                        <span>{blog.read_time} min read</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            <div className="p-8 md:p-12">
              <div className="flex justify-end mb-8">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 px-4 py-2 bg-[#F9F3E6] hover:bg-[#F3E8C8] rounded-xl font-medium text-[#8A6A2F]"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>

              <div
                className="prose prose-lg max-w-none
                  prose-headings:text-[#8A6A2F]
                  prose-a:text-[#C9A24D]
                  prose-strong:text-gray-900
                  prose-blockquote:border-l-[#C9A24D]
                  prose-blockquote:bg-[#F9F3E6]"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
