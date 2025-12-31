import React, { useEffect, useState } from "react";
import {
  LogOut,
  Shield,
  Calendar,
  MessageSquare,
  Briefcase,
  User as UserIcon,
  Clock,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Phone,
} from "lucide-react";

/* ================= Admin Credentials ================= */
const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "admin123",
};

/* ================= Utilities ================= */
const safeParseDate = (value?: any): Date | null => {
  if (!value && value !== 0) return null;
  if (value instanceof Date && !isNaN(value.getTime())) return value;
  let v = String(value).trim();
  if (!v) return null;
  if (/^\d{4}-\d{2}-\d{2}$/.test(v)) v += "T00:00:00";
  const d = new Date(v);
  return isNaN(d.getTime()) ? null : d;
};

const formatDateOnly = (d?: Date | null) =>
  d
    ? d.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "N/A";

const formatTimeOnly = (d?: Date | null) =>
  d
    ? d.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
    : null;

const formatDateTime = (d?: Date | null) =>
  d
    ? d.toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "N/A";

/* ================= Types ================= */
type AppointmentRaw = Record<string, any>;
type Appointment = AppointmentRaw & {
  appointmentDate: Date | null;
  appointmentTime: string | null;
  appointmentDateTime: Date | null;
  timestamp: Date | null;
};
type ChatLog = Record<string, any> & { timestamp: Date | null };
type JobApp = Record<string, any> & { timestamp: Date | null };

/* ================= Login Component ================= */
const AdminLogin: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Admin Portal
          </h1>
          <p className="text-gray-600">Clinic Management System</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <UserIcon className="w-4 h-4 inline mr-1" />
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full mt-1 px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl outline-none focus:ring-4 focus:ring-blue-100"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Lock className="w-4 h-4 inline mr-1" />
                Password
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
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

/* ================= Dashboard Component ================= */
const AdminDashboard: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  type TabKey = "appointments" | "chatbot" | "jobs";

  const [activeTab, setActiveTab] = useState<TabKey>("appointments");
  
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [chatLogs, setChatLogs] = useState<ChatLog[]>([]);
  const [jobApplications, setJobApplications] = useState<JobApp[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  /* -------- Normalizers -------- */
  const normalizeAppointments = (rows: AppointmentRaw[]): Appointment[] =>
    rows.map((r) => {
      const appointmentDate =
        safeParseDate(r.appointment_date) || safeParseDate(r.date) || null;

      const appointmentTimeRaw = r.appointment_time || r.time || "";
      let appointmentTime: string | null = appointmentTimeRaw
        ? String(appointmentTimeRaw).trim()
        : null;

      let appointmentDateTime: Date | null = null;
      if (appointmentDate) {
        try {
          if (appointmentTime) {
            let t = appointmentTime;
            if (!/[aApP]/.test(t)) {
              const parts = t.split(":");
              if (parts.length >= 2) {
                const hh = parts[0].padStart(2, "0");
                const mm = parts[1].padStart(2, "0");
                t = `${hh}:${mm}`;
              } else {
                t = "00:00";
              }
            }
            const iso =
              appointmentDate.toISOString().split("T")[0] + "T" + t;
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
        null;

      return {
        ...r,
        appointmentDate,
        appointmentTime,
        appointmentDateTime,
        timestamp: ts,
      };
    });

  const normalizeChatLogs = (rows: any[]): ChatLog[] =>
    rows.map((r) => ({
      ...r,
      timestamp:
        safeParseDate(r.created_at) ||
        safeParseDate(r.timestamp) ||
        safeParseDate(r.submitted_at) ||
        null,
    }));

  const normalizeJobs = (rows: any[]): JobApp[] =>
    rows.map((r) => ({
      ...r,
      timestamp:
        safeParseDate(r.submitted_at) ||
        safeParseDate(r.created_at) ||
        safeParseDate(r.timestamp) ||
        null,
    }));

  /* -------- Fetchers -------- */
  const fetchAppointments = async () => {
    try {
      const res = await fetch(
        "https://thegoldengemhairclinic.com/api/getAppointments.php"
      );
      const json = await res.json();
      if (json.success && Array.isArray(json.data)) {
        const normalized = normalizeAppointments(json.data);
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

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl font-semibold text-gray-600">Loading...</div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Tabs */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 flex">
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
              label: "Job Applications",
              icon: Briefcase,
              count: jobApplications.length,
            },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 px-6 py-4 flex items-center justify-center gap-2 font-semibold relative ${
                activeTab === tab.id
                  ? "text-blue-600 bg-white"
                  : "text-gray-600"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
              <span
                className={`px-2 py-0.5 rounded-full text-xs ${
                  activeTab === tab.id
                    ? "bg-blue-100 text-blue-600"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {tab.count}
              </span>
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-t" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-6">
        {/* ===== APPOINTMENTS ===== */}
        {activeTab === "appointments" && (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Patient
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Contact
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Appointment
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Treatment
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {appointments.map((apt, idx) => {
                    const apptDate = apt.appointmentDate ?? null;
                    const apptTime = apt.appointmentTime ?? null;
                    const ts = apt.timestamp ?? null;
                    return (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-800 font-medium">
                          {apt.name || "-"}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {apt.phone || apt.mobile || "-"}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-blue-600" />
                            <div>
                              <div className="text-sm font-medium text-gray-800">
                                {apptDate ? formatDateOnly(apptDate) : "N/A"}
                              </div>
                              {apptTime && (
                                <div className="text-xs text-gray-500 flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {apptTime}
                                </div>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {apt.treatment || "-"}
                        </td>
                      </tr>
                    );
                  })}
                  {appointments.length === 0 && (
                    <tr>
                      <td
                        colSpan={4}
                        className="px-6 py-12 text-center text-gray-500"
                      >
                        No appointments found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ===== CHATBOT ===== */}
        {activeTab === "chatbot" && (
          <div className="space-y-4">
            {chatLogs.map((log, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-semibold text-lg">
                      {String(log.name || "U")
                        .charAt(0)
                        .toUpperCase()}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {log.name || "-"}
                      </h3>
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {log.timestamp ? formatDateTime(log.timestamp) : "N/A"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {log.mobile || "-"}
                      </span>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm font-medium text-gray-700 mb-1">
                        Query
                      </p>
                      <p className="text-sm text-gray-600">
                        {log.query || "-"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {chatLogs.length === 0 && (
              <div className="bg-white rounded-lg shadow-sm p-12 text-center text-gray-500">
                No chat logs found.
              </div>
            )}
          </div>
        )}

        {/* ===== JOBS ===== */}
        {activeTab === "jobs" && (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Email
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Phone
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Experience
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Job Title
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Message
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Timestamp
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {jobApplications.map((job, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-800">
                        {job.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-gray-400" />
                          {job.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-gray-400" />
                          {job.phone}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {job.experience}
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                          {job.job_title}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">
                        {job.message || "-"}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {job.timestamp ? formatDateTime(job.timestamp) : "N/A"}
                      </td>
                    </tr>
                  ))}
                  {jobApplications.length === 0 && (
                    <tr>
                      <td
                        colSpan={7}
                        className="px-6 py-12 text-center text-gray-500"
                      >
                        No job applications found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* ================= Admin App Wrapper ================= */
const AdminApp: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    if (sessionStorage.getItem("adminAuth") === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    sessionStorage.setItem("adminAuth", "true");
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("adminAuth");
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) return <AdminLogin onLogin={handleLogin} />;
  return <AdminDashboard onLogout={handleLogout} />;
};

export default AdminApp;