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




const PostsSchema = z.object({
    id: EntityIdSchema,
    image: NoneEmptyStringSchema("image").url({message: "image must be url"}),
    community: NoneEmptyStringSchema("community"),
    timeAgo: NoneEmptyStringSchema("timeAgo"),
    title: NoneEmptyStringSchema("title"),
    category: NoneEmptyStringSchema("category"),
    description: NoneEmptyStringSchema("description"),
    likes: z.array(PositiveNumberSchema("likes"), {message: "likes must be an array of numbers"}),
    comments: z.array(
        z.object({
            id: EntityIdSchema,
            text: NoneEmptyStringSchema("name"),
            user: z.object({
                id: EntityIdSchema,
                avatar: NoneEmptyStringSchema("avatar").url({message: "avatar must be url"}),
                fullName: NoneEmptyStringSchema("fullName"),
                emailAddress: NoneEmptyStringSchema("emailAddress"),
            }),
            replies: z.array(
                z.object({
                    id: EntityIdSchema,
                    text: NoneEmptyStringSchema("name"),
                    user: z.object({
                        id: EntityIdSchema,
                        avatar: NoneEmptyStringSchema("avatar").url({message: "avatar must be url"}),
                        fullName: NoneEmptyStringSchema("fullName"),
                        emailAddress: NoneEmptyStringSchema("emailAddress"),
                    })
                })
            )
        })
    )
});

export type PostsType = z.infer<typeof PostsSchema>;
export const PostListSchema = ApiListSchema(PostsSchema);

type PostListType = z.infer<typeof PostListSchema>;

// -------- validation schema ends here ---------------------



const generateFakePostsData = () => ({
    id: faker.number.int({ min: 1, max: 100 }),
    image: faker.image.url(),
    community: faker.lorem.words(2),
    timeAgo: faker.date.recent().toISOString(),
    title: faker.lorem.sentence(3),
    category: faker.lorem.words(1),
    description: faker.lorem.paragraph(),
    likes: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map(() => faker.number.int({ min: 1, max: 100 })),
    comments: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }).map(() => ({
        id: faker.number.int({ min: 1, max: 100 }),
        text: faker.lorem.sentence(5),
        user: {
            id: faker.number.int({ min: 1, max: 100 }),
            avatar: faker.image.url(),
            fullName: faker.name.fullName(),
            emailAddress: faker.internet.email(),
        },
        replies: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }).map(() => ({
            id: faker.number.int({ min: 1, max: 100 }),
            text: faker.lorem.sentence(5),
            user: {
                id: faker.number.int({ min: 1, max: 100 }),
                avatar: faker.image.url(),
                fullName: faker.name.fullName(),
                emailAddress: faker.internet.email(),
            },
        })),
    })),
});


export const loader = async ({ request }: LoaderFunctionArgs) => {
    const apiRequest = await ApiRequest.init(request);

    const postsDate =
        await apiRequest.mockList<PostsType>(
            generateFakePostsData,
            PostListSchema
        );

    return json({ postsDate });
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


    return { data: data?.postsDate, ...rest };
};
