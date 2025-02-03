import { FC } from "react";
import { IconProps } from "~/types";

export const AddSquareIcon: FC<IconProps> = ({
    className,
    strokeWidth = 1.5,
}) => {
    return (
        <svg
            className={className}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10 6.24998L10 9.99996M10 9.99996V13.7499M10 9.99996H13.75M10 9.99996H6.25M17.5 5.31248L17.5 14.6875C17.5 16.2408 16.2408 17.5 14.6875 17.5H5.3125C3.7592 17.5 2.5 16.2408 2.5 14.6875V5.31248C2.5 3.75919 3.7592 2.5 5.3125 2.5H14.6875C16.2408 2.5 17.5 3.75919 17.5 5.31248Z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
            />
        </svg>
    );
};
