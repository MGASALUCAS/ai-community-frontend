import { FC } from "react";
import { IconProps } from "~/types";

export const ShareIcon: FC<IconProps> = ({ className, strokeWidth = 1.5 }) => {
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
                d="M17.5002 9.54918L9.50016 4.25L9.50016 7.25C2.5 8.75 2.5 15.75 2.5 15.75C2.5 15.75 5.5 11.75 9.50016 12.25L9.50016 15.35L17.5002 9.54918Z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinejoin="round"
            />
        </svg>
    );
};
