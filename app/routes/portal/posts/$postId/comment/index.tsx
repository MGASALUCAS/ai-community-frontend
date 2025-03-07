import { ActionFunctionArgs } from "@remix-run/node";
import { redirectWithSuccess } from "remix-toast";
import { formError } from "~/utils/from-error";
import { post } from "~/utils/httpclient";

export const action = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();

    const [error] = await post('/profile/signup/', formData);
    if (error) return formError(error);

    return redirectWithSuccess(
        '/portal/posts',
        'Successfully Commented'
    );
};
