import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true);

    const res = await fetch("/api/admin_login.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    setLoading(false);

    if (!data.success) {
      alert("Invalid login");
      return;
    }

    localStorage.setItem("admin_token", data.token);
    navigate("/admin/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-96 border p-6 rounded">
        <h1 className="text-xl font-bold mb-4">Admin Login</h1>

        <input
          className="border p-2 w-full mb-3"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="border p-2 w-full mb-4"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={submit}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 w-full"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
}
