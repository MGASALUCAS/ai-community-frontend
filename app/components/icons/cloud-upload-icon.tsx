import { FC } from "react";
import { IconProps } from "~/types";

export const CloudUploadIcon: FC<IconProps> = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            className={className}
        >
            <path
                d="M7.1665 13.3333L10.4998 10M10.4998 10L13.8332 13.3333M10.4998 10V17.5M17.1665 13.9524C18.1844 13.1117 18.8332 11.8399 18.8332 10.4167C18.8332 7.88536 16.7811 5.83333 14.2498 5.83333C14.0677 5.83333 13.8974 5.73833 13.8049 5.58145C12.7182 3.73736 10.7119 2.5 8.4165 2.5C4.96472 2.5 2.1665 5.29822 2.1665 8.75C2.1665 10.4718 2.86271 12.0309 3.98896 13.1613"
                stroke="#806C6C"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
