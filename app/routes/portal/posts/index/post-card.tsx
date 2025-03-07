import { FC, useState } from "react";
import { FiMessageCircle, FiHeart, FiShare2, FiSave, FiMoreHorizontal } from "react-icons/fi";
import { PostsType } from "../resources";

interface PostCardProps {
  postData: PostsType;
  isExpanded: boolean;
  onExpand: () => void;
}

const PostCard: FC<PostCardProps> = ({ postData, isExpanded, onExpand }) => {
  return (
    <div className="bg-cardBackground p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={postData.media} alt={postData.name} className="w-12 h-12 rounded-full" />
          <div className="ml-4">
            <h2 className="text-lg font-bold">{postData.author}</h2>
            <p className="text-sm text-gray-500">{postData.created_at}</p>
          </div>
        </div>
        <button onClick={onExpand} className="text-primary">
          {isExpanded ? "Collapse" : "Expand"}
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold">{postData.name}</h3>
        <p className="text-sm">{postData.caption}</p>
        <img src={postData.media} alt={postData.name} className="w-full mt-4 rounded-lg" />
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-4">
            <FiHeart className="text-xl" />
            <span>{postData.likes}</span>
            <FiMessageCircle className="text-xl" />
            <span>{postData.comments}</span>
          </div>
          <div className="flex items-center space-x-4">
            <FiSave className="text-xl" />
            <FiShare2 className="text-xl" />
            <FiMoreHorizontal className="text-xl" />
          </div>
        </div>
      </div>
      {isExpanded && (
        <div className="mt-4">
          <div className="border-t border-gray-200 pt-4">
            <h4 className="text-lg font-bold">Comments</h4>
            <div className="max-h-60 overflow-y-auto">
              {postData.commentsData.map((comment) => (
                <div key={comment.id} className="flex items-start mt-4">
                  <img src="path/to/user/avatar.jpg" alt={comment.author} className="w-8 h-8 rounded-full" />
                  <div className="ml-2">
                    <p className="text-sm font-bold">{comment.author}</p>
                    <p className="text-sm">{comment.text}</p>
                    <p className="text-xs text-gray-500">{comment.created_at}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;

