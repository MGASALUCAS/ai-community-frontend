// import { LoaderFunction } from "@remix-run/node";
// import { Outlet } from "@remix-run/react";
// import { FC } from "react";
// import PageContainer from "~/components/page-container";

// export const loader: LoaderFunction = async () => {
//   return null;
// };

// const MyComponent: FC = () => {
//   return (
//     <>
//       <PageContainer>
//       <Outlet />
//         <div className="text-textColor">
//           <h1>Challenges!</h1>
//           <p>Welcome to Tanzania AI community Challenges Page</p>
//         </div>
//       </PageContainer>
//     </>
//   );
// };

// export default MyComponent;

import { useState } from "react";


const filters = [
  "All Challenges",
  "Beginner",
  "Intermediate",
  "Complex",
  "Research",
  "Community",
];


const challenges = [
  {
    id: 1,
    title: "Titanic - Machine Learning",
    description: "Introduction to ML",
    teams: "12 Teams",
    status: "Ongoing",
    category: "Open",
    year: "2023",
    image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg",
  },
  {
    id: 2,
    title: "AI Ethics Challenge",
    description: "Exploring ethical AI practices",
    teams: "20 Teams",
    status: "Completed",
    category: "Closed",
    year: "2022",
    image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg",
  },
  {
    id: 3,
    title: "Introduction to ML",
    description: "Basic ML fundamentals for beginners",
    teams: "50 Teams",
    status: "Ongoing",
    category: "Beginner",
    year: "2024",
    image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg",
  },
  {
    id: 4,
    title: "Neural Networks 101",
    description: "Understanding neural networks and their applications",
    teams: "35 Teams",
    status: "Upcoming",
    category: "Intermediate",
    year: "2024",
    image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg",
  },
  {
    id: 5,
    title: "Advanced Reinforcement Learning",
    description: "Deep dive into reinforcement learning techniques",
    teams: "18 Teams",
    status: "Ongoing",
    category: "Complex",
    year: "2023",
    image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg",
  },
  {
    id: 6,
    title: "AI in Healthcare",
    description: "Exploring AI applications in the medical field",
    teams: "25 Teams",
    status: "Completed",
    category: "Research",
    year: "2023",
    image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg",
  },
  {
    id: 7,
    title: "AI for Social Good",
    description: "Using AI to solve social issues",
    teams: "40 Teams",
    status: "Ongoing",
    category: "Community",
    year: "2024",
    image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg",
  },
];


// export default function ChallengesPage() {
//   const [selectedTab, setSelectedTab] = useState("Open");

//   function setSelectedFilter(filter: string): void {
//     setSelectedTab(filter);
//   }

//   return (
//     <div className="bg-gray-1000 text-white min-h-screen p-6">
//       {/* Header Section */}
//       <div className="flex justify-between items-center">
//         <h1 className="text-3xl font-bold">Challenges</h1>
//         <button className="bg-orange-500 px-4 py-2 rounded-lg">Host Challenge</button>
//       </div>

//       {/* Tabs */}
//       <div className="flex space-x-4 mt-4">
//         {['Open', 'Closed'].map((tab) => (
//           <button
//             key={tab}
//             className={`px-4 py-2 rounded-lg ${selectedTab === tab ? 'border-b-2 border-orange-500' : 'text-gray-400'}`}
//             onClick={() => setSelectedTab(tab)}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Categories */}
//       <div className="flex space-x-4 mt-6 overflow-x-auto">
//       {filters.map(filter => (
//           <button
//             key={filter}
//             className={`px-4 py-2 rounded-lg ${selectedTab === filter ? "bg-orange-500" : "bg-gray-700"}`}
//             onClick={() => setSelectedFilter(filter)}
//           >
//             {filter}
//           </button>
//         ))}


//       </div>

//       {/* Featured Challenges */}
//       <h2 className="text-2xl font-semibold mt-8">Featured Challenges</h2>
//       <div className="grid md:grid-cols-3 gap-6 mt-4">
//         {challenges.map((challenge) => (
//           <div key={challenge.id} className="bg-gray-800 p-4 rounded-lg">
//             <img src={challenge.image} alt={challenge.title} className="w-full h-40 object-cover rounded-md" />
//             <div className="mt-2 flex justify-between">
//               <span className="text-sm bg-orange-500 px-2 py-1 rounded-lg">{challenge.year}</span>
//             </div>
//             <h3 className="text-lg font-bold mt-2">{challenge.title}</h3>
//             <p className="text-gray-400 text-sm mt-1">{challenge.description}</p>
//             <p className="text-gray-400 text-sm mt-1">{challenge.teams}</p>
//             <div className="flex justify-between mt-3">
//               <span className="text-gray-300 text-sm">{challenge.category}</span>
//               <span className="text-gray-300 text-sm">{challenge.status}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// import { useState } from "react";
import { Link } from "@remix-run/react";


export default function ChallengesPage() {
  const [selectedTab, setSelectedTab] = useState("Open");

  function setSelectedFilter(filter: string): void {
    setSelectedTab(filter);
  }

  return (
    <div className="bg-gray-1000 text-white min-h-screen p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Challenges</h1>
        <button className="bg-orange-500 px-4 py-2 rounded-lg">Host Challenge</button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 mt-4">
        {["Open", "Closed"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-lg ${selectedTab === tab ? 'border-b-2 border-orange-500' : 'text-gray-400'}`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Categories */}
      <div className="flex space-x-4 mt-6 overflow-x-auto">
        {filters.map(filter => (
          <button
            key={filter}
            className={`px-4 py-2 rounded-lg ${selectedTab === filter ? "bg-orange-500" : "bg-gray-700"}`}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Featured Challenges */}
      <h2 className="text-2xl font-semibold mt-8">Featured Challenges</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-4">

        {challenges.map((challenge) => (
          <Link key={challenge.id} to={`${challenge.id}`} className="block">
            <div className="bg-gray-800 p-4 rounded-lg">
              <img src={challenge.image} alt={challenge.title} className="w-full h-40 object-cover rounded-md" />
              <div className="mt-2 flex justify-between">
                <span className="text-sm bg-orange-500 px-2 py-1 rounded-lg">{challenge.year}</span>
              </div>
              <h3 className="text-lg font-bold mt-2">{challenge.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{challenge.description}</p>
              <p className="text-gray-400 text-sm mt-1">{challenge.teams}</p>
              <div className="flex justify-between mt-3">
                <span className="text-gray-300 text-sm">{challenge.category}</span>
                <span className="text-gray-300 text-sm">{challenge.status}</span>
              </div>
            </div>
          </Link>
        ))}


      </div>
    </div>
  );
}
