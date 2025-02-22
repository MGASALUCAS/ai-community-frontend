// app/routes/challenges/$id.tsx
import { useParams } from "@remix-run/react";

// const challenges = [
//   {
//     id: 1,
//     title: "Titanic - Machine Learning",
//     description: "Introduction to ML",
//     teams: "12 Teams",
//     status: "Ongoing",
//     category: "Open",
//     year: "2023",
//     image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg",
//   },
//   {
//     id: 2,
//     title: "AI Ethics Challenge",
//     description: "Exploring ethical AI practices",
//     teams: "20 Teams",
//     status: "Completed",
//     category: "Closed",
//     year: "2022",
//     image: "https://www.quantumintelligence.co.tz/static/headers/profile-1.svg",
//   },
// ];

export default function ChallengeDetail() {
  const { id } = useParams();
  // const challenge = challenges.find((c) => c.id.toString() === id);
  return <div>Challenge ID: {id}</div>;


  // if (!challenge) {
  //   return <div className="text-center text-red-500">Challenge not found!</div>;
  // }

  // return (
  //   <div className="bg-gray-900 text-white min-h-screen p-6">
  //     <h1 className="text-3xl font-bold">{challenge.title}</h1>
  //     <img src={challenge.image} alt={challenge.title} className="w-full h-60 object-cover rounded-lg mt-4" />
  //     <p className="mt-4 text-lg">{challenge.description}</p>
  //     <p className="text-sm text-gray-400">Teams: {challenge.teams}</p>
  //     <p className="text-sm text-gray-400">Status: {challenge.status}</p>
  //     <p className="text-sm text-gray-400">Category: {challenge.category}</p>
  //     <p className="text-sm text-gray-400">Year: {challenge.year}</p>
  //   </div>
  // );
}
