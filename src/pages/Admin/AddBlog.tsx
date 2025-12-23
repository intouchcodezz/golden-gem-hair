import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const slugify = (v: string) =>
  v.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function AddBlog() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    return () => preview && URL.revokeObjectURL(preview);
  }, [preview]);

  const uploadImage = async (): Promise<string> => {
    if (!imageFile) return "";

    const form = new FormData();
    form.append("image", imageFile);
    form.append("admin_secret", import.meta.env.VITE_ADMIN_KEY);

    const res = await fetch(
      `${import.meta.env.VITE_API_BASE}/api/upload_blog_image.php`,
      { method: "POST", body: form }
    );

    const json = await res.json();
    if (!json.success) throw new Error(json.message);
    return json.url;
  };

  const submit = async () => {
    if (saving) return;
    setError("");

    if (!title || !content) {
      setError("Title and content are required");
      return;
    }

    setSaving(true);

    try {
      const imageUrl = await uploadImage();

      const res = await fetch(
        `${import.meta.env.VITE_API_BASE}/api/createblog.php`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            admin_secret: import.meta.env.VITE_ADMIN_KEY,
            title,
            slug: slug || slugify(title),
            excerpt,
            content,
            meta_title: metaTitle || title,
            meta_description: metaDescription || excerpt,
            cover_image: imageUrl,
            status: "published",
          }),
        }
      );

      const json = await res.json();
      if (!json.success) throw new Error(json.message);

      navigate("/admin/blogs");
    } catch (e: any) {
      setError(e.message || "Failed");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-6">Add Blog</h1>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <input
        className="w-full border p-3 mb-4 rounded"
        placeholder="Blog title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setSlug(slugify(e.target.value));
          setMetaTitle(e.target.value);
        }}
      />

      {/* IMAGE */}
      <label className="font-semibold block mb-1">Featured Image</label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) {
            setImageFile(f);
            setPreview(URL.createObjectURL(f));
          }
        }}
      />

      <p className="text-xs text-gray-500 mt-1 mb-3">
        Recommended: <b>1200 × 630 px</b>, landscape only, max 500 KB
      </p>

      {preview && (
        <img
          src={preview}
          className="w-full h-[220px] object-cover rounded-lg mb-4 border"
        />
      )}

      <textarea
        className="w-full border p-3 mb-4 rounded"
        placeholder="Short excerpt"
        rows={3}
        value={excerpt}
        onChange={(e) => {
          setExcerpt(e.target.value);
          setMetaDescription(e.target.value);
        }}
      />

      <textarea
        className="w-full border p-3 mb-6 rounded"
        placeholder="Blog content (HTML allowed)"
        rows={8}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        onClick={submit}
        disabled={saving}
        className="bg-blue-600 text-white px-6 py-3 rounded font-semibold disabled:opacity-50"
      >
        {saving ? "Publishing..." : "Publish Blog"}
      </button>
    </div>
  );
}
