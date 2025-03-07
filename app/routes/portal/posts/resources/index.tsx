import { faker } from "@faker-js/faker";
import { json, LoaderFunctionArgs } from "@remix-run/node";
import { z } from "zod";
import { QueryOptions } from "~/types";
import { ApiRequest } from "~/utils/api-request";
import {
    FetchOptionsWithoutResource,
    useCachedFetcher,
} from "~/utils/cache/components";
import { generateURLSearchParams } from "~/utils/url-search-params";
import {
    ApiListSchema,
    EntityIdSchema,
    NoneEmptyStringSchema,
    PositiveNumberSchema,
} from "~/utils/zod-common";



const CommentsSchema =
    z.object({
        id: EntityIdSchema,
        text: NoneEmptyStringSchema("name"),
        timeAgo: NoneEmptyStringSchema("timeAgo"),
        user: z.object({
            id: EntityIdSchema,
            avatar: NoneEmptyStringSchema("avatar").url({ message: "avatar must be url" }),
            fullName: NoneEmptyStringSchema("fullName"),
            emailAddress: NoneEmptyStringSchema("emailAddress"),
        }),
        replies: z.array(
            z.object({
                id: EntityIdSchema,
                text: NoneEmptyStringSchema("name"),
                timeAgo: NoneEmptyStringSchema("timeAgo"),
                user: z.object({
                    id: EntityIdSchema,
                    avatar: NoneEmptyStringSchema("avatar").url({ message: "avatar must be url" }),
                    fullName: NoneEmptyStringSchema("fullName"),
                    emailAddress: NoneEmptyStringSchema("emailAddress"),
                }),
                replies: z.array(z.any()).optional(),
            })
        ).optional(),
    })

export type CommentsType = z.infer<typeof CommentsSchema>;    


const PostsSchema = z.object({
    id: EntityIdSchema,
    image: NoneEmptyStringSchema("image").url({ message: "image must be url" }),
    altText: NoneEmptyStringSchema("altText"),
    community: NoneEmptyStringSchema("community"),
    timeAgo: NoneEmptyStringSchema("timeAgo"),
    title: NoneEmptyStringSchema("title"),
    category: NoneEmptyStringSchema("category"),
    description: NoneEmptyStringSchema("description"),
    likes: z.array(PositiveNumberSchema("likes"), { message: "likes must be an array of numbers" }),
    comments: z.array(CommentsSchema, { message: "comments must be an array of comments" }),
});

export type PostsType = z.infer<typeof PostsSchema>;
export const PostListSchema = ApiListSchema(PostsSchema);

type PostListType = z.infer<typeof PostListSchema>;

// -------- validation schema ends here ---------------------

const timeAgoWords = [
    "Just now",
    "1m ago",
    "2m ago",
    "3m ago",
    "4m ago",
    "5m ago",
    "10m ago",
    "15m ago",
    "30m ago",
    "1h ago",
    "2h ago",
    "3h ago",
    "4h ago",
    "5h ago",
    "10h ago",
    "1d ago",
    "2d ago",
    "3d ago",
];


// Generate fake posts data with consistent and compelling content
const generateFakePostsData = () => [
    {
        id: 1,
        image: "https://example.com/image1.jpg",
        altText: "Robotics Evolution",
        community: "Udsm AI Community",
        timeAgo: "7h ago",
        title: "Evolution of Robotics. #Blog",
        category: "Blog",
        description: "An in-depth look at the evolution of robotics over the years.",
        likes: [5700],
        comments: [
            {
                id: 1,
                text: "Great article on robotics!",
                timeAgo: "2h ago",
                user: {
                    id: 1,
                    avatar: "https://example.com/avatar1.jpg",
                    fullName: "John Doe",
                    emailAddress: "john.doe@example.com",
                },
                replies: [
                    {
                        id: 1,
                        text: "I agree, very informative.",
                        timeAgo: "1h ago",
                        user: {
                            id: 2,
                            avatar: "https://example.com/avatar2.jpg",
                            fullName: "Jane Smith",
                            emailAddress: "jane.smith@example.com",
                        },
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        image: "https://example.com/image2.jpg",
        altText: "AI in Healthcare",
        community: "Udsm AI Community",
        timeAgo: "7h ago",
        title: "AI in Healthcare. #Blog",
        category: "Blog",
        description: "Exploring the impact of AI in the healthcare industry.",
        likes: [4500],
        comments: [
            {
                id: 2,
                text: "AI is revolutionizing healthcare!",
                timeAgo: "3h ago",
                user: {
                    id: 3,
                    avatar: "https://example.com/avatar3.jpg",
                    fullName: "Alice Johnson",
                    emailAddress: "alice.johnson@example.com",
                },
                replies: [
                    {
                        id: 2,
                        text: "Absolutely, it's amazing.",
                        timeAgo: "2h ago",
                        user: {
                            id: 4,
                            avatar: "https://example.com/avatar4.jpg",
                            fullName: "Bob Brown",
                            emailAddress: "bob.brown@example.com",
                        },
                    },
                ],
            },
        ],
    },
    // Add more posts as needed
];


export const loader = async ({ request }: LoaderFunctionArgs) => {
    const apiRequest = await ApiRequest.init(request);

    const postsData =
        await apiRequest.mockList<PostsType>(
            generateFakePostsData,
            PostListSchema
        );

    return json({ postsData });
};

type UseGetPostsProps = FetchOptionsWithoutResource & QueryOptions;

export const useGetPosts = (
    options?: UseGetPostsProps
) => {
    const { q, page, ...fetchOptions } = options ?? {};

    const pathname = "/portal/posts/resources";
    const urlSearchParams = generateURLSearchParams({ q, page });

    const { data, ...rest } = useCachedFetcher<typeof loader>({
        ...fetchOptions,
        resource: `${pathname}?${urlSearchParams}`,
    });


    return { data: data?.postsData, ...rest };
};
