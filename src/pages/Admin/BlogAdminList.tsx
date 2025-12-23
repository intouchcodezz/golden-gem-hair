import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileText } from "lucide-react";

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
    if (!confirm("Are you sure you want to delete this blog?")) return;

    const API_BASE = import.meta.env.VITE_API_BASE;

    const res = await fetch(`${API_BASE}/api/deleteblog.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        admin_secret: import.meta.env.VITE_ADMIN_KEY,
        id,
      }),
    });

    const data = await res.json();

    if (!data.success) {
      alert(data.message || "Failed to delete blog");
      return;
    }

    setBlogs((prev) => prev.filter((b) => b.id !== id));
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                <FileText className="w-8 h-8" />
                Blog Management
              </h1>
              <p className="text-blue-100 mt-1">{blogs.length} total posts</p>
            </div>
            <button
              onClick={() => navigate("/admin/blogs/add")}
              className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-lg flex items-center gap-2"
            >
              <FileText className="w-5 h-5" />
              Add New Blog
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-gray-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {blogs.map((b) => (
                  <tr key={b.id} className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-semibold text-gray-900">{b.title}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {new Date(b.created_at).toLocaleDateString()}
                      </p>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                          b.status === "published"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {b.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={() => navigate(`/admin/blogs/edit/${b.id}`)}
                          className="text-blue-600 hover:text-blue-800 font-medium hover:underline"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteBlog(b.id)}
                          className="text-red-600 hover:text-red-800 font-medium hover:underline"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {blogs.length === 0 && (
                  <tr>
                    <td colSpan={3} className="px-6 py-12 text-center">
                      <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500 text-lg">No blogs found</p>
                      <p className="text-gray-400 text-sm mt-1">
                        Create your first blog post to get started
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}