import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const slugify = (v: string) =>
  v
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function AddBlog() {
  const navigate = useNavigate();

  /* ================= STATE ================= */
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");

  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  /* ================= CLEANUP ================= */
  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  /* ================= IMAGE UPLOAD ================= */
  const uploadImage = async (): Promise<string> => {
    if (!imageFile) return "";

    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("admin_secret", import.meta.env.VITE_ADMIN_KEY);

    const res = await fetch(
      `${import.meta.env.VITE_API_BASE}/api/upload_blog_image.php`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    if (!data.success) {
      throw new Error(data.message || "Image upload failed");
    }

    return data.url;
  };

  /* ================= SUBMIT ================= */
  const submit = async () => {
    if (saving) return;

    setError("");

    if (!title.trim() || !content.trim()) {
      setError("Title and content are required");
      return;
    }

    setSaving(true);

    try {
      const imageUrl = await uploadImage();

      const payload = {
        admin_secret: import.meta.env.VITE_ADMIN_KEY,
        title,
        slug: slug || slugify(title),
        excerpt,
        content,
        meta_title: metaTitle || title,
        meta_description: metaDescription || excerpt,
        cover_image: imageUrl,
        status: "published",
      };

      const res = await fetch(
        `${import.meta.env.VITE_API_BASE}/api/createblog.php`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();
      if (!data.success) {
        throw new Error("Failed to save blog");
      }

      navigate("/admin/blogs");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setSaving(false);
    }
  };

  /* ================= UI ================= */
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-6">Add Blog</h1>

      {error && (
        <div className="mb-4 text-red-600 text-sm font-medium">
          {error}
        </div>
      )}

      {/* Title */}
      <input
        className="w-full border p-3 mb-4 rounded"
        placeholder="Title"
        value={title}
        onChange={(e) => {
          const v = e.target.value;
          setTitle(v);
          setSlug(slugify(v));
          setMetaTitle(v);
        }}
      />

      {/* Featured Image */}
      <label className="block font-semibold mb-1">Featured Image</label>
      <input
        type="file"
        accept="image/*"
        className="mb-3"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
          }
        }}
      />

      {imagePreview && (
        <img
          src={imagePreview}
          alt="Preview"
          className="mb-4 rounded-lg max-h-60 object-cover"
        />
      )}

      {/* Excerpt */}
      <textarea
        className="w-full border p-3 mb-4 rounded"
        placeholder="Excerpt"
        rows={3}
        value={excerpt}
        onChange={(e) => {
          setExcerpt(e.target.value);
          setMetaDescription(e.target.value);
        }}
      />

      {/* Content */}
      <textarea
        className="w-full border p-3 mb-6 rounded"
        placeholder="Content (HTML allowed)"
        rows={8}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      {/* Submit */}
      <button
        onClick={submit}
        disabled={saving}
        className="bg-blue-600 text-white px-6 py-3 rounded font-semibold disabled:opacity-50"
      >
        {saving ? "Saving..." : "Publish Blog"}
      </button>
    </div>
  );
}
