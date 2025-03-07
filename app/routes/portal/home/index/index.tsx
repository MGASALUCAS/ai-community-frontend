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
//           <h1>Hello, Samwel!</h1>
//           <p>Welcome to Tanzania AI community</p>
//         </div>
//       </PageContainer>
//     </>
//   );
// };

// export default MyComponent;

import { LoaderFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { FC } from "react";
import PageContainer from "~/components/page-container";
import Footer from "../../layouts/footer";

export const loader: LoaderFunction = async () => {
  return null;
};

const HomePage: FC = () => {
  return (
<<<<<<< HEAD
    <PageContainer>
      <div className="text-white bg-gray-900 min-h-screen">
      <aside className="w-2/4 p-6">
          <h1 className="text-4xl font-bold text-white-400 animate-fade-in">
            Welcome to <span className="text-red-400">AI Community</span>!
          </h1>
          <p className="text-lg text-gray-300 mt-2">Your gateway to AI innovation and collaboration.</p>
        </aside>

        <div className="flex justify-center p-6">
          <img
            src="https://www.quantumintelligence.co.tz/static/headers/profile-1.svg"
            alt="AI Brain"
            className="rounded-lg shadow-lg w-full max-w-4xl"
          />
        </div>

        <section className="mt-12 px-6 lg:px-20">
          <h2 className="text-2xl font-semibold text-gray-300 mb-4">What’s new?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-white-300">Data Privacy Day 2025</h3>
              <p className="text-white-400">4 Good Things in Tanzania Data Protection Act, 2019</p>
              <button className="mt-3 text-white-400 hover:text-blue-600">Learn more →</button>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-white-300">Mentorship Program</h3>
              <p className="text-white-400">Supporting AI adoption through local and global initiatives.</p>
              <button className="mt-3 text-white-400 hover:text-yellow-600">Learn more →</button>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-white-300">AI in Healthcare</h3>
              <p className="text-white-400">How AI has helped mothers in Tanzania access better care.</p>
              <button className="mt-3 text-white-400 hover:text-green-600">Learn more →</button>
            </div>
          </div>
        </section>

        <footer className="mt-12 py-6 text-center text-gray-500">
          <p>© 2025 Tanzania AI Community. All rights reserved.</p>
        </footer>
      </div>
      <Outlet />
    </PageContainer>
=======
    <>
      <PageContainer>
      <Outlet />
        <div className="text-textColor min-h-[100vh] ">
          <h1>Hello, Samwel!</h1>
          <p>Welcome to Tanzania AI community</p>
        </div>
        <Footer/>
      </PageContainer>
    </>
>>>>>>> posts
  );
};

export default HomePage;