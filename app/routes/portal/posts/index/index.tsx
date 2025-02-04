import { LoaderFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { FC } from "react";
import PageContainer from "~/components/page-container";

export const loader: LoaderFunction = async () => {
  return null;
};

const MyComponent: FC = () => {
  return (
    <>
      <PageContainer>
      <Outlet />
        <div className="text-textColor">
          <h1>Posts!</h1>
          <p>Welcome to Tanzania AI community Posts</p>
        </div>
      </PageContainer>
    </>
  );
};

export default MyComponent;

