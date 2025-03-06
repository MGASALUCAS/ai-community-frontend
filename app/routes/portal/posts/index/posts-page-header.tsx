import { useState } from "react";
import { Button, ButtonLink } from "~/components/button";

const filters = ["All", "Blogs", "Newsletters", "Talks & Podcasts"];

const PostsPageHeader = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="w-full max-w-[1139px] fixed top-12 bg-primary z-10 pb-2 mx-auto">
      <div className="text-white text-2xl font-extrabold mb-4">
        Posts
      </div>

      <div className="flex flex-col gap-4 md:gap-0 items-center justify-start">
        <div className="flex gap-4 justify-start overflow-x-auto scrollbar-hide w-full">
          <div className="flex justify-start whitespace-nowrap gap-4 w-full">
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`h-10 px-5 rounded-full border 
                  ${activeFilter === filter
                    ? "border-red-500 text-accent font-bold"
                    : "border-white text-white font-normal"
                  }`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex my-0 justify-end w-full px-2">
          <ButtonLink
            className="h-10 px-6 bg-accent text-white font-semibold rounded-full"
            to={"new"}
          >
            Add Post
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default PostsPageHeader;
