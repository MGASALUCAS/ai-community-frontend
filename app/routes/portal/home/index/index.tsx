import { LoaderFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { FC } from "react";
import PageContainer from "~/components/page-container";
import Footer from "../../layouts/footer";

export const loader: LoaderFunction = async () => {
  return null;
};

const MyComponent: FC = () => {
  return (
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
  );
};

export default MyComponent;

