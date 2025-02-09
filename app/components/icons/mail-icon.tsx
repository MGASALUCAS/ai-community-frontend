import { FC } from "react";
import { IconProps } from "~/types";

export const MailIcon: FC<IconProps> = ({ className, strokeWidth = 1.5 }) => {
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
                d="M3.90625 5.62499L9.46637 9.61687C9.78741 9.84736 10.2126 9.84736 10.5336 9.61687L16.0938 5.62499M4.375 15.8333H15.625C16.6605 15.8333 17.5 14.9628 17.5 13.8889V6.1111C17.5 5.03721 16.6605 4.16666 15.625 4.16666H4.375C3.33947 4.16666 2.5 5.03721 2.5 6.1111V13.8889C2.5 14.9628 3.33947 15.8333 4.375 15.8333Z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
