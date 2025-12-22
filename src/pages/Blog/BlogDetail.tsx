import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Blog = {
  title: string;
  content: string;
  cover_image: string;
  meta_title: string;
  meta_description: string;
};

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    fetch(`/api/getBlog.php?slug=${slug}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        setBlog(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="p-10 text-center">Loading...</div>
        <Footer />
      </>
    );
  }

  if (!blog) {
    return (
      <>
        <Header />
        <div className="p-10 text-center">Blog not found</div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

        {blog.cover_image && (
          <img
            src={blog.cover_image}
            alt={blog.title}
            className="w-full rounded-xl mb-6"
          />
        )}

        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>

      <Footer />
    </>
  );
}
