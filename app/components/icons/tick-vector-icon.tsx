import { FC } from "react";
import { IconProps } from "~/types";

export const TickVectorIcon: FC<IconProps> = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className={className}
        >
            <circle cx="10" cy="10" r="9" fill="#FFFFFF" />
            <path
                d="M10 0C4.48583 0 0 4.48583 0 10C0 15.5142 4.48583 20 10 20C15.5142 20 20 15.5142 20 10C20 4.48583 15.5142 0 10 0ZM15.1667 8.76L11.4783 12.3808C10.8258 13.0208 9.98583 13.34 9.145 13.34C8.31333 13.34 7.48167 13.0267 6.83167 12.3992L5.24917 10.8433C4.92083 10.5208 4.91667 9.99333 5.23917 9.665C5.56083 9.33583 6.09 9.33167 6.4175 9.655L7.995 11.2058C8.64167 11.8308 9.6625 11.8275 10.3125 11.1908L14 7.57083C14.3275 7.2475 14.8533 7.25333 15.1783 7.58167C15.5008 7.91 15.4958 8.4375 15.1667 8.76Z"
                fill="#568939"
            />
        </svg>
    );
};

