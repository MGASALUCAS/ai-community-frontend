import { FC } from "react";
import { IconProps } from "~/types";

export const PostsIcon: FC<IconProps> = ({ className, strokeWidth = 1.5 }) => {
    return (
        <svg 
            className={className} 
            width="20" height="12" 
            viewBox="0 0 20 12" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth={strokeWidth}
            >
            <path d="M14 0L16.29 2.29L11.41 7.17L7.41 3.17L0 10.59L1.41 12L7.41 6L11.41 10L17.71 3.71L20 6V0H14Z" fill="#CED0DC" />
        </svg>
    );
};

