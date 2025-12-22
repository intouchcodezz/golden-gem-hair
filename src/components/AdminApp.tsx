// src/admin/AdminApp.tsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLogin from "../components/adminLogin";
import AdminDashboard from "../components/adminDashboard";

const AdminApp = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("adminAuth") === "true") {
      setIsAuthenticated(true);
    } else {
      navigate("/admin/login", { replace: true });
    }
  }, [navigate]);

  const handleLogin = () => {
    sessionStorage.setItem("adminAuth", "true");
    setIsAuthenticated(true);
    navigate("/admin/dashboard", { replace: true });
  };

  const handleLogout = () => {
    sessionStorage.removeItem("adminAuth");
    setIsAuthenticated(false);
    navigate("/admin/login", { replace: true });
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return <AdminDashboard onLogout={handleLogout} />;
};

export default AdminApp;
