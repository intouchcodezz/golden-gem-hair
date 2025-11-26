import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Lock,
  LogOut,
  Shield,
  Calendar,
  MessageSquare,
  Phone,
  User as UserIcon,
  Clock,
  Eye,
  EyeOff,
  Briefcase,
  Mail,
} from "lucide-react";

// -------------------------------
// ADMIN CREDENTIALS
// -------------------------------
const ADMIN_CREDENTIALS = { username: "admin", password: "admin123" };

// -------------------------------
// LOGIN COMPONENT
// -------------------------------
const AdminLogin = ({ onLogin }: { onLogin: () => void }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      if (
        username === ADMIN_CREDENTIALS.username &&
        password === ADMIN_CREDENTIALS.password
      ) {
        onLogin();
      } else {
        setError("Invalid username or password");
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-10 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-1">Admin Portal</h1>
            <p className="text-blue-100">Clinic Management System</p>
          </div>

          <div className="px-8 py-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username */}
              <div>
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <UserIcon className="w-4 h-4 text-blue-600" /> Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full mt-1 px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-600" /> Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3.5 text-white font-semibold rounded-xl hover:scale-105 transition-all disabled:opacity-50"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// -------------------------------
// DASHBOARD COMPONENT
// -------------------------------
const Dashboard = ({ onLogout }: { onLogout: () => void }) => {
  const [activeTab, setActiveTab] = useState("appointments");

  const [appointments, setAppointments] = useState<any[]>([]);
  const [chatLogs, setChatLogs] = useState<any[]>([]);
  const [jobApplications, setJobApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // -------------------------------
  // Fetch: Appointments
  // -------------------------------
  const fetchAppointments = async () => {
    try {
      const res = await fetch(
        "https://thegoldengemhairclinic.com/api/getAppointments.php"
      );
      const json = await res.json();
      if (json.success) {
        const sorted = json.data.sort(
          (a: any, b: any) =>
            new Date(b.created_at).getTime() -
            new Date(a.created_at).getTime()
        );
        setAppointments(sorted);
      }
    } catch (e) {
      console.error(e);
    }
  };

  // -------------------------------
  // Fetch: Chatlogs
  // -------------------------------
  const fetchChatLogs = async () => {
    try {
      const res = await fetch(
        "https://thegoldengemhairclinic.com/api/getChatLogs.php"
      );
      const json = await res.json();
      if (json.success) {
        const sorted = json.data.sort(
          (a: any, b: any) =>
            new Date(b.created_at).getTime() -
            new Date(a.created_at).getTime()
        );
        setChatLogs(sorted);
      }
    } catch (e) {
      console.error(e);
    }
  };

  // -------------------------------
  // Fetch: Job Applications
  // -------------------------------
  const fetchJobApplications = async () => {
    try {
      const res = await fetch(
        "https://thegoldengemhairclinic.com/api/getCareerApplications.php"
      );
      const json = await res.json();
      if (json.success) {
        const sorted = json.data.sort(
          (a: any, b: any) =>
            new Date(b.submitted_at).getTime() -
            new Date(a.submitted_at).getTime()
        );
        setJobApplications(sorted);
      }
    } catch (e) {
      console.error(e);
    }
  };

  // -------------------------------
  // Load All Data Once
  // -------------------------------
  useEffect(() => {
    const load = async () => {
      setLoading(true);
      await Promise.all([
        fetchAppointments(),
        fetchChatLogs(),
        fetchJobApplications(),
      ]);
      setLoading(false);
    };
    load();
  }, []);

  if (loading) return <div className="p-10 text-center">Loading...</div>;

  // -------------------------------
  // UI STARTS HERE
  // -------------------------------
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Shield className="w-10 h-10 text-blue-600" />
            <div>
              <h1 className="text-xl font-bold">Admin Dashboard</h1>
              <p className="text-sm text-gray-500">Clinic Management System</p>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="bg-red-50 px-5 py-2 rounded-lg text-red-600 font-medium hover:bg-red-100 flex items-center gap-2"
          >
            <LogOut /> Logout
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto mt-6 bg-white rounded-2xl border shadow">
        <nav className="border-b flex">
          {[
            {
              id: "appointments",
              label: "Appointments",
              icon: Calendar,
              count: appointments.length,
            },
            {
              id: "chatbot",
              label: "Chatbot Q&A",
              icon: MessageSquare,
              count: chatLogs.length,
            },
            {
              id: "jobs",
              label: "Apply Job",
              icon: Briefcase,
              count: jobApplications.length,
            },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-6 py-4 flex items-center justify-center gap-2 font-semibold relative ${
                activeTab === tab.id ? "text-blue-600 bg-white" : "text-gray-600"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
              <span
                className={`px-3 py-1 text-xs font-bold rounded-full ${
                  activeTab === tab.id
                    ? "bg-blue-100 text-blue-600"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {tab.count}
              </span>

              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600" />
              )}
            </button>
          ))}
        </nav>

        {/* -----------------------------
            TAB 1 — APPOINTMENTS
        ------------------------------ */}
        {activeTab === "appointments" && (
          <div className="p-6 overflow-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="p-3 text-left">Patient</th>
                  <th className="p-3 text-left">Contact</th>
                  <th className="p-3 text-left">Appointment</th>
                  <th className="p-3 text-left">Treatment</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((apt) => (
                  <tr
                    key={apt.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-3">{apt.name}</td>

                    <td className="p-3">{apt.phone}</td>

                    <td className="p-3">
                      <div className="font-medium">
                        {new Date(apt.appointment_date).toLocaleDateString(
                          "en-IN",
                          {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          }
                        )}
                      </div>

                      <div className="text-xs text-gray-500">
                        Booked on:{" "}
                        {new Date(apt.created_at).toLocaleString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                    </td>

                    <td className="p-3">{apt.treatment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* -----------------------------
            TAB 2 — CHAT LOGS (PREMIUM UI)
        ------------------------------ */}
        {activeTab === "chatbot" && (
          <div className="p-6 space-y-4">
            {chatLogs.map((log) => (
              <div
                key={log.id}
                className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {log.name.charAt(0).toUpperCase()}
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-bold">{log.name}</h3>
                      <span className="text-xs text-gray-500">
                        {new Date(log.created_at).toLocaleString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>

                    <div className="text-sm text-gray-600 flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      {log.mobile}
                    </div>

                    <div className="mt-3">
                      <p className="text-xs text-gray-500 uppercase mb-1">
                        Query
                      </p>
                      <div className="bg-gray-50 p-3 rounded-lg border">
                        {log.query}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* -----------------------------
            TAB 3 — JOB APPLICATIONS
        ------------------------------ */}
        {activeTab === "jobs" && (
          <div className="p-6 overflow-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Phone</th>
                  <th className="p-3 text-left">Experience</th>
                  <th className="p-3 text-left">Job Title</th>
                  <th className="p-3 text-left">Message</th>
                  <th className="p-3 text-left">Submitted</th>
                </tr>
              </thead>
              <tbody>
                {jobApplications.map((job) => (
                  <tr
                    key={job.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="p-3">{job.name}</td>
                    <td className="p-3">{job.email}</td>
                    <td className="p-3">{job.phone}</td>
                    <td className="p-3">{job.experience}</td>
                    <td className="p-3 text-blue-600">{job.job_title}</td>
                    <td className="p-3">{job.message}</td>
                    <td className="p-3 text-sm text-gray-500">
                      {new Date(job.submitted_at).toLocaleString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

// -------------------------------
// MAIN APP WRAPPER
// -------------------------------
const AdminApp = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    sessionStorage.getItem("adminAuth") === "true"
      ? setIsAuthenticated(true)
      : navigate("/admin/login", { replace: true });
  }, []);

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

  if (!isAuthenticated) return <AdminLogin onLogin={handleLogin} />;
  return <Dashboard onLogout={handleLogout} />;
};

export default AdminApp;
