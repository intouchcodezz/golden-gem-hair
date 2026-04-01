import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    content: "",
    meta_title: "",
    meta_description: "",
    status: "draft",
  });

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE}/api/getblogbyid.php?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setForm(data.blog);
        }
      });
  }, [id]);

  const handleSubmit = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_API_BASE}/api/updateblog.php`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          id,
          admin_secret: import.meta.env.VITE_ADMIN_KEY,
        }),
      }
    );

    const data = await res.json();

    if (data.success) {
      alert("Blog updated successfully");
      navigate("/admin/blogs");
    } else {
      alert("Update failed");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Blog</h1>

      <input
        className="w-full border p-3 mb-4"
        placeholder="Title"
        value={form.title}
        onChange={(e) =>
          setForm({ ...form, title: e.target.value })
        }
      />

      <textarea
        className="w-full border p-3 mb-4 h-40"
        placeholder="Content"
        value={form.content}
        onChange={(e) =>
          setForm({ ...form, content: e.target.value })
        }
      />

      <input
        className="w-full border p-3 mb-4"
        placeholder="Meta Title"
        value={form.meta_title}
        onChange={(e) =>
          setForm({ ...form, meta_title: e.target.value })
        }
      />

      <textarea
        className="w-full border p-3 mb-4"
        placeholder="Meta Description"
        value={form.meta_description}
        onChange={(e) =>
          setForm({ ...form, meta_description: e.target.value })
        }
      />

      <select
        className="w-full border p-3 mb-4"
        value={form.status}
        onChange={(e) =>
          setForm({ ...form, status: e.target.value })
        }
      >
        <option value="draft">Draft</option>
        <option value="published">Published</option>
      </select>

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Update Blog
      </button>
    </div>
  );
}