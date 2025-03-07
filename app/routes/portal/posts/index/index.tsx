import { FC, useState } from "react";
import { Outlet } from "@remix-run/react";
import PageContainer from "~/components/page-container";
import PostsPageHeader from "~/routes/portal/posts/index/posts-page-header";
import CommunitiesSection from "~/routes/portal/posts/index/community-section";
import PostCard from "~/routes/portal/posts/index/post-card";
import Footer from "../../layouts/footer";
import { dummyPosts } from "./dummyData";

const Posts: FC = () => {
  const [expandedPostId, setExpandedPostId] = useState<number | null>(null);

  const handleExpand = (id: number) => {
    if (expandedPostId === id) {
      setExpandedPostId(null);
    } else {
      setExpandedPostId(id);
    }
  };

  return (
    <>
      <Outlet />
      <PageContainer>
        <PostsPageHeader />
        <div className="min-h-[100vh] flex flex-col sm:flex-row pt-[6.5rem] justify-between items-start w-full sm:space-x-2 h-[calc(100vh-5rem)]">
          <div className="w-full sm:w-[70%] min-h-[100vh] scrollbar-hide text-textColor overflow-y-auto h-full px-2 md:pr-2">
            {dummyPosts.map((postData) => (
              <div className="mb-4" key={postData.id}>
                <PostCard
                  postData={postData}
                  isExpanded={expandedPostId === postData.id}
                  onExpand={() => handleExpand(postData.id)}
                />
              </div>
            ))}
            <div className="hidden sm:flex justify-end">
              <Footer />
            </div>
          </div>

          <div className="w-full sm:w-[27%] text-textColor mt-4 sm:mt-0 sm:justify-start px-2 justify-center">
            <CommunitiesSection />
            <div className="md:hidden sm:flex justify-end">
              <Footer />
            </div>
          </div>
        </div>
      </PageContainer>
    </>
  );
};

export default Posts;

