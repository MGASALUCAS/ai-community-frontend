import type { FC } from "react";
import type { IconProps } from "~/types";

export const PhotoAddIcon: FC<IconProps> = ({
    className,
    strokeWidth = 2.5,
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            className={className}
        >
            <path
                d="M25 6H15.6C12.2397 6 10.5595 6 9.27606 6.65396C8.14708 7.2292 7.2292 8.14708 6.65396 9.27606C6 10.5595 6 12.2397 6 15.6V32.4C6 35.7603 6 37.4405 6.65396 38.7239C7.2292 39.8529 8.14708 40.7708 9.27606 41.346C10.5595 42 12.2397 42 15.6 42H34C35.8599 42 36.7899 42 37.5529 41.7956C39.6235 41.2408 41.2408 39.6235 41.7956 37.5529C42 36.7899 42 35.8599 42 34M38 16V4M32 10H44M21 17C21 19.2091 19.2091 21 17 21C14.7909 21 13 19.2091 13 17C13 14.7909 14.7909 13 17 13C19.2091 13 21 14.7909 21 17ZM29.9801 23.8363L13.0623 39.2161C12.1107 40.0812 11.6349 40.5137 11.5929 40.8884C11.5564 41.2132 11.6809 41.5353 11.9264 41.7511C12.2096 42 12.8526 42 14.1386 42H32.912C35.7903 42 37.2295 42 38.3598 41.5164C39.7789 40.9094 40.9094 39.7789 41.5164 38.3598C42 37.2295 42 35.7903 42 32.912C42 31.9435 42 31.4593 41.8941 31.0083C41.7611 30.4416 41.5059 29.9107 41.1465 29.4528C40.8605 29.0884 40.4824 28.7859 39.7261 28.1809L34.1317 23.7053C33.3748 23.0998 32.9963 22.7971 32.5796 22.6902C32.2123 22.596 31.8257 22.6082 31.4651 22.7254C31.0559 22.8583 30.6973 23.1843 29.9801 23.8363Z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
