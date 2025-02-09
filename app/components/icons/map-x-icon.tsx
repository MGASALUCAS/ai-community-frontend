import { FC } from "react";
import { IconProps } from "~/types";

export const MapXIcon: FC<IconProps> = ({ className, strokeWidth = 1.5 }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className={className}
        >
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={strokeWidth}
                d="M8.32 4.34L9 4l6 3l6-3v13m-2.67 1.335L15 20l-6-3l-6 3V7l2.665-1.333M9 4v1m0 4v8m6-10v4m0 4v5M3 3l18 18"
            ></path>
        </svg>
    );
};
