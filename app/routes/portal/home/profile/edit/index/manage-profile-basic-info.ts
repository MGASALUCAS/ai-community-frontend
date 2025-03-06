import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import useLocationState from "~/hooks/useLocationState";
import { FormField } from "~/utils/render-form-field";
import { NoneEmptyStringSchema, OptionalEmailSchema, PhoneNumberSchema } from "~/utils/zod-common";
import { ProfileDetailsType } from "../../resources";



// --------------------------- Validation Schema ----------------------------

const ProfileBasicInfoFormSchema = z.object({
    fullName: NoneEmptyStringSchema("fullName"),
    email: OptionalEmailSchema,
    phoneNumber: PhoneNumberSchema,
    bio: NoneEmptyStringSchema("bio"),
    avatar: NoneEmptyStringSchema("avatar").url({
        message: "avatar must be a url",
    })
});


export type ProfileBasicInfoFormType = z.infer<typeof ProfileBasicInfoFormSchema>;

// --------------------------- End Validation Schema ------------------------


const useManageProfileBasicInfoForm = () => {

    const defaultValues =  useLocationState<ProfileDetailsType>()

    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = useForm<ProfileBasicInfoFormType>({
        resolver: zodResolver(ProfileBasicInfoFormSchema),
        defaultValues: {
            fullName: defaultValues?.name,
            email: defaultValues?.email,
            phoneNumber: defaultValues?.phone,
            bio: defaultValues?.bio,
            avatar: defaultValues?.avatar
        }
    });

    const fields: FormField<ProfileBasicInfoFormType>[] = [
        {
            name: "fullName",
            label: "Full Name",
            inputType: "textInput",
            register,
            placeholder: "Enter your full name",
            className: "bg-primary text-textColor",
            wrapperClassName: "bg-primary text-textColor",
            defaultValue: defaultValues?.name,
            hasError: !!errors.fullName?.message,
        },
        {
            name: "email",
            label: "Email",
            inputType: "textInput",
            register,
            placeholder: "Enter your email",
            className: "bg-primary text-textColor",
            wrapperClassName: "bg-primary text-textColor",
            defaultValue: defaultValues?.email,
            hasError: !!errors.email?.message,
        },
        {
            name: "phoneNumber",
            label: "Phone Number",
            inputType: "textInput",
            register,
            placeholder: "Enter your phone number",
            className: "bg-primary text-textColor",
            wrapperClassName: "bg-primary text-textColor",
            defaultValue: defaultValues?.phone,
            hasError: !!errors.phoneNumber?.message,
        },
        {
            name: "avatar",
            label: "Avatar",
            inputType: "avatar-input",
            control,
            className: "bg-primary text-textColor",
            wrapperClassName: "bg-primary text-textColor",
            innerWrapperClassName: "h-[6rem]",
            defaultValue: defaultValues?.avatar,
            hasError: !!errors.avatar?.message,
        }
    ];

    return { handleSubmit, fields, control };
};

export default useManageProfileBasicInfoForm;
