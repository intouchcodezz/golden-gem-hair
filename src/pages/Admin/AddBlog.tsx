import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authFetch } from "../../utils/authFetch";

export default function AddBlog() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const save = async () => {
    const res = await authFetch("/api/createblog.php", {
      method: "POST",
      body: JSON.stringify({
        title,
        slug: title.toLowerCase().replace(/\s+/g, "-"),
        excerpt: "",
        content,
        meta_title: title,
        meta_description: "",
        cover_image: "",
        status: "published",
      }),
    });

    if (!res.ok) {
      alert("Auth failed");
      return;
    }

    navigate("/admin/blogs");
  };

  return (
    <div className="p-6 max-w-2xl">
      <h1 className="text-xl font-bold mb-4">Add Blog</h1>

      <input
        className="border p-2 w-full mb-3"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="border p-2 w-full mb-4 h-40"
        placeholder="Content"
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        onClick={save}
        className="bg-blue-600 text-white px-4 py-2"
      >
        Save
      </button>
    </div>
  );
}
