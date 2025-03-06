// // import { LoaderFunction } from "@remix-run/node";
// // import { Outlet } from "@remix-run/react";
// // import { FC } from "react";
// // import PageContainer from "~/components/page-container";

// // export const loader: LoaderFunction = async () => {
// //   return null;
// // };

// // const MyComponent: FC = () => {
// //   return (
// //     <>
// //       <PageContainer>
// //       <Outlet />
// //         <div className="text-textColor">
// //           <h1>Resources!</h1>
// //           <p>Welcome to Tanzania AI community Resources</p>
// //         </div>
// //       </PageContainer>
// //     </>
// //   );
// // };

// // export default MyComponent;


// import { LoaderFunction } from "@remix-run/node";
// import { Outlet } from "@remix-run/react";
// import { FC, useState } from "react";
// import PageContainer from "~/components/page-container";

// export const loader: LoaderFunction = async () => {
//   return null;
// };

// // Define available resource categories
// const categories = ["All", "Conferences", "Workshops", "Webinars"];

// // Sample resource data (this could later be fetched from an API)
// const resources = [
//   { category: "All", title: "Python Tutorial", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Conferences", title: "Python Resources", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Conferences", title: "Python for Data", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "All", title: "AI Ethics Overview", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Conferences", title: "Data Science Resources", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Webinars", title: "Cloud Computing Guide", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Reports", title: "AI Research Reports", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "All", title: "AI Ethics Overview", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Workshops", title: "Data Science Resources", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Workshops", title: "Cloud Computing Guide", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Workshops", title: "AI Research Reports", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Non-Technical", title: "AI Ethics Overview", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Workshops", title: "Data Science Resources", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Webinars", title: "IBM Research", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Workshops", title: "AI Research Reports", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Technical", title: "Python Tutorial", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Technical", title: "IBM Digital", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },  
//   { category: "All", title: "Python Tutorial", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Conferences", title: "Python Resources", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Conferences", title: "Python for Data", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "All", title: "AI Ethics Overview", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Conferences", title: "Data Science Resources", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Webinars", title: "Cloud Computing Guide", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Reports", title: "AI Research Reports", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "All", title: "AI Ethics Overview", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Workshops", title: "Data Science Resources", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Workshops", title: "Cloud Computing Guide", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Workshops", title: "AI Research Reports", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Non-Technical", title: "AI Ethics Overview", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Workshops", title: "Data Science Resources", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Webinars", title: "IBM Research", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Workshops", title: "AI Research Reports", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Technical", title: "Python Tutorial", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Technical", title: "IBM Digital", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "All", title: "Python Tutorial", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Conferences", title: "Python Resources", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Conferences", title: "Python for Data", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "All", title: "AI Ethics Overview", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Conferences", title: "Data Science Resources", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Webinars", title: "Cloud Computing Guide", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Reports", title: "AI Research Reports", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "All", title: "AI Ethics Overview", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Workshops", title: "Data Science Resources", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Workshops", title: "Cloud Computing Guide", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Workshops", title: "AI Research Reports", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Non-Technical", title: "AI Ethics Overview", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Workshops", title: "Data Science Resources", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Webinars", title: "IBM Research", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Workshops", title: "AI Research Reports", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Technical", title: "Python Tutorial", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },
//   { category: "Technical", title: "IBM Digital", image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg" },

// ];

// const ResourcesPage: FC = () => {
//   const [selectedCategory, setSelectedCategory] = useState("Technical");

//   // Filter resources based on selected category
//   const filteredResources = resources.filter(
//     (resource) => resource.category === selectedCategory
//   );

//   return (
//     <>
//       <PageContainer>
//         <Outlet />
//         <div className="text-textColor p-6">
//           <h1 className="text-2xl font-bold">Events</h1>
//           <p className="text-lg text-gray-400">
//             Welcome to AI Community Events
//           </p>

//           {/* Category Filters */}
//           <div className="mt-4 flex gap-3 overflow-x-auto whitespace-nowrap">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`px-4 py-2 rounded-lg text-sm font-medium flex-shrink-0 ${
//                   selectedCategory === category
//                     ? "bg-orange-500 text-white"
//                     : "bg-gray-700 text-gray-300"
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>

//           {/* Resource List */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
//             {filteredResources.map((resource, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-800 p-4 rounded-lg shadow-md"
//               >
//                 <img
//                   src={resource.image}
//                   alt={resource.title}
//                   className="w-full h-40 object-cover rounded-md"
//                 />
//                 <h3 className="mt-3 text-lg font-semibold">
//                   {resource.title}
//                 </h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </PageContainer>
//     </>
//   );
// };

// export default ResourcesPage;




import { LoaderFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { FC, useState, useEffect } from "react";
import PageContainer from "~/components/page-container";

export const loader: LoaderFunction = async () => {
  return null;
};

// Define available event categories
const categories = ["All", "Conferences", "Workshops", "Webinars"];

interface Event {
  id: number;
  title: string;
  image: string;
  description: string;
  link: string;
  category: string;
  event_host: string;
  location: string;
  date_time: string;
}

const EventsPage: FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/events/")
      .then((response) => {
        console.log("Response status:", response); // Log the response status
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
        setEvents(data);
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  // Filter events based on selected category
  const filteredEvents = selectedCategory === "All"
    ? events
    : events.filter(
        (event) => event.category.toLowerCase() === selectedCategory.toLowerCase()
      );

  return (
    <PageContainer>
      <Outlet />
      <div className="text-textColor p-6">
        <h1 className="text-2xl font-bold">Events</h1>
        <p className="text-lg text-gray-400">
          Welcome to AI Community Events
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

        {/* Event List - responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="mt-3 text-lg font-semibold">{event.title}</h3>
              <p className="mt-2 text-gray-400">{event.description}</p>
              <p className="mt-2 text-gray-400">Host: {event.event_host}</p>
              <p className="mt-2 text-gray-400">Location: {event.location}</p>
              <p className="mt-2 text-gray-400">Date: {new Date(event.date_time).toLocaleString()}</p>
              <a href={event.link} className="mt-2 text-orange-500" target="_blank" rel="noopener noreferrer">
                More Info
              </a>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default EventsPage;