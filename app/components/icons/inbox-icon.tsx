import { FC } from "react";
import { IconProps } from "~/types";

export const InboxIcon: FC<IconProps> = ({ className, strokeWidth = 1.5 }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={className}
        >
            <path
                d="M3 14.25H7.5L9 15.825H15L16.5 14.25H21M5.25 21C4.00736 21 3 19.9926 3 18.75V5.25C3 4.00736 4.00736 3 5.25 3H18.75C19.9926 3 21 4.00736 21 5.25V18.75C21 19.9926 19.9926 21 18.75 21H5.25Z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
