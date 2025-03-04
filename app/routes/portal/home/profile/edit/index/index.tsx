import { ActionFunctionArgs, LoaderFunctionArgs, redirect } from "@remix-run/node";
import { Fragment } from "react";
import GeneralErrorBoundary from "~/components/error-boundary";
import { useNavigationState } from "~/hooks/useNavigationState";
import useSubmitData from "~/hooks/useSubmitData";
import renderFormField from "~/utils/render-form-field";
import { requireToken, requireUserOrNull } from "~/utils/session.server";
import { ModalFormError } from "~/components/modal/modal-form-error";
import { Button } from "~/components/button";
import { getRequestFormData } from "~/utils/get-request-form-data.server";
import { post } from "~/utils/httpclient";
import { formError } from "~/utils/from-error";
import { redirectWithSuccess } from "remix-toast";
import useManageProfileBasicInfoForm, { ProfileBasicInfoFormType } from "./manage-profile-basic-info";
import { Controller } from "react-hook-form";
import { EditorSmall } from "~/components/tip-tap-editor";


export const action = async ({ request }: ActionFunctionArgs) => {
    const token = await requireToken(request);
    const formData = await getRequestFormData<ProfileBasicInfoFormType>(request);

    const [error] = await post("/auth/profile", formData, token);
    if (error) return formError(error);

    return redirectWithSuccess(
        `/portal/home`,
        "Profile Updated Successfully"
    );
};


export const loader = async ({ request }: LoaderFunctionArgs) => {
    const user = await requireUserOrNull(request);

    if (!user) return redirect("/portal/home");
    return null;
};


const ProfileBasicInfoForm = () => {
    const { handleSubmit, fields: formFields, control } = useManageProfileBasicInfoForm();

    const submit = useSubmitData();
    const { isBusy } = useNavigationState();

    const onSubmit = (formData: ProfileBasicInfoFormType) => {
        submit(formData);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={"space-y-7 w-full"}
        >
            <div className={"grid grid-cols-2 gap-4"}>
                {formFields.slice(0,3).map((field) => (
                    <Fragment key={field.name}>
                        {renderFormField(field)}
                    </Fragment>
                ))}
            </div>
            <div>
                {renderFormField(formFields[3])}
            </div>
            <div className="pt-0 w-full space-y-2">
                <p className="font-[300] text-sm text-gray-400">Achievements</p>
                <Controller
                    name="bio"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <EditorSmall
                            defaultContents={value}
                            onChange={onChange}
                            className="w-full text-textColor focus:border-secondary border-textColor h-[7rem]"
                        />
                    )}
                />
            </div>

            <ModalFormError />
            <div className="flex justify-between items-center">
                <div>
                    <Button
                        loading={isBusy}
                        outline
                        type="button"
                        onClick={() => window.history.back()}
                        className={
                            "w-full bg-textColor text-gray-900 rounded-lg py-1.5 text-sm md:text-base md:py-2.5 md:px-4"
                        }
                    >
                        Cancel
                    </Button>
                </div>
                <div>
                    <Button
                        loading={isBusy}
                        className={
                            "w-full bg-textColor text-gray-900 rounded-lg py-1.5 text-sm md:text-base md:py-2.5 md:px-4"
                        }
                    >
                        Submit
                    </Button>
                </div>

            </div>
        </form>
    );
};
export default ProfileBasicInfoForm;

export const ErrorBoundary = () => {
    return (
        <>
            <GeneralErrorBoundary />
        </>
    );
};
