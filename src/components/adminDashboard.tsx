import React, { useEffect, useState } from "react";
import {
  LogOut,
  Shield,
  Calendar,
  MessageSquare,
  Phone,
  Briefcase,
} from "lucide-react";

type Props = {
  onLogout: () => void;
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
  timestamp: Date | null;
};

type ChatLog = Record<string, any> & { timestamp: Date | null };
type JobApp = Record<string, any> & { timestamp: Date | null };

/* ================= Dashboard ================= */

const AdminDashboard: React.FC<Props> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState<
    "appointments" | "chatbot" | "jobs"
  >("appointments");

  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [chatLogs, setChatLogs] = useState<ChatLog[]>([]);
  const [jobApplications, setJobApplications] = useState<JobApp[]>([]);
  const [loading, setLoading] = useState(true);

  /* -------- Normalizers -------- */

  const normalizeAppointments = (rows: AppointmentRaw[]): Appointment[] =>
    rows.map((r) => ({
      ...r,
      appointmentDate:
        safeParseDate(r.appointment_date) || safeParseDate(r.date),
      timestamp:
        safeParseDate(r.created_at) ||
        safeParseDate(r.submitted_at) ||
        null,
    }));

  const normalizeChatLogs = (rows: any[]): ChatLog[] =>
    rows.map((r) => ({
      ...r,
      timestamp:
        safeParseDate(r.created_at) ||
        safeParseDate(r.submitted_at) ||
        null,
    }));

  const normalizeJobs = (rows: any[]): JobApp[] =>
    rows.map((r) => ({
      ...r,
      timestamp:
        safeParseDate(r.created_at) ||
        safeParseDate(r.submitted_at) ||
        null,
    }));

  /* -------- Fetchers -------- */

  const fetchAppointments = async () => {
    const res = await fetch(
      "https://thegoldengemhairclinic.com/api/getAppointments.php"
    );
    const json = await res.json();
    if (json.success) setAppointments(normalizeAppointments(json.data));
  };

  const fetchChatLogs = async () => {
    const res = await fetch(
      "https://thegoldengemhairclinic.com/api/getChatLogs.php"
    );
    const json = await res.json();
    if (json.success) setChatLogs(normalizeChatLogs(json.data));
  };

  const fetchJobApplications = async () => {
    const res = await fetch(
      "https://thegoldengemhairclinic.com/api/getCareerApplications.php"
    );
    const json = await res.json();
    if (json.success) setJobApplications(normalizeJobs(json.data));
  };

  useEffect(() => {
    Promise.all([
      fetchAppointments(),
      fetchChatLogs(),
      fetchJobApplications(),
    ]).finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white border-b shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Shield className="w-9 h-9 text-blue-600" />
            <div>
              <h1 className="text-xl font-bold">Admin Dashboard</h1>
              <p className="text-sm text-gray-500">Clinic Management</p>
            </div>
          </div>

          <button
            onClick={onLogout}
            className="bg-red-600 text-white px-4 py-2 rounded flex items-center gap-2"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto mt-6 bg-white rounded-xl shadow border">
        <nav className="flex border-b">
          {[
            { id: "appointments", label: "Appointments", icon: Calendar },
            { id: "chatbot", label: "Chatbot", icon: MessageSquare },
            { id: "jobs", label: "Job Applications", icon: Briefcase },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 py-4 font-semibold flex justify-center items-center gap-2 ${
                activeTab === tab.id
                  ? "text-blue-600 border-b-4 border-blue-600"
                  : "text-gray-600"
              }`}
            >
              <tab.icon size={18} /> {tab.label}
            </button>
          ))}
        </nav>

        {/* ===== APPOINTMENTS ===== */}
        {activeTab === "appointments" && (
          <TableWrapper headers={["Patient", "Phone", "Date", "Treatment", "Time"]}>
            {appointments.map((a) => (
              <tr key={a.id} className="border-b">
                <td className="p-3">{a.name}</td>
                <td className="p-3">{a.phone}</td>
                <td className="p-3">{formatDateOnly(a.appointmentDate)}</td>
                <td className="p-3">{a.treatment}</td>
                <td className="p-3 text-sm">
                  {formatDateTime(a.timestamp)}
                </td>
              </tr>
            ))}
          </TableWrapper>
        )}

        {/* ===== CHATBOT ===== */}
        {activeTab === "chatbot" && (
          <div className="p-6 space-y-4">
            {chatLogs.map((c) => (
              <div key={c.id} className="border rounded-lg p-4">
                <p className="font-semibold">{c.name}</p>
                <p className="text-sm flex items-center gap-2 text-gray-600">
                  <Phone size={14} /> {c.mobile}
                </p>
                <p className="mt-2">{c.query}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {formatDateTime(c.timestamp)}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* ===== JOBS ===== */}
        {activeTab === "jobs" && (
          <TableWrapper
            headers={[
              "Name",
              "Email",
              "Phone",
              "Experience",
              "Job",
              "Message",
              "Date",
            ]}
          >
            {jobApplications.map((j) => (
              <tr key={j.id} className="border-b">
                <td className="p-3">{j.name}</td>
                <td className="p-3">{j.email}</td>
                <td className="p-3">{j.phone}</td>
                <td className="p-3">{j.experience}</td>
                <td className="p-3">{j.job_title}</td>
                <td className="p-3">{j.message}</td>
                <td className="p-3 text-sm">
                  {formatDateTime(j.timestamp)}
                </td>
              </tr>
            ))}
          </TableWrapper>
        )}
      </div>
    </div>
  );
};

/* ================= Reusable Table ================= */

const TableWrapper: React.FC<{
  headers: string[];
  children: React.ReactNode;
}> = ({ headers, children }) => (
  <div className="overflow-auto">
    <table className="w-full">
      <thead className="bg-gray-50 border-b">
        <tr>
          {headers.map((h) => (
            <th key={h} className="p-3 text-left text-sm font-semibold">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  </div>
);

export default AdminDashboard;
