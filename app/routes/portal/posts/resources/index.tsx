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


const generateFakePostsData = () => ({
    id: faker.number.int({ min: 1, max: 100 }),
    image: faker.image.url(),
    altText: faker.lorem.words(2),
    community: faker.lorem.words(2),
    timeAgo: timeAgoWords[faker.number.int({ min: 0, max: timeAgoWords.length - 1 })],
    title: faker.lorem.sentence(3),
    category: faker.lorem.words(1),
    description: faker.lorem.paragraph(),
    likes: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map(() => faker.number.int({ min: 1, max: 100 })),
    comments: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map(() => ({
        id: faker.number.int({ min: 1, max: 100 }),
        text: faker.lorem.sentence(5),
        timeAgo: timeAgoWords[faker.number.int({ min: 0, max: timeAgoWords.length - 1 })],
        user: {
            id: faker.number.int({ min: 1, max: 100 }),
            avatar: faker.image.url(),
            fullName: faker.person.fullName(),
            emailAddress: faker.internet.email(),
        },
        replies: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }).map(() => ({
            id: faker.number.int({ min: 1, max: 100 }),
            text: faker.lorem.sentence(5),
            timeAgo: timeAgoWords[faker.number.int({ min: 0, max: timeAgoWords.length - 1 })],
            user: {
                id: faker.number.int({ min: 1, max: 100 }),
                avatar: faker.image.url(),
                fullName: faker.person.fullName(),
                emailAddress: faker.internet.email(),
            },
        })),
    })),
});


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
