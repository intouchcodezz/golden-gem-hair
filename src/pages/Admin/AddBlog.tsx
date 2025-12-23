import { useState } from "react";
import { useNavigate } from "react-router-dom";

const slugify = (v: string) =>
  v
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function AddBlog() {
  const navigate = useNavigate();

  // Core fields
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");

  // SEO fields
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");

  // Other
  const [status, setStatus] = useState<"draft" | "published">("published");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const submit = async () => {
    setError("");

    if (!title || !content) {
      setError("Title and content are required");
      return;
    }

    setSaving(true);

    const payload = {
      title,
      slug,
      excerpt,
      content,
      meta_title: metaTitle || title,
      meta_description: metaDescription || excerpt,
      cover_image: "",
      status,
    };

    try {
      const API_BASE = import.meta.env.VITE_API_BASE || "";
      const ADMIN_KEY = import.meta.env.VITE_ADMIN_KEY;

      const res = await fetch(`${API_BASE}/api/createblog.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Admin-Key": ADMIN_KEY, // 🔐 REQUIRED
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to add blog");
      }

      navigate("/admin/blogs");
    } catch (err: any) {
      setError(err.message || "Unable to add blog");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-8">
        <h1 className="text-2xl font-bold mb-6">Add New Blog</h1>

        {error && (
          <div className="mb-4 rounded-lg bg-red-50 border border-red-200 p-3 text-red-700 text-sm">
            {error}
          </div>
        )}

        {/* Title */}
        <label className="block text-sm font-semibold mb-1">Title</label>
        <input
          className="w-full border rounded-lg px-4 py-3 mb-4"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setSlug(slugify(e.target.value));
            setMetaTitle(e.target.value);
          }}
        />

        {/* Slug */}
        <label className="block text-sm font-semibold mb-1">Slug</label>
        <input
          className="w-full border rounded-lg px-4 py-3 mb-4"
          value={slug}
          onChange={(e) => setSlug(slugify(e.target.value))}
        />

        {/* Excerpt */}
        <label className="block text-sm font-semibold mb-1">Excerpt</label>
        <textarea
          className="w-full border rounded-lg px-4 py-3 mb-4"
          rows={3}
          value={excerpt}
          onChange={(e) => {
            setExcerpt(e.target.value);
            setMetaDescription(e.target.value);
          }}
        />

        {/* Content */}
        <label className="block text-sm font-semibold mb-1">Content</label>
        <textarea
          className="w-full border rounded-lg px-4 py-3 mb-6"
          rows={10}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        {/* SEO */}
        <div className="border-t pt-6 mt-6">
          <h2 className="text-lg font-semibold mb-4">SEO Settings</h2>

          <label className="block text-sm font-semibold mb-1">Meta Title</label>
          <input
            className="w-full border rounded-lg px-4 py-3 mb-4"
            value={metaTitle}
            onChange={(e) => setMetaTitle(e.target.value)}
          />

          <label className="block text-sm font-semibold mb-1">
            Meta Description
          </label>
          <textarea
            className="w-full border rounded-lg px-4 py-3 mb-4"
            rows={3}
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
          />
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-4">
          <button
            onClick={() => navigate("/admin/blogs")}
            className="px-6 py-3 rounded-lg border"
          >
            Cancel
          </button>

          <button
            onClick={submit}
            disabled={saving}
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold disabled:opacity-50"
          >
            {saving ? "Saving..." : "Publish Blog"}
          </button>
        </div>
      </div>
    </div>
  );
}
