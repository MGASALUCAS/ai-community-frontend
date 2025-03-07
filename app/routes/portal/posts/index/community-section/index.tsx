import { useGetPostHighlights } from "../../resources/highlights";
import InsureData from "~/components/insure-data";
import { LoadingElement } from "~/components/loading-element";
import { SeeMoreList } from "./see-more-list";
import { FC } from "react";


const CommunitiesSection: FC = () => {
  const { data: postHighlights, isLoading } = useGetPostHighlights();
  const communities = postHighlights?.data?.[0]?.communities || [];
  const trendingTopics = postHighlights?.data?.[0]?.trendingTopics || [];

  return (
    <InsureData data={postHighlights} loading={isLoading} loadingElement={<LoadingElement />}>
      <div className="bg-gray-900 text-white p-2 w-full mx-0 md:mx-0 md:w-[17rem] rounded-lg">
        <SeeMoreList
          title="Communities"
          data={communities}
          renderItem={(community) => (
            <div key={community.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={community.image} alt={community.name} className="w-10 h-10 rounded-full" />
                <div>
                  <p className="text-sm font-medium">{community.name}</p>
                  <p className="text-xs text-gray-400">{community.members} members</p>
                </div>
              </div>
              <button className="bg-gray-700 text-white px-4 py-1 hover:opacity-80 rounded-lg text-sm">Visit</button>
            </div>
          )}
        />

        <SeeMoreList
          title="Trending"
          data={trendingTopics}
          renderItem={(topic) => <li key={topic?.id} className="text-gray-300 text-sm">{topic?.name}</li>}
        />
      </div>
    </InsureData>
  );
};

export default CommunitiesSection;