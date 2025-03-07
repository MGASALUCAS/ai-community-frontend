import { faker } from "@faker-js/faker/locale/en";
import { json, LoaderFunctionArgs } from "@remix-run/node";
import { z } from "zod";
import { useGetAbsolutePath } from "~/hooks/useGetAbsolutePath";
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

// --------------  validation schema --------------

const TagsSchema = z.object({
    id: EntityIdSchema,
    name: NoneEmptyStringSchema("name"),
});

export type TagsType = z.infer<typeof TagsSchema>;

const TagsListSchema = ApiListSchema(TagsSchema);
export type TagsListType = z.infer<
    typeof TagsListSchema
>;

// ------------ end validation schema -------------

export const tagsGenerator = (index: number) => ({
    id: index + 1,
    name: faker.book.genre(),
});

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const apiRequest = await ApiRequest.init(request);

    // const queryOptions = parseSearchParams<QueryOptions>(request.url);
    const tags = await apiRequest.mockList<TagsType>(
        tagsGenerator,
        TagsListSchema
    );

    return json({ tags });
};

type UseGetTagsProps = FetchOptionsWithoutResource & QueryOptions;

export const useGetTags = (
    options?: UseGetTagsProps
) => {
    const { q, page, ...fetchOptions } = options ?? {};
    const pathname = useGetAbsolutePath("resources");

    const urlSearchParams = generateURLSearchParams({ q, page });
    const { data, ...rest } = useCachedFetcher<typeof loader>({
        ...fetchOptions,
        resource: `${pathname}?${urlSearchParams}`,
    });

    console.log(["data", data]);
    

    return { data: data?.tags, ...rest };
};
