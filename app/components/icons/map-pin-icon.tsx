import { FC } from "react";
import { IconProps } from "~/types";

export const MapPinIcon: FC<IconProps> = ({ className, strokeWidth = 1.5 }) => {
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
                d="M10 18C10 18 16.2609 12.4348 16.2609 8.26087C16.2609 4.80309 13.4578 2 10 2C6.54221 2 3.73913 4.80309 3.73913 8.26087C3.73913 12.4348 10 18 10 18Z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
            />
            <path
                d="M12.0003 8.00013C12.0003 9.1047 11.1048 10.0001 10.0003 10.0001C8.89568 10.0001 8.00025 9.1047 8.00025 8.00013C8.00025 6.89556 8.89568 6.00013 10.0003 6.00013C11.1048 6.00013 12.0003 6.89556 12.0003 8.00013Z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
            />
        </svg>
    );
};
