import React, { useState } from "react";
import { Eye, EyeOff, Shield } from "lucide-react";

/* ================= Props ================= */

export type AdminLoginProps = {
  onLogin: () => void;
};

/* ================= Component ================= */

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/admin_login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        setError("Invalid username or password");
        return;
      }

      sessionStorage.setItem("adminAuth", "true");
      onLogin();
    } catch {
      setError("Server error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow w-full max-w-md"
      >
        <div className="text-center mb-6">
          <Shield className="mx-auto text-blue-600" size={36} />
          <h1 className="text-2xl font-bold mt-2">Admin Login</h1>
        </div>

        {/* Username */}
        <input
          type="text"
          placeholder="Username"
          className="w-full border p-3 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        {/* Password */}
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full border p-3 rounded pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-3 top-3 text-gray-400"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-600 text-sm mb-3 text-center">{error}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
