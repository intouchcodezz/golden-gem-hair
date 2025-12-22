// src/admin/AdminDashboard.tsx
import { useEffect, useState } from "react";
import {
  Shield,
  LogOut,
  Calendar,
  MessageSquare,
  Briefcase,
  Phone,
} from "lucide-react";

type Props = {
  onLogout: () => void;
};

const safeParseDate = (v?: any): Date | null => {
  if (!v) return null;
  const d = new Date(v);
  return isNaN(d.getTime()) ? null : d;
};

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

const AdminDashboard: React.FC<Props> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState<
    "appointments" | "chatbot" | "jobs"
  >("appointments");

  const [appointments, setAppointments] = useState<any[]>([]);
  const [chatLogs, setChatLogs] = useState<any[]>([]);
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const [a, c, j] = await Promise.all([
          fetch("/api/getAppointments.php").then((r) => r.json()),
          fetch("/api/getChatLogs.php").then((r) => r.json()),
          fetch("/api/getCareerApplications.php").then((r) => r.json()),
        ]);

        setAppointments(a?.data ?? []);
        setChatLogs(c?.data ?? []);
        setJobs(j?.data ?? []);
      } catch {
        setAppointments([]);
        setChatLogs([]);
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  if (loading) {
    return <div className="p-10 text-center">Loading…</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Shield className="text-blue-600" size={32} />
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 text-red-600 font-medium"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto mt-6 bg-white rounded-xl shadow">
        {/* Tabs */}
        <nav className="flex border-b">
          {[
            { id: "appointments", label: "Appointments", icon: Calendar },
            { id: "chatbot", label: "Chatbot", icon: MessageSquare },
            { id: "jobs", label: "Jobs", icon: Briefcase },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id as any)}
              className={`flex-1 p-4 flex justify-center items-center gap-2 font-semibold ${
                activeTab === t.id
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500"
              }`}
            >
              <t.icon size={18} />
              {t.label}
            </button>
          ))}
        </nav>

        {/* Appointments */}
        {activeTab === "appointments" && (
          <div className="p-6 divide-y">
            {appointments.map((a) => (
              <div key={a.id} className="py-3 flex justify-between">
                <div>
                  <div className="font-medium">{a.name || "-"}</div>
                  <div className="text-sm text-gray-500 flex items-center gap-2">
                    <Phone size={14} />
                    {a.phone || a.mobile || "-"}
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  {formatDateTime(safeParseDate(a.created_at))}
                </div>
              </div>
            ))}
            {appointments.length === 0 && (
              <div className="py-6 text-center text-gray-500">
                No appointments found
              </div>
            )}
          </div>
        )}

        {/* Chatbot */}
        {activeTab === "chatbot" && (
          <div className="p-6 space-y-4">
            {chatLogs.map((c) => (
              <div key={c.id} className="border p-4 rounded-lg">
                <div className="font-semibold">{c.name || "-"}</div>
                <div className="text-sm text-gray-600 mt-1">
                  {c.query || "-"}
                </div>
              </div>
            ))}
            {chatLogs.length === 0 && (
              <div className="text-center text-gray-500">
                No chatbot logs found
              </div>
            )}
          </div>
        )}

        {/* Jobs */}
        {activeTab === "jobs" && (
          <div className="p-6 divide-y">
            {jobs.map((j) => (
              <div key={j.id} className="py-3">
                <div className="font-medium">{j.name || "-"}</div>
                <div className="text-sm text-gray-600">
                  {j.job_title || "-"}
                </div>
              </div>
            ))}
            {jobs.length === 0 && (
              <div className="py-6 text-center text-gray-500">
                No job applications found
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
