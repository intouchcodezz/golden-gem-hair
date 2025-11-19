import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Lock, LogOut, Shield, Calendar, MessageSquare, Phone, 
  User as UserIcon, Clock, Eye, EyeOff, Briefcase 
} from 'lucide-react';

interface DashboardProps {
  onLogout: () => void;
}

// Mock admin credentials
const ADMIN_CREDENTIALS = { username: 'admin', password: 'admin123' };

// Admin Login Component
const AdminLogin = ({ onLogin }: { onLogin: () => void }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    setTimeout(() => {
      if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
        onLogin();
      } else {
        setError('Invalid username or password');
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-10 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Admin Portal</h1>
            <p className="text-blue-100">Clinic Management System</p>
          </div>

          <div className="px-8 py-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <UserIcon className="w-4 h-4 text-blue-600" /> Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all outline-none"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-600" /> Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all outline-none pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {error && <div className="bg-red-50 border-2 border-red-200 rounded-xl px-4 py-3 text-red-700 text-sm font-medium">{error}</div>}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Dashboard Component
const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('appointments');
  const [appointments, setAppointments] = useState<any[]>([]);
  const [chatLogs, setChatLogs] = useState<any[]>([]);
  const [jobApplications, setJobApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch appointments
  const fetchAppointments = async () => {
    try {
      const res = await fetch('https://thegoldengemhairclinic.com/api/getAppointments.php');
      const data = await res.json();
      if (data.success) setAppointments(data.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Fetch chat logs
  const fetchChatLogs = async () => {
    try {
      const res = await fetch('https://thegoldengemhairclinic.com/api/getChatLogs.php');
      const data = await res.json();
      if (data.success) setChatLogs(data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchJobApplications = async () => {
    try {
      const res = await fetch('https://thegoldengemhairclinic.com/api/getCareerApplications.php');
      const data = await res.json();
      if (data.success) setJobApplications(data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await Promise.all([fetchAppointments(), fetchChatLogs(), fetchJobApplications()]);
      setLoading(false);
    };
    loadData();
  }, []);

  const tabs = [
    { id: 'appointments', label: 'Appointments', icon: Calendar, count: appointments.length },
    { id: 'chatbot', label: 'Chatbot Q&A', icon: MessageSquare, count: chatLogs.length },
    { id: 'jobs', label: 'Apply Job', icon: Briefcase, count: jobApplications.length },
  ];

  if (loading) return <div className="p-10 text-center text-lg">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2.5 rounded-xl">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-500">Clinic Management System</p>
            </div>
          </div>
          <button onClick={onLogout} className="flex items-center gap-2 px-6 py-2.5 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-all font-medium hover:scale-105 active:scale-95">
            <LogOut className="w-5 h-5" /> Logout
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="border-b border-gray-200 bg-gray-50">
            <nav className="flex">
              {tabs.map(tab => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 font-semibold transition-all relative ${activeTab === tab.id ? 'text-blue-600 bg-white' : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'}`}>
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${activeTab === tab.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-200 text-gray-600'}`}>
                    {tab.count}
                  </span>
                  {activeTab === tab.id && <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600" />}
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="p-6">
            {activeTab === 'appointments' && (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Patient</th>
                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Contact</th>
                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Date</th>
                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Treatment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.map((apt) => (
                      <tr key={apt.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-4">{apt.name}</td>
                        <td className="py-4 px-4">{apt.phone}</td>
                        <td className="py-4 px-4">{new Date(apt.date).toLocaleDateString()}</td>
                        <td className="py-4 px-4">{apt.treatment}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'chatbot' && (
              <div className="space-y-4">
                {chatLogs.map(log => (
                  <div key={log.id} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {log.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">{log.name}</h3>
                          <div className="flex items-center gap-3 text-sm text-gray-600">
                            <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {log.mobile}</span>
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {log.timestamp}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Query</div>
                        <div className="bg-white px-4 py-3 rounded-xl border border-gray-200 text-gray-900 font-medium">{log.query}</div>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Response</div>
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-3 rounded-xl border border-blue-200 text-gray-800">{log.response}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'jobs' && (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Name</th>
                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Email</th>
                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Phone</th>
                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Experience</th>
                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Job Title</th>
                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Message</th>
                      <th className="py-3 px-4 text-left font-semibold text-gray-700">Submitted</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobApplications.map(job => (
                      <tr key={job.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-4">{job.name}</td>
                        <td className="py-4 px-4">{job.email}</td>
                        <td className="py-4 px-4">{job.phone}</td>
                        <td className="py-4 px-4">{job.experience}</td>
                        <td className="py-4 px-4 text-blue-600 font-medium">{job.job_title}</td>
                        <td className="py-4 px-4">{job.message || '-'}</td>
                        <td className="py-4 px-4 text-sm text-gray-500">{new Date(job.submitted_at).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Admin App
const AdminApp = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handlePopState = () => {
      sessionStorage.removeItem('adminAuth');
      setIsAuthenticated(false);
      navigate('/admin/login', { replace: true });
    };
    window.addEventListener('popstate', handlePopState);

    if (sessionStorage.getItem('adminAuth') === 'true') setIsAuthenticated(true);
    else navigate('/admin/login', { replace: true });

    return () => window.removeEventListener('popstate', handlePopState);
  }, [navigate]);

  const handleLogin = () => {
    sessionStorage.setItem('adminAuth', 'true');
    setIsAuthenticated(true);
    navigate('/admin/dashboard', { replace: true });
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuth');
    setIsAuthenticated(false);
    navigate('/admin/login', { replace: true });
  };

  if (!isAuthenticated) return <AdminLogin onLogin={handleLogin} />;
  return <Dashboard onLogout={handleLogout} />;
};

export default AdminApp;
