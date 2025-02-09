import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormField } from "~/utils/render-form-field";
import { NoneEmptyStringSchema, OptionalEmailSchema, PositiveNumberSchema } from "~/utils/zod-common";



// ------------------------ Validation Schema -----------------------------

export const ContactFormSchema = z.object({
    firstname: NoneEmptyStringSchema("firstname"),
    lastname: NoneEmptyStringSchema("lastname"),
    email: OptionalEmailSchema,
    subject: NoneEmptyStringSchema("subject"),
    message: NoneEmptyStringSchema("message")
})
export type ContactFormType = z.infer<typeof ContactFormSchema>

// ------------------------ End Validation Schema --------------------------


const useManageContactForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<ContactFormType>({
        resolver: zodResolver(ContactFormSchema),
    });

    const fields: FormField<ContactFormType>[] = [
        {
            name: "firstname",
            label: "Firstname",
            inputType: "textInput",
            register,
            placeholder: "Enter your firstname",
            className: "cols-pan-2",
            wrapperClassName: "cols-pan-2",
            hasError: !!errors.firstname?.message,
        },
        {
            name: "lastname",
            label: "Lastname",
            inputType: "textInput",
            register,
            placeholder: "Enter your lastname",
            className: "cols-pan-2",
            wrapperClassName: "cols-pan-2",
            hasError: !!errors.lastname?.message,
        },
        {
            name: "email",
            label: "Email",
            inputType: "textInput",
            type: "password",
            register,
            options: [],
            placeholder: "Enter your Email",
            className: "cols-pan-2 text-textColor",
            wrapperClassName: "cols-pan-2 text-textColor",
            hasError: !!errors.email?.message,
        },
        {
            name: "subject",
            label: "Subject",
            inputType: "textInput",
            register,
            placeholder: "Enter your password",
            className: "cols-pan-2",
            wrapperClassName: "cols-pan-2",
            hasError: !!errors.subject?.message,
        },
        {
            name: "message",
            label: "Message",
            inputType: "textInput",
            register,
            placeholder: "Enter your message",
            className: "cols-pan-2",
            wrapperClassName: "cols-pan-2",
            hasError: !!errors.message?.message,
        },
    ];

    return { handleSubmit, fields };
};

export default useManageContactForm;
