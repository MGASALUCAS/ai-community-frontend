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
//           <h1>Resources!</h1>
//           <p>Welcome to Tanzania AI community Resources</p>
//         </div>
//       </PageContainer>
//     </>
//   );
// };

// export default MyComponent;


import { LoaderFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { FC, useState, useEffect } from "react";
import PageContainer from "~/components/page-container";

export const loader: LoaderFunction = async () => {
  return null;
};


// Define available resource categories
const categories = ["technical", "non-technical", "data", "infrastructure", "reports"];

// // Sample resource data (this could later be fetched from an API)
// const resources = [
//   { category: "Technical", title: "Python Tutorial", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Technical", title: "Python Resources", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Technical", title: "Python for Data", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Technical", title: "Datacamp AI Fundamentals", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Technical", title: "Microsoft ML Crash Course", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Technical", title: "IBM Digital", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Non-Technical", title: "AI Ethics Overview", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Data", title: "Data Science Resources", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Infrastructure", title: "Cloud Computing Guide", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Reports", title: "AI Research Reports", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Non-Technical", title: "AI Ethics Overview", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Data", title: "Data Science Resources", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Infrastructure", title: "Cloud Computing Guide", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Reports", title: "AI Research Reports", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Non-Technical", title: "AI Ethics Overview", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Data", title: "Data Science Resources", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Infrastructure", title: "Cloud Computing Guide", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Reports", title: "AI Research Reports", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Non-Technical", title: "AI Ethics Overview", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Data", title: "Data Science Resources", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Infrastructure", title: "Cloud Computing Guide", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Reports", title: "AI Research Reports", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Non-Technical", title: "AI Ethics Overview", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Data", title: "Data Science Resources", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Infrastructure", title: "Cloud Computing Guide", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Reports", title: "AI Research Reports", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Non-Technical", title: "AI Ethics Overview", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Data", title: "Data Science Resources", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Infrastructure", title: "Cloud Computing Guide", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Reports", title: "AI Research Reports", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Non-Technical", title: "AI Ethics Overview", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Data", title: "Data Science Resources", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Infrastructure", title: "Cloud Computing Guide", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Reports", title: "AI Research Reports", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Non-Technical", title: "AI Ethics Overview", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Data", title: "Data Science Resources", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Infrastructure", title: "Cloud Computing Guide", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Reports", title: "AI Research Reports", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Non-Technical", title: "AI Ethics Overview", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Data", title: "Data Science Resources", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Infrastructure", title: "Cloud Computing Guide", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Reports", title: "AI Research Reports", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Technical", title: "Python Tutorial", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Technical", title: "Python Resources", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Technical", title: "Python for Data", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Technical", title: "Datacamp AI Fundamentals", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Technical", title: "Microsoft ML Crash Course", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Technical", title: "IBM Digital", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
// ];


// const ResourcesPage: FC = () => {
//   const [selectedCategory, setSelectedCategory] = useState("Technical");

//   // Filter resources based on selected category
//   const filteredResources = resources.filter(
//     (resource) => resource.category === selectedCategory
//   );

//   return (
//     <PageContainer>
//       <Outlet />
//       <div className="text-textColor p-6">
//         <h1 className="text-2xl font-bold">Resources</h1>
//         <p className="text-lg text-gray-400">
//           Welcome to Tanzania AI Community Resources
//         </p>

//         {/* Category Filters - responsive horizontal scroll on mobile */}
//         <div className="mt-4 flex gap-3 overflow-x-auto whitespace-nowrap">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
              
//               className={`px-4 py-2 rounded-lg text-sm font-medium flex-shrink-0 ${
//                 selectedCategory === category
//                   ? "bg-orange-500 text-white"
//                   : "bg-gray-700 text-gray-300"
//               }`}
//             >
                        

//               {category}

//               <br/>
//             </button>
//           ))}

//           <br/>

//         </div>

//         {/* Resource List - responsive grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
//           {filteredResources.map((resource, index) => (
//             <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
//               <img
//                 src={resource.image}
//                 alt={resource.title}
//                 className="w-full h-40 object-cover rounded-md"
//               />
//               <h3 className="mt-3 text-lg font-semibold">{resource.title}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </PageContainer>
//   );
// };

// export default ResourcesPage;





const ResourcesPage: FC = () => {
  interface Resource {
    id: number;
    category: string;
    title: string;
    image: string;
  }

  const [resources, setResources] = useState<Resource[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("technical");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/resources/")
      .then((response) => {
        console.log("Response status:", response.status); // Log the response status
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data); // Log the JSON data
        if (!Array.isArray(data)) {
          throw new Error("Data is not an array");
        }
        setResources(data);
      })
      .catch((error) => console.error("Error fetching resources:", error));
  }, []);

  // Filter resources based on selected category
  const filteredResources = resources.filter(
    (resource) => resource.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  return (
    <PageContainer>
      <Outlet />
      <div className="text-textColor p-6">
        <h1 className="text-2xl font-bold">Resources</h1>
        <p className="text-lg text-gray-400">
          Welcome to Tanzania AI Community Resources
        </p>

        {/* Category Filters - responsive horizontal scroll on mobile */}
        <div className="mt-4 flex gap-3 overflow-x-auto whitespace-nowrap">
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

        {/* Resource List - responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredResources.map((resource) => (
            <div key={resource.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
              <img
                src={resource.image}
                alt={resource.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="mt-3 text-lg font-semibold">{resource.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default ResourcesPage;
