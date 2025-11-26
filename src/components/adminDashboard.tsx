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

/**
 * Standalone AdminApp.tsx
 *
 * - appointment_date is used strictly as Appointment Date (date-only from DB).
 * - A new normalized field `timestamp` is added for every record (created_at / submitted_at fallback).
 * - Friendly date formatting and safe parsing avoids "Invalid Date".
 * - Chat logs UI updated to prominently show timestamp.
 */

// Admin credentials (example)
const ADMIN_CREDENTIALS = { username: "admin", password: "admin123" };

// Small util: safely parse a date-only or datetime string.
// If the string is date-only like "2025-11-09", we append "T00:00:00" to make it deterministic.
function safeParseDate(input?: string | null) {
  if (!input) return null;
  // Try direct parse
  let d = new Date(input);
  if (!isNaN(d.getTime())) return d;
  // Try date-only (YYYY-MM-DD)
  try {
    d = new Date(input + "T00:00:00");
    if (!isNaN(d.getTime())) return d;
  } catch (e) {}
  return null;
}

function formatDateOnly(d: Date | null) {
  if (!d) return "N/A";
  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
function formatDateTime(d: Date | null) {
  if (!d) return "N/A";
  return d.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

// ---------- Login Component ----------
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
    }, 600);
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
                    onClick={() => setShowPassword((s) => !s)}
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

