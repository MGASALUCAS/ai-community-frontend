import { FC } from "react";
import { IconProps } from "~/types";

export const TextDocumentIcon: FC<IconProps> = ({
    className,
    strokeWidth = 1.5,
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className={className}
        >
            <path
                d="M12.5001 2V5C12.5001 5.55228 12.9478 6 13.5001 6H16.5001M7.00013 6H9.00013M7.00013 9H13.0001M7.00013 12H13.0001M15.0001 3.5C14.5551 3.10178 14.0932 2.62948 13.8017 2.32273C13.6077 2.11861 13.3396 2 13.058 2H5.49989C4.39533 2 3.4999 2.89542 3.49989 3.99999L3.49982 15.9999C3.49981 17.1045 4.39524 18 5.49981 18L14.4998 18C15.6044 18 16.4998 17.1046 16.4999 16L16.5001 5.39819C16.5001 5.14249 16.4026 4.8967 16.2251 4.71261C15.8969 4.3722 15.3489 3.8121 15.0001 3.5Z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
