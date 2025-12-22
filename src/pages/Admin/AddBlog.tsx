import { useState } from "react";
import { useNavigate } from "react-router-dom";

const slugify = (v: string) =>
  v
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function AddBlog() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<"draft" | "published">("draft");
  const [saving, setSaving] = useState(false);

  const submit = async () => {
    if (!title || !slug || !content) {
      alert("Title, slug and content are required");
      return;
    }

    setSaving(true);

    await fetch("/api/createBlog.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        slug,
        excerpt,
        content,
        cover_image: "",
        meta_title: title,
        meta_description: excerpt,
        status,
      }),
    });

    setSaving(false);
    navigate("/admin/dashboard");
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Add Blog</h1>

      <input
        className="w-full border p-3 mb-4"
        placeholder="Title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setSlug(slugify(e.target.value));
        }}
      />

      <input
        className="w-full border p-3 mb-4"
        placeholder="Slug"
        value={slug}
        onChange={(e) => setSlug(slugify(e.target.value))}
      />

      <textarea
        className="w-full border p-3 mb-4"
        placeholder="Excerpt"
        rows={3}
        value={excerpt}
        onChange={(e) => setExcerpt(e.target.value)}
      />

      <textarea
        className="w-full border p-3 mb-4"
        placeholder="Content (HTML allowed)"
        rows={10}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <select
        className="border p-3 mb-4"
        value={status}
        onChange={(e) => setStatus(e.target.value as any)}
      >
        <option value="draft">Draft</option>
        <option value="published">Published</option>
      </select>

      <button
        onClick={submit}
        disabled={saving}
        className="bg-blue-600 text-white px-6 py-3 rounded disabled:opacity-50"
      >
        {saving ? "Saving..." : "Save Blog"}
      </button>
    </div>
  );
}
