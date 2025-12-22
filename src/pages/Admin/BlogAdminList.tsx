import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Blog = {
  id: number;
  title: string;
  slug: string;
  status: string;
  created_at: string;
};

export default function BlogAdminList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const navigate = useNavigate();

  const loadBlogs = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_BASE}/api/getblogs.php`);
    const json = await res.json();
    if (json.success) setBlogs(json.data);
  };

  const deleteBlog = async (id: number) => {
    if (!confirm("Delete this blog?")) return;

    await fetch(`${import.meta.env.VITE_API_BASE}/api/deleteblog.php?id=${id}`);
    loadBlogs();
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Blogs</h1>
        <button
          onClick={() => navigate("/admin/blogs/add")}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Blog
        </button>
      </div>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Title</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((b) => (
            <tr key={b.id} className="border-t">
              <td className="p-3">{b.title}</td>
              <td className="p-3 text-center">
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    b.status === "published"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {b.status}
                </span>
              </td>
              <td className="p-3 text-center space-x-3">
                <button
                  onClick={() => navigate(`/admin/blogs/edit/${b.id}`)}
                  className="text-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteBlog(b.id)}
                  className="text-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {blogs.length === 0 && (
            <tr>
              <td colSpan={3} className="p-6 text-center">
                No blogs found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
