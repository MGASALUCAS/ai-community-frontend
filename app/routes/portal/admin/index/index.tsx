import { FC, useEffect, useState } from "react";
import PageContainer from "~/components/page-container";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Dummy data for the Dashboard section
const dummyTrafficData = [
  { month: "Jan", visits: 4000 },
  { month: "Feb", visits: 3000 },
  { month: "Mar", visits: 5000 },
  { month: "Apr", visits: 7000 },
  { month: "May", visits: 6000 },
  { month: "Jun", visits: 8000 },
];

const dummyEngagementData = [
  { year: "2020", engagement: 50 },
  { year: "2021", engagement: 70 },
  { year: "2022", engagement: 90 },
  { year: "2023", engagement: 110 },
  { year: "2024", engagement: 130 },
];

// Dummy data for Requests
const dummyRequests = [
  {
    id: 1,
    user: "Dr. Lori Specter",
    requestType: "Request for community contributor",
    date: "21/01/2025 21:05",
    details: "Team lead post for UDSM AI Community",
  },
  {
    id: 2,
    user: "Dr. Lori Specter",
    requestType: "Request to host a challenge",
    date: "22/01/2025 09:15",
    details: "Wants to host a Kaggle-style challenge for community members",
  },
  {
    id: 3,
    user: "Dr. Lori Specter",
    requestType: "Request for team lead",
    date: "23/01/2025 16:30",
    details: "Lead role for the next AI hackathon event",
  },
];

// Dummy data for Reports
const dummyReports = [
  {
    id: 1,
    title: "Bug in user login",
    date: "20/01/2025 14:10",
    details: "Users occasionally face 500 errors when logging in with Google.",
  },
  {
    id: 2,
    title: "Spam posts in forum",
    date: "21/01/2025 11:45",
    details: "Multiple spam posts detected in the AI discussion forum.",
  },
  {
    id: 3,
    title: "Profile data missing",
    date: "23/01/2025 08:20",
    details: "Some user profiles are missing data after the last migration.",
  },
];

// Tabs for top-level navigation
const TABS = ["Requests", "Reports", "Dashboard"];

interface DashboardData {
  totalUsers: number;
  activeUsers: number;
  aiProjects: number;
}

const AdminDashboard: FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Dashboard");
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(
    null
  );

  // For toggling request/report details
  const [expandedRequestIds, setExpandedRequestIds] = useState<number[]>([]);
  const [expandedReportIds, setExpandedReportIds] = useState<number[]>([]);

  // Fetch data for the Dashboard summary
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/dashboard-summary");
        setDashboardData(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  // Toggle expansion for requests
  const toggleRequestDetails = (id: number) => {
    setExpandedRequestIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Toggle expansion for reports
  const toggleReportDetails = (id: number) => {
    setExpandedReportIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Approve/Decline actions
  const handleApprove = (id: number) => {
    alert(`Request/Report with ID ${id} has been approved.`);
  };
  const handleDecline = (id: number) => {
    alert(`Request/Report with ID ${id} has been declined.`);
  };

  // Render the Dashboard section
  const renderDashboard = () => (
    <div className="mt-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-orange-400">Total Users</h2>
          <p className="text-3xl font-bold">
            {dashboardData?.totalUsers || "Loading..."}
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-blue-400">Active Users</h2>
          <p className="text-3xl font-bold">
            {dashboardData?.activeUsers || "Loading..."}
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-green-400">
            Total AI Projects
          </h2>
          <p className="text-3xl font-bold">
            {dashboardData?.aiProjects || "Loading..."}
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-yellow-400">
            Platform Traffic
          </h2>
          <p className="text-lg text-gray-400">Visualization of user activities.</p>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={dummyTrafficData}>
              <XAxis dataKey="month" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip wrapperClassName="text-black" />
              <Bar dataKey="visits" fill="#82ca9d" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-red-400">
            Community Engagement
          </h2>
          <p className="text-lg text-gray-400">
            Engagement growth over the years.
          </p>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={dummyEngagementData}>
              <XAxis dataKey="year" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip wrapperClassName="text-black" />
              <Bar dataKey="engagement" fill="#ff7300" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  // Render the Requests section
  const renderRequests = () => (
    <div className="mt-6 space-y-4">
      {dummyRequests.map((req) => (
        <div
          key={req.id}
          className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-bold">{req.user}</p>
              <p className="text-orange-300">{req.requestType}</p>
            </div>
            <button
              onClick={() => toggleRequestDetails(req.id)}
              className="text-gray-400 hover:text-gray-200"
            >
              {expandedRequestIds.includes(req.id) ? "▲" : "▼"}
            </button>
          </div>
          {expandedRequestIds.includes(req.id) && (
            <div className="mt-2">
              <p className="text-sm text-gray-400">Time: {req.date}</p>
              <p className="text-sm text-gray-400">Request: {req.details}</p>
              <div className="mt-2 flex gap-3">
                <button
                  onClick={() => handleApprove(req.id)}
                  className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-500"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleDecline(req.id)}
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-500"
                >
                  Decline
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  // Render the Reports section
  const renderReports = () => (
    <div className="mt-6 space-y-4">
      {dummyReports.map((rep) => (
        <div
          key={rep.id}
          className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-bold">{rep.title}</p>
              <p className="text-orange-300">Date: {rep.date}</p>
            </div>
            <button
              onClick={() => toggleReportDetails(rep.id)}
              className="text-gray-400 hover:text-gray-200"
            >
              {expandedReportIds.includes(rep.id) ? "▲" : "▼"}
            </button>
          </div>
          {expandedReportIds.includes(rep.id) && (
            <div className="mt-2">
              <p className="text-sm text-gray-400">Details: {rep.details}</p>
              <div className="mt-2 flex gap-3">
                <button
                  onClick={() => handleApprove(rep.id)}
                  className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-500"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleDecline(rep.id)}
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-500"
                >
                  Decline
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <PageContainer>
      <div className="bg-gray-900 min-h-screen text-white p-6">
        {/* Top-level tabs */}
        <div className="flex gap-4 mb-6">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                selectedTab === tab
                  ? "bg-orange-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <h1 className="text-3xl font-bold text-white mb-4">Admin Dashboard</h1>

        {/* Conditionally render each tab's content */}
        {selectedTab === "Dashboard" && renderDashboard()}
        {selectedTab === "Requests" && renderRequests()}
        {selectedTab === "Reports" && renderReports()}
      </div>
    </PageContainer>
  );
};

export default AdminDashboard;
