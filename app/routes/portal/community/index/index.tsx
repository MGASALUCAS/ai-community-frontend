import { LoaderFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { FC, useState } from "react";
import PageContainer from "~/components/page-container";

export const loader: LoaderFunction = async () => {
  return null;
};

// Sample data for each category
// You can fetch real data from an API or database instead
const sampleData = [
  {
    category: "People",
    role: "AI Researcher",
    name: "Jane Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
    image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg",
  },
  {
    category: "People",
    role: "AI Experts Club",
    name: "Tech Enthusiasts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
    image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg",
  },
  {
    category: "People",
    role: "Student",
    name: "John Smith",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
    image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg",
  },
  {
    category: "People",
    role: "Developer",
    name: "Alice Brown",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
    image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg",
  },

  {
    category: "Projects",
    role: "AI for Health",
    name: "Medical ML",
    description:
      "A project focusing on using AI to enhance medical diagnostics and patient care.",
    image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg",
  },
  {
    category: "Projects",
    role: "AI for Education",
    name: "EdTech Innovations",
    description:
      "Leveraging AI to improve student engagement and personalized learning.",
    image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg",
  },
  {
    category: "Projects",
    role: "AI for Agriculture",
    name: "Smart Farming",
    description:
      "Implementing AI and IoT solutions for efficient and sustainable agriculture.",
    image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg",
  },
  {
    category: "Projects",
    role: "AI for Finance",
    name: "FinTech Boost",
    description:
      "Utilizing AI to optimize financial services and enhance digital banking.",
    image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg",
  },

  {
    category: "Startups",
    role: "AI Startup",
    name: "Visionary Tech",
    description:
      "A startup harnessing computer vision for real-time analytics and monitoring.",
    image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg",
  },
  {
    category: "Startups",
    role: "Robotics Startup",
    name: "RoboMakers",
    description:
      "Building next-gen robotics solutions for healthcare and manufacturing.",
    image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg",
  },
  {
    category: "Startups",
    role: "NLP Startup",
    name: "Linguistic AI",
    description:
      "Developing language processing tools for local dialects and translations.",
    image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg",
  },
  {
    category: "Startups",
    role: "Data Science Startup",
    name: "DataSolve",
    description:
      "Empowering businesses with data-driven insights and predictive analytics.",
    image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg",
  },

  {
    category: "Institutions",
    role: "AI Research Lab",
    name: "Tanzania AI Institute",
    description:
      "Leading research in artificial intelligence for social and economic impact.",
    image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg",
  },
  {
    category: "Institutions",
    role: "Tech University",
    name: "University of Innovation",
    description:
      "Pioneering new AI courses and research for tomorrow's innovators.",
    image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg",
  },
  {
    category: "Institutions",
    role: "Government Agency",
    name: "AI Policy Board",
    description:
      "Regulating and guiding ethical AI adoption across industries.",
    image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg",
  },
  {
    category: "Institutions",
    role: "Private Research",
    name: "DeepTech Labs",
    description:
      "Focusing on advanced machine learning for industrial automation.",
    image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg",
  },
];

// Category tabs
const categories = ["People", "Projects", "Startups", "Institutions"];

const MyComponent: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("People");

  // Filter data by category
  const filteredData = sampleData.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <PageContainer>
      <Outlet />

      <div className="text-textColor px-6 py-8 bg-[#1f1f24] rounded-md">
        <h1 className="text-3xl font-bold mb-4">AI Community</h1>
        <div className="flex items-center gap-4 mb-2">
          <img
            src="https://www.quantumintelligence.co.tz/static/headers/profile-1.svg"
            alt="Tanzania AI Community"
            className="w-16 h-16 object-cover rounded-full"
          />
          <h2 className="text-xl font-semibold">Tanzania AI Community</h2>
       <div>
        
       </div>
        <p className="text-gray-400 mb-1">
          communications@ai.or.tz | +255697926060
        </p>
        </div>
        {/* <p className="text-gray-300 max-w-3xl">
        Welcome to the AI Community thriving hub where researchers, developers, entrepreneurs, and enthusiasts unite to harness the transformative power of artificial intelligence. 
        Our mission is to foster collaboration, share knowledge, and drive innovation across Tanzania’s tech landscape. 
        By bridging the gap between theory and real-world impact, we aim to empower individuals, institutions, and industries to tackle pressing challenges and shape a brighter, data-driven future. 
        Join us as we build an inclusive ecosystem that propels AI forward for the benefit of everyone.
        </p> */}
      </div>

      {/* Category Tabs */}
      <div className="mt-6 flex gap-3 overflow-x-auto whitespace-nowrap px-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium flex-shrink-0 ${
              selectedCategory === category
                ? "bg-orange-500 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Filtered Content Cards */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 pb-8">
        {filteredData.map((item, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
            <img
              src={item.image}
              alt={item.role}
              className="w-full h-32 object-cover rounded-md"
            />
            <h3 className="mt-3 text-lg font-semibold">{item.role}</h3>
            <p className="text-sm text-gray-400 mb-1">{item.name}</p>
            <p className="text-sm text-gray-300">{item.description}</p>
            <button className="mt-3 text-sm font-medium text-orange-500 hover:underline">
              See more
            </button>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};

export default MyComponent;

