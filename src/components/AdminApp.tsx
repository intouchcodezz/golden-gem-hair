import { Outlet, useNavigate } from "react-router-dom";

export default function AdminApp() {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("adminAuth");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
        <h1 className="text-xl font-bold">Admin Panel</h1>
        <button
          onClick={logout}
          className="text-sm font-semibold text-red-600"
        >
          Logout
        </button>
      </header>

      <main className="p-6">
        {/* 🔴 REQUIRED FOR NESTED ROUTES */}
        <Outlet />
      </main>
    </div>
  );
}
