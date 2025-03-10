import { redirectWithSuccess } from "remix-toast";
import { ZodSchema } from "zod";
import { QueryOptions } from "~/types";
import { validateApiResponse } from "~/utils/data-validator.server";
import { fakeNetwork } from "~/utils/fake-nerwork";
import { formError } from "~/utils/from-error";
import { getRequestFormData } from "~/utils/get-request-form-data.server";
import { get, patch, post, put, remove } from "~/utils/httpclient";
import { GenerateMockData, GeneratorFunc, mockApiData } from "~/utils/mock";
import { throwError } from "~/utils/request.server";
import { requireToken } from "~/utils/session.server";
import {
    generateURLSearchParams,
    ParsedSearchParams,
    parseSearchParams,
} from "~/utils/url-search-params";

type UrlSearchParams = Record<string, string | number>;

export enum TokenRequirement {
    REQUIRED = 1,
    NOT_REQUIRED = 0,
}

interface PostOptions<TData = unknown> {
    transformerFunc?: (formData: TData) => object;
    successMessage?: string;
    onSuccessRedirect?: string;
    responseValidationSchema?: ZodSchema;
}

export class ApiRequest {
    #token?: string;
    #request: Request;
    #requireAuthToken = TokenRequirement.REQUIRED;

    private constructor(
        request: Request,
        requireToken = TokenRequirement.REQUIRED
    ) {
        this.#request = request;
        this.#requireAuthToken = requireToken;
    }

    /**
     * Initializes the ApiRequest instance.
     *
     * @param {Request} request - The request object representing the HTTP request made.
     * @param requireToken
     * @returns {Promise<ApiRequest>} - An instance of ApiRequest with the token stored.
     */
    static async init(
        request: Request,
        requireToken = TokenRequirement.REQUIRED
    ): Promise<ApiRequest> {
        const apiRequest = new ApiRequest(request, requireToken);
        await apiRequest.#insureTokenStored();
        return apiRequest;
    }

    /**
     * Makes a GET request with the provided URL and validation schema.
     *
     * @template TData - The type of the data expected in the response.
     * @param {string} url - The endpoint URL.
     * @param {ZodSchema} validationSchema - The schema used to validate the response data.
     * @param {UrlSearchParams} [urlSearchParams] - Optional URL search parameters.
     * @returns {Promise<TData>} - The data returned from the endpoint, validated against the schema.
     */
    async get<TData>(
        url: string,
        validationSchema: ZodSchema,
        urlSearchParams?: ParsedSearchParams
    ): Promise<TData> {
        const params = generateURLSearchParams({
            ...urlSearchParams,
        });

        return this.#makeGetRequest<TData>(url, validationSchema, params);
    }

