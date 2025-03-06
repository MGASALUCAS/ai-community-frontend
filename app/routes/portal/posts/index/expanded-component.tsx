import { useState } from 'react';
import { FiMessageCircle } from 'react-icons/fi';
import { AvatarCard } from '~/components/avatar';
import LikeButton from '~/components/like-button';
import { generateAvatar } from '~/utils/generate-avatar';
import { CommentsType, PostsType } from '~/routes/portal/posts/resources';
import useSubmitData from '~/hooks/useSubmitData';
import { useAppContext } from '~/providers/app-provider';

interface Comment {
    text: string;
    replies: CommentsType;
}

interface ExpandedComponentProps {
    onExpand: () => void;
    postData: PostsType;
}

const ExpandedComponent = ({ onExpand, postData }: ExpandedComponentProps) => {
    const [comments, setComments] = useState<CommentsType[]>(postData.comments);
    const [newComment, setNewComment] = useState('');
    const [replyText, setReplyText] = useState<{ [key: number]: string }>({});
    const [showReplyInput, setShowReplyInput] = useState<{ [key: number]: boolean }>({});
    const { authUser } = useAppContext();
    const submit = useSubmitData();

    const [descriptionTextLength, setDescriptionTextLength] = useState(100);
    const isExpanded = descriptionTextLength >= (postData.description.length || 100);

    const handleAddComment = () => {
        if (newComment.trim()) {
            const newCommentData = {
                id: Math.floor(Math.random() * 1000),
                text: newComment,
                timeAgo: 'Just now',
                user: {
                    id: Number(authUser?.id),
                    avatar: '',
                    fullName: '',
                    emailAddress: '',
                },
                replies: [],
            };
            setComments([...comments, newCommentData]);
        //     submit({
        //         newCommentData,
        //         postId: postData.id,
        //     },
        //     {
        //         method: "POST",
        //         action: `/portal/posts/${postData.id}/comment`,
        //     }
        // );
            setNewComment('');
        }
    };

    const handleAddReply = (index: number) => {
        if (replyText[index]?.trim()) {
            const newReplyData = {
                id: Math.floor(Math.random() * 1000),
                text: replyText[index],
                timeAgo: 'Just now',
                user: {
                    id: Number(authUser?.id),
                    avatar: '',
                    fullName: '',
                    emailAddress: '',
                },
                replies: [],
            };
            const updatedComments = [...comments];
            updatedComments?.[index]?.replies?.push(newReplyData);
            setComments(updatedComments);
        //     submit({
        //         newReplyData,
        //         postId: postData?.id,
        //         commentId: comments?.[index]?.id
        //     },
        //     {
        //         method: "POST",
        //         action: `/portal/posts/${postData.id}/comment`,
        //     }
        // );
            setReplyText({ ...replyText, [index]: '' });
            setShowReplyInput({ ...showReplyInput, [index]: false });
        }
    };

    return (
        <div className="grid grid-cols-2 gap-4 relative">
            <div className="bg-transparent pl-2 border-r border-1 border-gray-700 flex flex-col p-4">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold">
                        {postData?.community} · <span className="text-gray-400">{postData?.timeAgo}</span>
                    </p>
                    <button
                        onClick={onExpand}
                        className="bg-gray-700 p-1 hover:bg-gray-600 rounded-full"
                    >
                        <img
                            src="/icons/pepicons-pencil_expand.svg"
                            alt="Expand"
                            className="w-5 h-5 rounded-md"
                        />
                    </button>
                </div>
                <div>
                    <p>{postData.title}</p>
                    <img
                        src={postData.image}
                        alt="Expand"
                        className="w-40 h-40 rounded-md"
                    />
                </div>
                <div>
                    <p>
                        {postData.description.slice(0, descriptionTextLength)}
                        {!isExpanded && <span className="text-gray-400">...</span>}
                        {postData.description.length > 100 && (
                            <>
                                {!isExpanded ? (
                                    <button
                                        className="text-blue-400 text-sm hover:opacity-80 ml-1"
                                        onClick={() => setDescriptionTextLength(postData.description.length)}
                                    >
                                        Show more
                                    </button>
                                ) : (
                                    <button
                                        className="text-blue-400 text-sm hover:opacity-80 ml-1"
                                        onClick={() => setDescriptionTextLength(100)}
                                    >
                                        Show less
                                    </button>
                                )}
                            </>
                        )}
                    </p>
                </div>
                <div className="flex items-center justify-between space-x-4 mt-2 text-gray-400">
                    <div className="flex items-center space-x-1 hover:opacity-80">
                        <LikeButton />
                        <FiMessageCircle />
                        <span>{postData.comments.length}</span>
                    </div>
                </div>
            </div>

            <div className="mb-12">
                <h1 className="mb-2">Comments ({comments.length})</h1>
                <div className="bg-transparent p-4 rounded-lg h-[calc(100vh-32rem)] overflow-y-auto">
                    {comments.map((comment, index) => (
                        <div key={index} className="flex flex-col mb-3">
                            <AvatarCard
                                subtitle={`${comment.user.fullName} · ${comment.timeAgo}`}
                                title={comment.text}
                                imageUrl={generateAvatar(`user${index}`)}
                                titleClassName="text-sm font-normal"
                            />
                            <span
                                className="text-xs text-blue-500 pl-[15%] cursor-pointer hover:opacity-80"
                                onClick={() => setShowReplyInput({ ...showReplyInput, [index]: !showReplyInput[index] })}
                            >
                                Reply
                            </span>

                            {showReplyInput[index] && (
                                <div className="flex items-center mt-2 pl-[15%]">
                                    <input
                                        type="text"
                                        placeholder="Write a reply..."
                                        className="bg-transparent text-xs text-gray-400 border border-gray-400 p-1 rounded-full w-full"
                                        value={replyText[index] || ''}
                                        onChange={(e) => setReplyText({ ...replyText, [index]: e.target.value })}
                                        onKeyDown={(e) => e.key === 'Enter' && handleAddReply(index)}
                                    />
                                    <button onClick={() => handleAddReply(index)} className="p-1 hover:opacity-80 rounded-full">
                                        <img src="/icons/share-icon-white.svg" alt="Send" className="w-6 h-6" />
                                    </button>
                                </div>
                            )}

                            <div className="pl-[15%] mt-2">
                                {comment?.replies?.map((reply, replyIndex) => (
                                    <AvatarCard
                                        key={replyIndex}
                                        subtitle={`${reply.user.fullName} · ${reply.timeAgo}`}
                                        title={reply.text}
                                        imageUrl={generateAvatar(`reply${replyIndex}`)}
                                        titleClassName="text-sm font-normal"
                                        className="my-1"
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="absolute -bottom-2 bg-transparent p-[10px] w-[52%] -right-2 border-t border-gray-700">
                    <div className="flex items-center justify-between gap-2">
                        <img src={generateAvatar('user')} alt="User" className="w-8 h-8 rounded-full" />
                        <input
                            type="text"
                            placeholder="Write a comment..."
                            className="bg-transparent text-xs text-gray-400 border border-gray-400 p-1 rounded-full w-full"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleAddComment()}
                        />
                        <button onClick={handleAddComment} className="p-1 hover:opacity-80 rounded-full">
                            <img src="/icons/share-icon-white.svg" alt="Send" className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpandedComponent;

