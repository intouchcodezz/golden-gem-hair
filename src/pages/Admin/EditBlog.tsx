import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState<any>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE}/api/getblog.php?id=${id}`)
      .then((res) => res.json())
      .then(setForm);
  }, [id]);

  const update = async () => {
    await fetch(`${import.meta.env.VITE_API_BASE}/api/updateblog.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    navigate("/admin/blogs");
  };

  if (!form) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">Edit Blog</h1>

      {[
        ["Title", "title"],
        ["Slug", "slug"],
        ["Meta Title", "meta_title"],
        ["Meta Description", "meta_description"],
        ["Cover Image URL", "cover_image"],
      ].map(([label, key]) => (
        <div key={key} className="mb-4">
          <label className="block font-medium mb-1">{label}</label>
          <input
            className="w-full border p-3"
            value={form[key]}
            onChange={(e) =>
              setForm({ ...form, [key]: e.target.value })
            }
          />
        </div>
      ))}

      <div className="mb-4">
        <label className="block font-medium mb-1">Content (HTML)</label>
        <textarea
          rows={10}
          className="w-full border p-3"
          value={form.content}
          onChange={(e) =>
            setForm({ ...form, content: e.target.value })
          }
        />
      </div>

      <select
        className="border p-3 mb-6"
        value={form.status}
        onChange={(e) =>
          setForm({ ...form, status: e.target.value })
        }
      >
        <option value="draft">Draft</option>
        <option value="published">Published</option>
      </select>

      <div className="flex gap-4">
        <button
          onClick={update}
          className="bg-blue-600 text-white px-6 py-3 rounded"
        >
          Update Blog
        </button>
        <button
          onClick={() => navigate("/admin/blogs")}
          className="border px-6 py-3 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
