import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLogin from "./adminLogin";
import AdminDashboard from "./adminDashboard";

const AdminApp = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("adminAuth") === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
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