    async post<TData extends object, TResponse = unknown>(
        url: string,
        options?: PostOptions<TData>
    ) {
        return this.#makePostOrPutRequest<TData, TResponse>(
            "post",
            url,
            options ?? {}
        );
    }

    async put<TData extends object>(url: string, options: PostOptions<TData>) {
        return this.#makePostOrPutRequest("put", url, options);
    }

    async patch<TData extends object>(
        url: string,
        options: PostOptions<TData>
    ) {
        return this.#makePostOrPutRequest("patch", url, options);
    }

    /**
     * Makes a paginated GET request with the provided URL and validation schema.
     *
     * @template TData - The type of the data expected in the response.
     * @param {string} url - The endpoint URL.
     * @param {ZodSchema} validationSchema - The schema used to validate the response data.
     * @param {UrlSearchParams} [urlSearchParams] - Optional URL search parameters.
     * @returns {Promise<TData>} - The data returned from the endpoint, validated against the schema.
     */
    async getPaginated<TData>(
        url: string,
        validationSchema: ZodSchema,
        urlSearchParams?: UrlSearchParams
    ): Promise<TData> {
        const queryOptions = parseSearchParams<QueryOptions>(this.#request.url);

        const params = generateURLSearchParams({
            ...queryOptions,
            ...urlSearchParams,
        });

        return this.#makeGetRequest<TData>(url, validationSchema, params);
    }

    async remove(
        url: string,
        options: Required<
            Omit<PostOptions, "transformerFunc" | "responseValidationSchema">
        >
    ) {
        const { onSuccessRedirect, successMessage } = options;
        const [error] = await remove(url, this.#token);

        if (error) return formError(error);

        return redirectWithSuccess(onSuccessRedirect, successMessage);
    }

    /**
     * Generates a list of mock data and validates it against a given schema.
     *
     * @template TData - The type of the data in the mock list.
     * @template MockData - The type of the data generated by the generator function.
     * @param {GeneratorFunc<MockData>} generator - The generator function to create mock data entries.
     * @param {ZodSchema} validationSchema - The schema used to validate the mock data.
     * @returns {Promise<GenerateMockData<TData>>} - A promise that resolves to the generated and validated mock data.
     */
    async mockList<TData, MockData = unknown>(
        generator: GeneratorFunc<MockData>,
        validationSchema: ZodSchema
    ): Promise<GenerateMockData<TData>> {
        await fakeNetwork(1000);
        const mockedData = mockApiData<MockData>(generator);

        return validateApiResponse<GenerateMockData<TData>>(
            mockedData,
            validationSchema
        );
    }

    /**
     * Validates mock data against a given schema.
     *
     * @template TData - The type of the data to be validated.
     * @param {TData} data - The mock data to be validated.
     * @param {ZodSchema} validationSchema - The schema used to validate the mock data.
     * @returns {Promise<TData>} - A promise that resolves to the validated mock data.
     */
    async mockDetails<TData = unknown>(
        data: TData,
        validationSchema: ZodSchema
    ): Promise<TData> {
        await fakeNetwork(1000);
        return validateApiResponse<TData>(data, validationSchema);
    }

    async #makePostOrPutRequest<TData extends object, TResponse>(
        method: "post" | "put" | "patch",
        url: string,
        options: PostOptions<TData>
    ): Promise<TResponse> {
        const {
            transformerFunc,
            successMessage,
            onSuccessRedirect,
            responseValidationSchema,
        } = options;

        const formData = await getRequestFormData<TData>(this.#request);
        const transformedFormData = transformerFunc
            ? transformerFunc(formData)
            : formData;

        const [error, response] =
            method === "post"
                ? await post(url, transformedFormData, this.#token)
                : method === "patch"
                  ? await patch(url, transformedFormData, this.#token)
                  : await put(url, transformedFormData, this.#token);

        if (error) return (await formError(error)) as TResponse;

        if (onSuccessRedirect && successMessage) {
            return (await redirectWithSuccess(
                onSuccessRedirect,
                successMessage
            )) as TResponse;
        }

        if (responseValidationSchema) {
            return validateApiResponse<TResponse>(
                response,
                responseValidationSchema
            ) as TResponse;
        }

        return response as TResponse;
    }

    /**
     * Ensures that the token is stored.
     *
     * @private
     * @returns {Promise<void>}
     */
    async #insureTokenStored(): Promise<void> {
        if (this.#requireAuthToken) {
            this.#token = await requireToken(this.#request);
        }
    }

    /**
     * Makes an HTTP request with the provided URL and validation schema.
     *
     * @template TData - The type of the data expected in the response.
     * @private
     * @param {string} url - The endpoint URL.
     * @param {ZodSchema} validationSchema - The schema used to validate the response data.
     * @param {string} [urlSearchParams] - Optional URL search parameters.
     * @returns {Promise<TData>} - The data returned from the endpoint, validated against the schema.
     */
    async #makeGetRequest<TData>(
        url: string,
        validationSchema: ZodSchema,
        urlSearchParams?: string
    ): Promise<TData> {
        const [error, data] = await get(
            `${url}?${urlSearchParams}`,
            this.#token
        );
        if (error) throwError(error);

        return validateApiResponse<TData>(data, validationSchema);
    }
}
