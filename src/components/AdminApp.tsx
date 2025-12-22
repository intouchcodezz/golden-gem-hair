import { Routes, Route, useNavigate } from "react-router-dom";
import AdminDashboard from "./adminDashboard";
import AddBlog from "../pages/Admin/AddBlog";
import BlogAdminList from "../pages/Admin/BlogAdminList";
import EditBlog from "../pages/Admin/EditBlog";

export default function AdminApp() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("admin_token");
    navigate("/admin/login");
  };

  return (
    <Routes>
      <Route
        path="dashboard"
        element={<AdminDashboard onLogout={logout} />}
      />
      <Route path="blogs" element={<BlogAdminList />} />
      <Route path="blogs/add" element={<AddBlog />} />
      <Route path="blogs/edit/:id" element={<EditBlog />} />
    </Routes>
  );
}
