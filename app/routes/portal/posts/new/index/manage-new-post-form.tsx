import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ComboboxDefaultTrigger } from "~/components/combobox/combobox-default-trigger";
import { HashIcon } from "~/components/icons";
import { FormField } from "~/utils/render-form-field";
import { NoneEmptyStringSchema, PositiveNumberSchema, SelectInputOptionSchema } from "~/utils/zod-common";
import { useGetTags } from "./resources";
import { EnumLabelValueMap } from "~/types";



// ------------------------ Validation Schema -----------------------------


const NewPostFormSchema = z.object({
  avatar: NoneEmptyStringSchema("Username").url({message: "Avatar must be a valid URL"}),
  postType: PositiveNumberSchema("postType"),
  tags: SelectInputOptionSchema,
  caption: NoneEmptyStringSchema("caption"),
  links: NoneEmptyStringSchema("links"),
  cc: NoneEmptyStringSchema("cc"),
});

export type NewPostFormType = z.infer<typeof NewPostFormSchema>

// ------------------------ End Validation Schema --------------------------


enum PostType {
    BLOG = 1,
    NEWSLETTER,
    TALKS_AND_PODCASTS
}

export const PostTypeMap: EnumLabelValueMap = {
    [PostType.BLOG]: {
        label: "Blog",
        badgeType: "primary",
        value: PostType.BLOG,
    },
    [PostType.NEWSLETTER]: {
        label: "Newsletter",
        badgeType: "warning",
        value: PostType.NEWSLETTER,
    },
    [PostType.TALKS_AND_PODCASTS]: {
        label: "Talks & Podcasts",
        badgeType: "success",
        value: PostType.TALKS_AND_PODCASTS,
    },
};


const useManageNewPostForm = () => {

    const { data: tags, isLoading: tagsLoading } = useGetTags();
    
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = useForm<NewPostFormType>({
        resolver: zodResolver(NewPostFormSchema),
    });

    console.log(["errors", errors]);

    const fields: FormField<NewPostFormType>[] = [
        {
            name: "avatar",
            label: "Avatar",
            inputType: "avatar-input",
            control,
            className: "bg-primary text-textColor",
            wrapperClassName: "bg-primary text-textColor",
            hasError: !!errors.avatar?.message,
        },
        {
            name: "postType",
            label: "Post Type",
            inputType: "select",
            register,
            placeholder: "Post type",
            options: Object.values(PostTypeMap),
            className: "cols-pan-2",
            wrapperClassName: "cols-pan-2",
            hasError: !!errors.postType?.message,
        },
        {
            name: "tags",
            label: "Tags",
            inputType: "combobox",
            multiple: true,
            triggerComponent: (
                <ComboboxDefaultTrigger
                    Icon={HashIcon}
                    label={"Tags"}
                    hasError={!!errors?.tags}
                />
            ),
            options: tags?.data?.map((tag) => ({ label: tag.name, value: tag.id })) ?? [],
            loading: tagsLoading,
            control,
            hasError: !!errors.tags,
        },
        {
            name: "caption",
            label: "Caption",
            inputType: "textarea",
            register,
            placeholder: "Write caption",
            className: "cols-pan-2",
            wrapperClassName: "cols-pan-2",
            hasError: !!errors.caption?.message,
        },
        {
            name: "links",
            label: "Links",
            inputType: "textInput",
            register,
            placeholder: "Paste links",
            className: "bg-primary text-textColor",
            wrapperClassName: "bg-primary text-textColor",
            hasError: !!errors.links?.message,
        },
        {
            name: "cc",
            label: "CC",
            inputType: "textInput",
            register,
            placeholder: "Enter CC",
            hasError: !!errors.cc?.message,
        },
    ];

    return { handleSubmit, fields };
};

export default useManageNewPostForm;
