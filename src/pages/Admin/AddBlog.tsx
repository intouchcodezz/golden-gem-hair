// AddBlog.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, FileText, Tag } from "lucide-react";

const slugify = (v: string) =>
  v.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function AddBlog() {  // ← Make sure it says "export default"
  const navigate = useNavigate();
  // ... rest of your code

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
    form.append("auth_key", "GG_ADMIN_9f3c8e2b7a1d");
  
    const res = await fetch(
      "https://thegoldengemhairclinic.com/api/upload_blog_image.php",
      {
        method: "POST",
        body: form,
      }
    );
  
    const json = await res.json();
    if (!json.success) throw new Error(json.message);
    return json.url;
  };

  const submit = async () => {
    if (saving) return;
    setError("");
  
    if (!title.trim() || !content.trim()) {
      setError("Title and content are required");
      return;
    }
  
    setSaving(true);
  
    try {
      // 1️⃣ Upload image first
      const imageUrl = await uploadImage();
  
      // 2️⃣ Correct API base
      const API_BASE = "https://thegoldengemhairclinic.com";
  
      // 3️⃣ Create blog
      const res = await fetch(`${API_BASE}/api/createblog.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          admin_secret: "GG_ADMIN_9f3c8e2b7a1d",
          title,
          slug: slug || slugify(title),
          excerpt,
          content,
          meta_title: metaTitle || title,
          meta_description: metaDescription || excerpt,
          cover_image: imageUrl,
          status: "published",
        }),
      });
  
      const json = await res.json();
  
      if (!json.success) {
        throw new Error(json.message || "Failed to create blog");
      }
  
      navigate("/admin/blogs");
    } catch (e: any) {
      setError(e.message || "Something went wrong");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6">
            <h1 className="text-3xl font-bold text-white flex items-center gap-3">
              <FileText className="w-8 h-8" />
              Create New Blog Post
            </h1>
            <p className="text-blue-100 mt-2">Share your thoughts with the world</p>
          </div>

          <div className="p-8">
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-r-lg">
                <p className="font-medium">{error}</p>
              </div>
            )}

            {/* Title Input */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Blog Title *
              </label>
              <input
                className="w-full border-2 border-gray-200 p-4 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-lg"
                placeholder="Enter your captivating title..."
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  setSlug(slugify(e.target.value));
                  setMetaTitle(e.target.value);
                }}
              />
              {slug && (
                <p className="text-sm text-gray-500 mt-2 flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  URL: <span className="font-mono text-blue-600">{slug}</span>
                </p>
              )}
            </div>

            {/* Featured Image */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Featured Image
              </label>
              
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  id="image-upload"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) {
                      setImageFile(f);
                      setPreview(URL.createObjectURL(f));
                    }
                  }}
                />
                
                {!preview ? (
                  <label
                    htmlFor="image-upload"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer"
                  >
                    <Upload className="w-12 h-12 text-gray-400 mb-3" />
                    <p className="text-gray-600 font-medium mb-1">
                      Click to upload image
                    </p>
                    <p className="text-sm text-gray-500">
                      Recommended: 1200 × 630 px • Max 500 KB
                    </p>
                  </label>
                ) : (
                  <div className="relative group">
                    <img
                      src={preview}
                      className="w-full h-80 object-cover rounded-xl border-2 border-gray-200"
                      alt="Preview"
                    />
                    <label
                      htmlFor="image-upload"
                      className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer rounded-xl"
                    >
                      <div className="text-white text-center">
                        <Upload className="w-8 h-8 mx-auto mb-2" />
                        <p className="font-medium">Change Image</p>
                      </div>
                    </label>
                  </div>
                )}
              </div>
            </div>

            {/* Excerpt */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Short Excerpt
              </label>
              <textarea
                className="w-full border-2 border-gray-200 p-4 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none resize-none"
                placeholder="A brief summary of your blog post..."
                rows={3}
                value={excerpt}
                onChange={(e) => {
                  setExcerpt(e.target.value);
                  setMetaDescription(e.target.value);
                }}
              />
            </div>

            {/* Content */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Content *
              </label>
              <textarea
                className="w-full border-2 border-gray-200 p-4 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none resize-none font-mono text-sm"
                placeholder="Write your blog content here (HTML allowed)..."
                rows={12}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <div className="flex gap-4">
              <button
                onClick={submit}
                disabled={saving}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {saving ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
                    Publishing...
                  </span>
                ) : (
                  "Publish Blog Post"
                )}
              </button>
              
              <button
                onClick={() => navigate("/admin/blogs")}
                disabled={saving}
                className="px-8 py-4 rounded-xl font-semibold text-gray-700 hover:bg-gray-100 transition-all border-2 border-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}