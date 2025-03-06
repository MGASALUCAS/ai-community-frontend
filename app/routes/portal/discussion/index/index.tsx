import { LoaderFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { FC, useState, useEffect } from "react";
import PageContainer from "~/components/page-container";

export const loader: LoaderFunction = async () => {
  return null;
};

// Define available discussion categories
const categories = ["All", "Career", "Connect", "Data", "Help", "Platform"];

interface Discussion {
  id: number;
  title: string;
  category: string;
  author: string;
  authorImage: string;
  views: number;
  comments: number;
  active: boolean;
  content: string;
}

const dummyDiscussions: Discussion[] = [
  {
    id: 1,
    title: "Is anyone using Mamba MDA?",
    category: "Career",
    author: "GabrielaJK",
    authorImage: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg",
    views: 5700,
    comments: 234,
    active: true,
    content: "This is the content of the discussion. Here users can post their comments and replies.",
  },
  // Add more dummy discussions as needed
];

const DiscussionPage: FC = () => {
  const [discussions, setDiscussions] = useState<Discussion[]>(dummyDiscussions);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [newDiscussion, setNewDiscussion] = useState({
    title: "",
    category: "",
    tags: "",
    caption: "",
    links: "",
    cc: "",
  });
  const [expandedDiscussion, setExpandedDiscussion] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);

  // Filter discussions based on selected category
  const filteredDiscussions = selectedCategory === "All"
    ? discussions
    : discussions.filter(
        (discussion) => discussion.category.toLowerCase() === selectedCategory.toLowerCase()
      );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewDiscussion((prev) => ({ ...prev, [name]: value }));
  };

  const handleStartDiscussion = () => {
    const newId = discussions.length + 1;
    const newDiscussionData: Discussion = {
      id: newId,
      title: newDiscussion.title,
      category: newDiscussion.category,
      author: "CurrentUser", // Replace with actual user data
      authorImage: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg", // Replace with actual user image
      views: 0,
      comments: 0,
      active: true,
      content: newDiscussion.caption,
    };
    setDiscussions((prev) => [newDiscussionData, ...prev]);
    setNewDiscussion({
      title: "",
      category: "",
      tags: "",
      caption: "",
      links: "",
      cc: "",
    });
    setShowForm(false);
  };

  const toggleExpandDiscussion = (id: number) => {
    setExpandedDiscussion(expandedDiscussion === id ? null : id);
  };

  return (
    <PageContainer>
      <Outlet />
      <div className="text-textColor p-6">
        <h1 className="text-2xl font-bold">Discussion Forum</h1>
        <p className="text-lg text-gray-400">
          Welcome to Tanzania AI Community Discussions
        </p>

        {/* Start Discussion Button */}
        <button
          onClick={() => setShowForm(true)}
          className="fixed top-18 right-8 bg-orange-500 text-white px-4 py-2 rounded-full"
        >
          Start Discussion
        </button>

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

        {/* Discussion List */}
        <div className="mt-6">
          {filteredDiscussions.map((discussion) => (
            <div key={discussion.id} className="bg-gray-800 p-4 rounded-lg shadow-md mb-4">
              <div className="flex items-center">
                <img
                  src={discussion.authorImage}
                  alt={discussion.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{discussion.title}</h3>
                  <p className="text-gray-400">{discussion.author}</p>
                  <p className="text-gray-400">{discussion.category}</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center text-gray-400">
                  <span className="mr-4">{discussion.views} views</span>
                  <span>{discussion.comments} comments</span>
                </div>
                <button
                  onClick={() => toggleExpandDiscussion(discussion.id)}
                  className="text-orange-500"
                >
                  {expandedDiscussion === discussion.id ? "Hide" : "View"} Comments
                </button>
              </div>
              {expandedDiscussion === discussion.id && (
                <div className="mt-4">
                  <p className="text-gray-400">{discussion.content}</p>
                  {/* Add comment section here */}
                </div>
              )}
            </div>
          ))}
        </div>





        {/* Start Discussion Form */}
        {showForm && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">
            <div className="bg-gray-800 p-6 rounded-lg w-full sm:w-1/3 lg:w-1/4">
              <h2 className="text-xl font-bold mb-4">Start Discussion</h2>
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-white"
              >
                &times;
              </button>
              <input
                type="text"
                name="title"
                value={newDiscussion.title}
                onChange={handleInputChange}
                placeholder="Title"
                className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
              />
              <select
                name="category"
                value={newDiscussion.category}
                onChange={handleInputChange}
                className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <input
                type="text"
                name="tags"
                value={newDiscussion.tags}
                onChange={handleInputChange}
                placeholder="Tags"
                className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
              />
              <textarea
                name="caption"
                value={newDiscussion.caption}
                onChange={handleInputChange}
                placeholder="Caption"
                className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
              />
              <input
                type="text"
                name="links"
                value={newDiscussion.links}
                onChange={handleInputChange}
                placeholder="Links"
                className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
              />
              <input
                type="text"
                name="cc"
                value={newDiscussion.cc}
                onChange={handleInputChange}
                placeholder="CC"
                className="w-full p-2 mb-2 bg-gray-700 text-white rounded"
              />
              <button
                onClick={handleStartDiscussion}
                className="w-full p-2 bg-orange-500 text-white rounded"
              >
                Start
              </button>
            </div>
          </div>
        )}
      </div>
    </PageContainer>
  );
};

export default DiscussionPage;