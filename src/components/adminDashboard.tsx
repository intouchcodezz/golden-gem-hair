import React, { useEffect, useState } from "react";
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

/*
  AdminApp.tsx
  - Vite + React + TypeScript
  - Clean Table Layout
  - Appointment date + separate Time (Option 1)
*/

// -------------------- Admin credentials (example) --------------------
const ADMIN_CREDENTIALS = { username: "admin", password: "admin123" };

// -------------------- Utilities --------------------
const safeParseDate = (value?: any): Date | null => {
  if (!value && value !== 0) return null;
  // if it's already a Date
  if (value instanceof Date) {
    if (!isNaN(value.getTime())) return value;
    return null;
  }
  // Try ISO/Datetime parse
  let v = String(value).trim();
  if (v === "") return null;
  // If it's a plain date like YYYY-MM-DD, append time
  const dateOnlyRegex = /^\d{4}-\d{1,2}-\d{1,2}$/;
  if (dateOnlyRegex.test(v)) v = v + "T00:00:00";
  const d = new Date(v);
  return isNaN(d.getTime()) ? null : d;
};

const formatDateOnly = (d?: Date | null) => {
  if (!d) return "N/A";
  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const formatTimeOnly = (d?: Date | null) => {
  if (!d) return null;
  return d.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

const formatDateTime = (d?: Date | null) => {
  if (!d) return "N/A";
  return d.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

// -------------------- Login Component --------------------
const AdminLogin: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
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
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full mt-1 px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl outline-none focus:ring-4 focus:ring-blue-100"
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
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl outline-none focus:ring-4 focus:ring-blue-100 pr-12"
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

// -------------------- Dashboard Component --------------------
type AppointmentRaw = Record<string, any>;
type Appointment = AppointmentRaw & {
  appointmentDate: Date | null;
  appointmentTime: string | null;
  appointmentDateTime: Date | null;
  timestamp: Date | null;
};

type ChatLog = Record<string, any> & { timestamp: Date | null };
type JobApp = Record<string, any> & { timestamp: Date | null };

const Dashboard: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState<
    "appointments" | "chatbot" | "jobs"
  >("appointments");

  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [chatLogs, setChatLogs] = useState<ChatLog[]>([]);
  const [jobApplications, setJobApplications] = useState<JobApp[]>([]);
  const [loading, setLoading] = useState(true);

  // Normalizer for appointments (handles old and new fields)
  const normalizeAppointments = (rows: AppointmentRaw[]): Appointment[] =>
    rows.map((r) => {
      const appointmentDate =
        safeParseDate(r.appointment_date) || safeParseDate(r.date) || null;

      // appointment time could be stored as 'appointment_time' or old 'time'
      const appointmentTimeRaw = r.appointment_time || r.time || "";
      let appointmentTime: string | null = appointmentTimeRaw
        ? String(appointmentTimeRaw).trim()
        : null;

      // Build appointmentDateTime when possible (date + time)
      let appointmentDateTime: Date | null = null;
      if (appointmentDate) {
        try {
          // If appointmentTime is like "05:30" or "05:30:00" or "05:30 AM" try to create a date
          if (appointmentTime) {
            // normalize time to HH:MM (24h) if possible, else append raw
            let t = appointmentTime;
            // if input has AM/PM, use it directly
            if (!/[aApP]/.test(t)) {
              // ensure HH:MM
              const parts = t.split(":");
              if (parts.length >= 2) {
                const hh = parts[0].padStart(2, "0");
                const mm = parts[1].padStart(2, "0");
                t = `${hh}:${mm}`;
              } else {
                t = "00:00";
              }
            }
            // create ISO combined
            const iso = appointmentDate.toISOString().split("T")[0] + "T" + t;
            const dt = safeParseDate(iso);
            appointmentDateTime = dt || appointmentDate;
          } else {
            appointmentDateTime = appointmentDate;
          }
        } catch {
          appointmentDateTime = appointmentDate;
        }
      }

      const ts =
        safeParseDate(r.created_at) ||
        safeParseDate(r.submitted_at) ||
        safeParseDate(r.timestamp) ||
        safeParseDate(r.time) || // fallback to old 'time' if it was used as timestamp
        null;

      return {
        ...r,
        appointmentDate,
        appointmentTime,
        appointmentDateTime,
        timestamp: ts,
      };
    });

  const normalizeChatLogs = (rows: Record<string, any>[]): ChatLog[] =>
    rows.map((r) => ({
      ...r,
      timestamp:
        safeParseDate(r.created_at) ||
        safeParseDate(r.timestamp) ||
        safeParseDate(r.submitted_at) ||
        null,
    }));

  const normalizeJobs = (rows: Record<string, any>[]): JobApp[] =>
    rows.map((r) => ({
      ...r,
      timestamp:
        safeParseDate(r.submitted_at) ||
        safeParseDate(r.created_at) ||
        safeParseDate(r.timestamp) ||
        null,
    }));

  // Fetchers (replace URLs if needed)
  const fetchAppointments = async () => {
    try {
      const res = await fetch(
        "https://thegoldengemhairclinic.com/api/getAppointments.php"
      );
      const json = await res.json();
      if (json.success && Array.isArray(json.data)) {
        const normalized = normalizeAppointments(json.data);
        // sort by booking timestamp (newest first). If timestamp missing, fallback to appointmentDateTime, then appointmentDate
        normalized.sort((a, b) => {
          const aKey =
            (a.timestamp && a.timestamp.getTime()) ||
            (a.appointmentDateTime && a.appointmentDateTime.getTime()) ||
            (a.appointmentDate && a.appointmentDate.getTime()) ||
            0;
          const bKey =
            (b.timestamp && b.timestamp.getTime()) ||
            (b.appointmentDateTime && b.appointmentDateTime.getTime()) ||
            (b.appointmentDate && b.appointmentDate.getTime()) ||
            0;
          return bKey - aKey;
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
    const loadAll = async () => {
      setLoading(true);
      await Promise.all([
        fetchAppointments(),
        fetchChatLogs(),
        fetchJobApplications(),
      ]);
      setLoading(false);
    };
    loadAll();
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

        {/* Appointments tab (table) */}
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
                  const apptDate = apt.appointmentDate ?? null;
                  const apptTime = apt.appointmentTime ?? null;
                  const ts = apt.timestamp ?? null;
                  return (
                    <tr key={apt.id} className="border-b hover:bg-gray-50 transition">
                      <td className="p-3">{apt.name || "-"}</td>
                      <td className="p-3">{apt.phone || apt.mobile || "-"}</td>

                      <td className="p-3">
                        <div className="font-medium">
                          {apptDate ? formatDateOnly(apptDate) : "N/A"}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          Time: {apptTime ? apptTime : "N/A"}
                        </div>
                      </td>

                      <td className="p-3">{apt.treatment || "-"}</td>

                      <td className="p-3 text-sm text-gray-600">
                        {ts ? formatDateTime(ts) : "N/A"}
                      </td>
                    </tr>
                  );
                })}
                {appointments.length === 0 && (
                  <tr>
                    <td colSpan={5} className="p-6 text-center text-gray-500">
                      No appointments found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* Chat logs (cards) */}
        {activeTab === "chatbot" && (
          <div className="p-6 space-y-4">
            {chatLogs.map((log) => (
              <div key={log.id} className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {String(log.name || "U").charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-bold">{log.name || "-"}</h3>
                      <div className="text-xs text-gray-500">
                        {log.timestamp ? formatDateTime(log.timestamp) : "N/A"}
                      </div>
                    </div>

                    <div className="mt-2 text-sm text-gray-600 flex items-center gap-3">
                      <Phone className="w-4 h-4" />
                      <span>{log.mobile || "-"}</span>
                    </div>

                    <div className="mt-4">
                      <p className="text-xs text-gray-500 uppercase mb-1">Query</p>
                      <div className="bg-gray-50 p-3 rounded-lg border text-gray-800">{log.query || "-"}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {chatLogs.length === 0 && (
              <div className="p-6 text-center text-gray-500">No chat logs found.</div>
            )}
          </div>
        )}

        {/* Job applications (table) */}
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
                    <td className="p-3 text-sm text-gray-600">{job.timestamp ? formatDateTime(job.timestamp) : "N/A"}</td>
                  </tr>
                ))}
                {jobApplications.length === 0 && (
                  <tr>
                    <td colSpan={7} className="p-6 text-center text-gray-500">No applications found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

// -------------------- Admin App wrapper --------------------
const AdminApp: React.FC = () => {
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
