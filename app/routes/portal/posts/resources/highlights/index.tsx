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
    IdNameSchema,
    NoneEmptyStringSchema,
    PositiveNumberSchema,
} from "~/utils/zod-common";



// -------- validation schema starts here ---------------------

const CommunitySchema = z.object({
    id: EntityIdSchema,
    name: NoneEmptyStringSchema("name"),
    members: PositiveNumberSchema("members"),
    image: NoneEmptyStringSchema("image").url({message: "image must be url"}),
});

const PostHighlightsSchema = z.object({
    communities: z.array(CommunitySchema),
    trendingTopics: z.array(IdNameSchema)
});

export type PostHighlightsType = z.infer<typeof PostHighlightsSchema>;
export const PostHighlightListSchema = ApiListSchema(PostHighlightsSchema);

export type PostHighlightListType = z.infer<typeof PostHighlightListSchema>;

// -------- validation schema ends here ---------------------



const generateFakePostHighlightsData = () => ({
    communities: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }).map(() => ({
        id: faker.number.int({ min: 1, max: 100 }),
        name: faker.helpers.arrayElement([
            "AI Community Kenya",
            "AI Community Nigeria",
            "AI Community South Africa",
            "AI Community Ghana",
            "AI Community Egypt",
            "AI Community Tanzania",
            "AI Community Uganda",
            "AI Community Rwanda",
            "AI Community Ethiopia",
            "AI Community Senegal",
            "AI Community Morocco",
            "AI Community Tunisia",
            "AI Community Algeria",
            "AI Community Zambia",
            "AI Community Zimbabwe",
            "AI Community Botswana",
            "AI Community Namibia",
            "AI Community Mozambique",
            "AI Community Malawi",
            "AI Community Angola"
        ]),
        members: faker.number.int({ min: 1, max: 1000 }),
        image: faker.image.url(),
    })),
    trendingTopics: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }).map(() => ({
        id: faker.number.int({ min: 1, max: 100 }),
        name: faker.helpers.arrayElement([
            "Quantum Intelligence",
            "Camel Labs",
            "Tausi",
            "Neurotech Africa",
            "Sarufi",
            "AI Lab TZ",
            "Dr Denis",
            "AI Community",
            "Deep Indaba",
            "Deep Learning Indaba",
            "Open AI",
            "Deep Mind",
            "Neuralink",
            "Deep Seek"
        ]),
    }))
});


export const loader = async ({ request }: LoaderFunctionArgs) => {
    const apiRequest = await ApiRequest.init(request);

    const postHighlights =
        await apiRequest.mockList<PostHighlightsType>(
            generateFakePostHighlightsData,
            PostHighlightListSchema
        );

    return json({ postHighlights });
};

type UseGetPosHighlightsProps = FetchOptionsWithoutResource & QueryOptions;

export const useGetPostHighlights = (
    options?: UseGetPosHighlightsProps
) => {
    const { q, page, ...fetchOptions } = options ?? {};

    const pathname = "/portal/posts/resources/highlights";
    const urlSearchParams = generateURLSearchParams({ q, page });

    const { data, ...rest } = useCachedFetcher<typeof loader>({
        ...fetchOptions,
        resource: `${pathname}?${urlSearchParams}`,
    });


    return { data: data?.postHighlights, ...rest };
};