// ---------- Dashboard ----------
const Dashboard = ({ onLogout }: { onLogout: () => void }) => {
  const [activeTab, setActiveTab] = useState<"appointments" | "chatbot" | "jobs">(
    "appointments"
  );

  const [appointments, setAppointments] = useState<any[]>([]);
  const [chatLogs, setChatLogs] = useState<any[]>([]);
  const [jobApplications, setJobApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Helper to normalize records, attach `timestamp` field
  // Appointment: uses appointment_date as appointment and uses created_at as timestamp
  const normalizeAppointments = (rows: any[]) =>
    rows.map((r) => {
      const appointmentDate = safeParseDate(r.appointment_date);
      // define timestamp from created_at fallback
      const timestamp =
        r.created_at || r.submitted_at || r.timestamp || r.createdAt || null;
      const parsedTimestamp = safeParseDate(timestamp);
      return { ...r, appointmentDate, timestamp: parsedTimestamp };
    });

  // Chatlogs: created_at -> timestamp
  const normalizeChatLogs = (rows: any[]) =>
    rows.map((r) => {
      const ts = r.created_at || r.timestamp || r.createdAt || null;
      return { ...r, timestamp: safeParseDate(ts) };
    });

  const normalizeJobs = (rows: any[]) =>
    rows.map((r) => {
      const ts =
        r.submitted_at || r.created_at || r.timestamp || r.createdAt || null;
      return { ...r, timestamp: safeParseDate(ts) };
    });

  // Fetch functions - fallback-safe and sort by timestamp (newest first)
  const fetchAppointments = async () => {
    try {
      const res = await fetch(
        "https://thegoldengemhairclinic.com/api/getAppointments.php"
      );
      const json = await res.json();
      if (json.success && Array.isArray(json.data)) {
        const normalized = normalizeAppointments(json.data);
        // sort by timestamp (booked time) newest first; if timestamp missing, keep appointmentDate fallback
        normalized.sort((a, b) => {
          const ta = a.timestamp ? a.timestamp.getTime() : a.appointmentDate ? a.appointmentDate.getTime() : 0;
          const tb = b.timestamp ? b.timestamp.getTime() : b.appointmentDate ? b.appointmentDate.getTime() : 0;
          return tb - ta;
        });
        setAppointments(normalized);
      } else {
        setAppointments([]);
      }
    } catch (e) {
      console.error("fetchAppointments:", e);
      setAppointments([]);
    }
  };

  const fetchChatLogs = async () => {
    try {
      const res = await fetch(
        "https://thegoldengemhairclinic.com/api/getChatLogs.php"
      );
      const json = await res.json();
      if (json.success && Array.isArray(json.data)) {
        const normalized = normalizeChatLogs(json.data);
        normalized.sort((a, b) => {
          const ta = a.timestamp ? a.timestamp.getTime() : 0;
          const tb = b.timestamp ? b.timestamp.getTime() : 0;
          return tb - ta;
        });
        setChatLogs(normalized);
      } else {
        setChatLogs([]);
      }
    } catch (e) {
      console.error("fetchChatLogs:", e);
      setChatLogs([]);
    }
  };

  const fetchJobApplications = async () => {
    try {
      const res = await fetch(
        "https://thegoldengemhairclinic.com/api/getCareerApplications.php"
      );
      const json = await res.json();
      if (json.success && Array.isArray(json.data)) {
        const normalized = normalizeJobs(json.data);
        normalized.sort((a, b) => {
          const ta = a.timestamp ? a.timestamp.getTime() : 0;
          const tb = b.timestamp ? b.timestamp.getTime() : 0;
          return tb - ta;
        });
        setJobApplications(normalized);
      } else {
        setJobApplications([]);
      }
    } catch (e) {
      console.error("fetchJobApplications:", e);
      setJobApplications([]);
    }
  };

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
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 px-6 py-4 flex items-center justify-center gap-2 font-semibold relative ${
                activeTab === tab.id ? "text-blue-600 bg-white" : "text-gray-600"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
              <span
                className={`px-3 py-1 text-xs font-bold rounded-full ${
                  activeTab === tab.id ? "bg-blue-100 text-blue-600" : "bg-gray-200 text-gray-600"
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

        {/* Appointments tab */}
        {activeTab === "appointments" && (
          <div className="p-6 overflow-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="p-3 text-left">Patient</th>
                  <th className="p-3 text-left">Contact</th>
                  <th className="p-3 text-left">Appointment</th>
                  <th className="p-3 text-left">Treatment</th>
                  <th className="p-3 text-left">Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((apt) => {
                  const apptDate = apt.appointmentDate ? apt.appointmentDate : null;
                  const ts = apt.timestamp ? apt.timestamp : null;
                  return (
                    <tr key={apt.id} className="border-b hover:bg-gray-50 transition">
                      <td className="p-3">{apt.name}</td>
                      <td className="p-3">{apt.phone}</td>
                      <td className="p-3">
                        <div className="font-medium">
                          {apptDate ? formatDateOnly(apptDate) : "N/A"}
                        </div>
                      </td>
                      <td className="p-3">{apt.treatment}</td>
                      <td className="p-3 text-sm text-gray-600">
                        {ts ? formatDateTime(ts) : "N/A"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Chat logs tab with improved UI */}
        {activeTab === "chatbot" && (
          <div className="p-6 space-y-4">
            {chatLogs.map((log) => {
              const ts = log.timestamp ? log.timestamp : null;
              return (
                <div key={log.id} className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {String(log.name || "U").charAt(0).toUpperCase()}
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-bold">{log.name || "-"}</h3>
                        <div className="text-xs text-gray-500">
                          {ts ? formatDateTime(ts) : "N/A"}
                        </div>
                      </div>

                      <div className="text-sm text-gray-600 flex items-center gap-3 mt-2">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          <span>{log.mobile || "-"}</span>
                        </div>
                      </div>

                      <div className="mt-4">
                        <p className="text-xs text-gray-500 uppercase mb-1">Query</p>
                        <div className="bg-gray-50 p-3 rounded-lg border text-gray-800">
                          {log.query || "-"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {chatLogs.length === 0 && (
              <div className="p-6 text-center text-gray-500">No chat logs found.</div>
            )}
          </div>
        )}

        {/* Jobs tab */}
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
                  <th className="p-3 text-left">Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {jobApplications.map((job) => (
                  <tr key={job.id} className="border-b hover:bg-gray-50 transition">
                    <td className="p-3">{job.name}</td>
                    <td className="p-3">{job.email}</td>
                    <td className="p-3">{job.phone}</td>
                    <td className="p-3">{job.experience}</td>
                    <td className="p-3 text-blue-600">{job.job_title}</td>
                    <td className="p-3">{job.message || "-"}</td>
                    <td className="p-3 text-sm text-gray-600">
                      {job.timestamp ? formatDateTime(job.timestamp) : "N/A"}
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

// ---------- App wrapper ----------
const AdminApp = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (sessionStorage.getItem("adminAuth") === "true") {
      setIsAuthenticated(true);
    } else {
      navigate("/admin/login", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
