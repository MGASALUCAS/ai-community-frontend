import { az, faker } from "@faker-js/faker";
import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useParams } from "@remix-run/react";
import { z } from "zod";
import { Avatar } from "~/components/avatar";
import { useGetAbsolutePath } from "~/hooks/useGetAbsolutePath";
import { QueryOptions } from "~/types";
import { ApiRequest } from "~/utils/api-request";
import {
    FetchOptionsWithoutResource,
    useCachedFetcher,
} from "~/utils/cache/components";
import { generateURLSearchParams } from "~/utils/url-search-params";
import {
    EntityIdSchema,
    IdNameSchema,
    NoneEmptyStringSchema,
    OptionalEmailSchema,
    PhoneNumberSchema,
} from "~/utils/zod-common";


export const ProfileDetailsFormSchema = z.object({
    data: z.object({
        name: NoneEmptyStringSchema("name"),
        email: OptionalEmailSchema,
        phone: PhoneNumberSchema,
        bio: NoneEmptyStringSchema("bio"),
        profileImage: NoneEmptyStringSchema("profileImage").url({
            message: "profileImage must be a url",
        }),
        tabContent: z.object({
            Education: NoneEmptyStringSchema("Education"),
            Achievements: NoneEmptyStringSchema("Achievements"),
            Saves: NoneEmptyStringSchema("Saves"),
        }),
    }),
});

export type ProfileDetailsFormType = z.infer<typeof ProfileDetailsFormSchema>;

export const ProfileDetailsSchema = z.object({
        id: EntityIdSchema,
        name: NoneEmptyStringSchema("name"),
        email: OptionalEmailSchema,
        phone: NoneEmptyStringSchema("phoneNumber"),
        bio: NoneEmptyStringSchema("bio"),
        profileImage: NoneEmptyStringSchema("profileImage").url({
            message: "profileImage must be a url",
        }),
        sectors: z.array(IdNameSchema),
        technologies: z.array(IdNameSchema),
        avatar: NoneEmptyStringSchema("avatar").url({
            message: "avatar must be a url",
        }),
        tabContent: z.object({
            Education: NoneEmptyStringSchema("Education"),
            Achievements: NoneEmptyStringSchema("Achievements"),
            Saves: NoneEmptyStringSchema("Saves"),
        }),
});

export const generateProfileDetails = (): ProfileDetailsType => ({
    id: 1,
    name: "Mgasa Lucas",
    email: "mgasa@quantumintelligence.co.tz",
    phone: "123-456-7890",
    bio: "AI research with interest in Machine Learning, computer vision and robotics",
    profileImage: "https://example.com/profile-image.jpg",
    sectors: [
        { id: 1, name: "Computer Vision" },
        { id: 2, name: "Robotics" },
    ],
    technologies: [
        { id: 1, name: "Vision Language Models" },
        { id: 2, name: "Augmented Robotics" },
        { id: 3, name: "Hardware and Software" },
    ],
    avatar: "https://example.com/avatar.jpg",
    tabContent: {
        Education: "Bachelor in Computer Engineering, Certification: Applied Data Science World Quant University",
        Achievements: "Young Scientist, ICT Nation Innovator of the Year, Best Student Undergraduate Research, National Innovator for Secondary Student",
        Saves: "Application of Large Language Models in Computer Vision",
    },
});

export type ProfileDetailsType = z.infer<typeof ProfileDetailsSchema>;

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
    const apiRequest = await ApiRequest.init(request);

    const ProfileDetails = await apiRequest.mockDetails<ProfileDetailsType>(
        generateProfileDetails(),
        ProfileDetailsSchema
    );
    return json(ProfileDetails);
};

type UseGetProfileDetailsProps = FetchOptionsWithoutResource & QueryOptions;

export const useGetProfileDetails = (options?: UseGetProfileDetailsProps) => {
    const { profileId } = useParams();
    const { q, page, ...fetchOptions } = options ?? {};

    const pathname = `/portal/home/profile/resources`;
    const urlSearchParams = generateURLSearchParams({ q, page });

    const { data, ...rest } = useCachedFetcher<typeof loader>({
        ...fetchOptions,
        resource: `${pathname}?${urlSearchParams}`,
    });

    
    return { data, ...rest };
};
