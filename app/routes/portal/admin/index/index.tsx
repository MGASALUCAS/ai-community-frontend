import { FC, useEffect, useState } from "react";
import PageContainer from "~/components/page-container";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

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

const Dashboard: FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/dashboard-summary");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <PageContainer>
      <div className="bg-gray-900 min-h-screen text-white p-6">
        <h1 className="text-3xl font-bold text-white mb-4">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-orange-400">Total Users</h2>
            <p className="text-3xl font-bold">{data?.totalUsers || "Loading..."}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-blue-400">Active Users</h2>
            <p className="text-3xl font-bold">{data?.activeUsers || "Loading..."}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-green-400">Total AI Projects</h2>
            <p className="text-3xl font-bold">{data?.aiProjects || "Loading..."}</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-yellow-400">Platform Traffic</h2>
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
            <h2 className="text-xl font-semibold text-red-400">Community Engagement</h2>
            <p className="text-lg text-gray-400">Engagement growth over the years.</p>
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
    </PageContainer>
  );
};

export default Dashboard;
