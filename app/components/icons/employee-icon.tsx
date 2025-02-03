import { FC } from "react";
import { IconProps } from "~/types";

export const EmployeeIcon: FC<IconProps> = ({
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
                d="M3.5 16.5002C3.78696 16.1788 5.71487 14.6647 6.67313 13.9183C7.02213 13.6464 7.45023 13.5002 7.89262 13.5002C8.96233 13.5002 11.0237 13.5002 12.0985 13.5002C12.5461 13.5002 12.9785 13.6526 13.3388 13.9181C14.5761 14.8296 15.7361 15.5088 17 16.5002M5 18H15C16.6569 18 18 16.6569 18 15V5C18 3.34315 16.6569 2 15 2H5C3.34315 2 2 3.34315 2 5V15C2 16.6569 3.34315 18 5 18ZM12.8655 7.7267C12.8655 6.20044 11.577 4.9534 10 4.9534C8.42302 4.9534 7.13454 6.20044 7.13454 7.7267C7.13454 9.25296 8.42302 10.5 10 10.5C11.577 10.5 12.8655 9.25296 12.8655 7.7267Z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
            />
        </svg>
    );
};
