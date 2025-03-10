//⚠️Todo: Create component for each icon
import { FC } from "react";
import { IconProps } from "~/types";

export const BoldIcon: FC<IconProps> = ({ className }) => {
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
                d="M6.66667 9.16732H10.4167C10.9692 9.16732 11.4991 8.94782 11.8898 8.55712C12.2805 8.16642 12.5 7.63652 12.5 7.08398C12.5 6.53145 12.2805 6.00155 11.8898 5.61085C11.4991 5.22014 10.9692 5.00065 10.4167 5.00065H6.66667V9.16732ZM15 12.9173C15 13.4098 14.903 13.8974 14.7145 14.3524C14.5261 14.8074 14.2499 15.2207 13.9016 15.569C13.5534 15.9172 13.14 16.1934 12.6851 16.3819C12.2301 16.5703 11.7425 16.6673 11.25 16.6673H5.65C5.29102 16.6673 5 16.3763 5 16.0173V3.98398C5 3.625 5.29101 3.33398 5.65 3.33398H10.4167C11.1508 3.33402 11.8688 3.54953 12.4816 3.9538C13.0944 4.35807 13.575 4.93332 13.8639 5.60821C14.1528 6.2831 14.2373 7.02795 14.1068 7.7504C13.9764 8.47284 13.6367 9.1411 13.13 9.67232C13.6989 10.0017 14.1711 10.475 14.4993 11.0445C14.8276 11.6141 15.0002 12.26 15 12.9173ZM6.66667 10.834V15.0007H11.25C11.8025 15.0007 12.3324 14.7812 12.7231 14.3905C13.1138 13.9998 13.3333 13.4699 13.3333 12.9173C13.3333 12.3648 13.1138 11.8349 12.7231 11.4442C12.3324 11.0535 11.8025 10.834 11.25 10.834H6.66667Z"
                fill="currentColor"
            />
        </svg>
    );
};

export const ItalicIcon: FC<IconProps> = ({ className }) => {
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.50065 4.16732C7.50065 3.70708 7.87375 3.33398 8.33398 3.33398H15.834C16.2942 3.33398 16.6673 3.70708 16.6673 4.16732C16.6673 4.62756 16.2942 5.00065 15.834 5.00065H12.6966L9.05081 15.0007H11.6673C12.1276 15.0007 12.5007 15.3737 12.5007 15.834C12.5007 16.2942 12.1276 16.6673 11.6673 16.6673H4.16732C3.70708 16.6673 3.33398 16.2942 3.33398 15.834C3.33398 15.3737 3.70708 15.0007 4.16732 15.0007H7.30466L10.9505 5.00065H8.33398C7.87375 5.00065 7.50065 4.62756 7.50065 4.16732Z"
                fill="currentColor"
            />
        </svg>
    );
};

export const UnderlineIcon: FC<IconProps> = ({ className }) => {
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
                d="M6.66602 3.33333C6.66602 2.8731 6.29292 2.5 5.83268 2.5C5.37244 2.5 4.99935 2.8731 4.99935 3.33333V9.16667C4.99935 12.3883 5.83268 15 9.99935 15C14.166 15 14.9993 12.3883 14.9993 9.16667V3.33333C14.9993 2.8731 14.6263 2.5 14.166 2.5C13.7058 2.5 13.3327 2.8731 13.3327 3.33333V9.16667C13.3327 11.4679 13.3327 13.3333 9.99935 13.3333C6.66601 13.3333 6.66602 11.4679 6.66602 9.16667V3.33333Z"
                fill="currentColor"
            />
            <path
                d="M4.99935 15.8333C4.53911 15.8333 4.16602 16.2064 4.16602 16.6667C4.16602 17.1269 4.53911 17.5 4.99935 17.5H14.9993C15.4596 17.5 15.8327 17.1269 15.8327 16.6667C15.8327 16.2064 15.4596 15.8333 14.9993 15.8333H4.99935Z"
                fill="currentColor"
            />
        </svg>
    );
};

export const TextColorIcon: FC<IconProps> = ({ className }) => {
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
                d="M2.5 16.6667C2.5 16.2064 2.8731 15.8333 3.33333 15.8333H16.6667C17.1269 15.8333 17.5 16.2064 17.5 16.6667C17.5 17.1269 17.1269 17.5 16.6667 17.5H3.33333C2.8731 17.5 2.5 17.1269 2.5 16.6667Z"
                fill="currentColor"
            />
            <path
                d="M12.9133 11.6667H7.08667L5.96286 14.4762C5.83631 14.7925 5.5299 15 5.18916 15C4.59962 15 4.1965 14.4046 4.41545 13.8572L8.95713 3.02384C9.08368 2.70746 9.39011 2.5 9.73086 2.5H10.2691C10.6099 2.5 10.9163 2.70746 11.0429 3.02384L15.5845 13.8572C15.8035 14.4046 15.4004 15 14.8108 15C14.4701 15 14.1637 14.7925 14.0371 14.4762L12.9133 11.6667ZM12.2467 10L10 4.90417L7.75333 10H12.2467Z"
                fill="currentColor"
            />
        </svg>
    );
};

export const AlightCenterIcon: FC<IconProps> = ({ className }) => {
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
                d="M3.33398 3.74935C3.33398 3.28911 3.70708 2.91602 4.16732 2.91602H15.834C16.2942 2.91602 16.6673 3.28911 16.6673 3.74935C16.6673 4.20959 16.2942 4.58268 15.834 4.58268H4.16732C3.70708 4.58268 3.33398 4.20959 3.33398 3.74935ZM5.83398 16.2493C5.83398 15.7891 6.20708 15.416 6.66732 15.416H13.334C13.7942 15.416 14.1673 15.7891 14.1673 16.2493C14.1673 16.7096 13.7942 17.0827 13.334 17.0827H6.66732C6.20708 17.0827 5.83398 16.7096 5.83398 16.2493ZM5.83398 7.91602C5.83398 7.45578 6.20708 7.08268 6.66732 7.08268H13.334C13.7942 7.08268 14.1673 7.45578 14.1673 7.91602C14.1673 8.37625 13.7942 8.74935 13.334 8.74935H6.66732C6.20708 8.74935 5.83398 8.37625 5.83398 7.91602ZM3.33398 12.0827C3.33398 11.6224 3.70708 11.2493 4.16732 11.2493H15.834C16.2942 11.2493 16.6673 11.6224 16.6673 12.0827C16.6673 12.5429 16.2942 12.916 15.834 12.916H4.16732C3.70708 12.916 3.33398 12.5429 3.33398 12.0827Z"
                fill="currentColor"
            />
        </svg>
    );
};

export const AlightRightIcon: FC<IconProps> = ({ className }) => {
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
                d="M2.5 3.74935C2.5 3.28911 2.8731 2.91602 3.33333 2.91602H16.6667C17.1269 2.91602 17.5 3.28911 17.5 3.74935C17.5 4.20959 17.1269 4.58268 16.6667 4.58268H3.33333C2.8731 4.58268 2.5 4.20959 2.5 3.74935ZM5.83333 16.2493C5.83333 15.7891 6.20643 15.416 6.66667 15.416H16.6667C17.1269 15.416 17.5 15.7891 17.5 16.2493C17.5 16.7096 17.1269 17.0827 16.6667 17.0827H6.66667C6.20643 17.0827 5.83333 16.7096 5.83333 16.2493ZM2.5 12.0827C2.5 11.6224 2.8731 11.2493 3.33333 11.2493H16.6667C17.1269 11.2493 17.5 11.6224 17.5 12.0827C17.5 12.5429 17.1269 12.916 16.6667 12.916H3.33333C2.8731 12.916 2.5 12.5429 2.5 12.0827ZM5.83333 7.91602C5.83333 7.45578 6.20643 7.08268 6.66667 7.08268H16.6667C17.1269 7.08268 17.5 7.45578 17.5 7.91602C17.5 8.37625 17.1269 8.74935 16.6667 8.74935H6.66667C6.20643 8.74935 5.83333 8.37625 5.83333 7.91602Z"
                fill="currentColor"
            />
        </svg>
    );
};

export const AlightJustifyIcon: FC<IconProps> = ({ className }) => {
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
                d="M2.5 3.74935C2.5 3.28911 2.8731 2.91602 3.33333 2.91602H16.6667C17.1269 2.91602 17.5 3.28911 17.5 3.74935C17.5 4.20959 17.1269 4.58268 16.6667 4.58268H3.33333C2.8731 4.58268 2.5 4.20959 2.5 3.74935ZM2.5 16.2493C2.5 15.7891 2.8731 15.416 3.33333 15.416H16.6667C17.1269 15.416 17.5 15.7891 17.5 16.2493C17.5 16.7096 17.1269 17.0827 16.6667 17.0827H3.33333C2.8731 17.0827 2.5 16.7096 2.5 16.2493ZM2.5 12.0827C2.5 11.6224 2.8731 11.2493 3.33333 11.2493H16.6667C17.1269 11.2493 17.5 11.6224 17.5 12.0827C17.5 12.5429 17.1269 12.916 16.6667 12.916H3.33333C2.8731 12.916 2.5 12.5429 2.5 12.0827ZM2.5 7.91602C2.5 7.45578 2.8731 7.08268 3.33333 7.08268H16.6667C17.1269 7.08268 17.5 7.45578 17.5 7.91602C17.5 8.37625 17.1269 8.74935 16.6667 8.74935H3.33333C2.8731 8.74935 2.5 8.37625 2.5 7.91602Z"
                fill="currentColor"
            />
        </svg>
    );
};

export const LinkIcon: FC<IconProps> = ({ className }) => {
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
                d="M9.16602 14.1673H5.83268C4.72761 14.1673 3.66781 13.7283 2.8864 12.9469C2.105 12.1655 1.66602 11.1057 1.66602 10.0007C1.66602 8.89558 2.105 7.83577 2.8864 7.05437C3.66781 6.27297 4.72761 5.83398 5.83268 5.83398H9.16602V7.50065H5.83268C5.16964 7.50065 4.53376 7.76404 4.06492 8.23288C3.59607 8.70172 3.33268 9.33761 3.33268 10.0007C3.33268 10.6637 3.59607 11.2996 4.06492 11.7684C4.53376 12.2373 5.16964 12.5007 5.83268 12.5007H9.16602V14.1673ZM14.166 5.83398H10.8327V7.50065H14.166C14.8291 7.50065 15.4649 7.76404 15.9338 8.23288C16.4026 8.70172 16.666 9.33761 16.666 10.0007C16.666 10.6637 16.4026 11.2996 15.9338 11.7684C15.4649 12.2373 14.8291 12.5007 14.166 12.5007H10.8327V14.1673H14.166C15.2711 14.1673 16.3309 13.7283 17.1123 12.9469C17.8937 12.1655 18.3327 11.1057 18.3327 10.0007C18.3327 8.89558 17.8937 7.83577 17.1123 7.05437C16.3309 6.27297 15.2711 5.83398 14.166 5.83398ZM13.3327 9.16732H6.66602V10.834H13.3327V9.16732Z"
                fill="currentColor"
            />
        </svg>
    );
};

export const ImageIcon: FC<IconProps> = ({ className }) => {
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
                d="M11.8327 9.16732L14.9993 13.334H4.99935L7.49935 10.084L9.24935 12.334L11.666 9.16732H11.8327ZM7.08268 9.16732C7.74935 9.16732 8.33268 8.58398 8.33268 7.91732C8.33268 7.25065 7.74935 6.66732 7.08268 6.66732C6.41602 6.66732 5.83268 7.25065 5.83268 7.91732C5.83268 8.58398 6.41602 9.16732 7.08268 9.16732ZM18.3327 5.00065V15.0007C18.3327 15.9173 17.5827 16.6673 16.666 16.6673H3.33268C2.41602 16.6673 1.66602 15.9173 1.66602 15.0007V5.00065C1.66602 4.08398 2.41602 3.33398 3.33268 3.33398H16.666C17.5827 3.33398 18.3327 4.08398 18.3327 5.00065ZM16.666 7.33398V5.00065H3.33268V15.0007H16.666V7.33398Z"
                fill="currentColor"
            />
        </svg>
    );
};
export const VideoIcon: FC<IconProps> = ({ className }) => {
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
                d="M12.5 6.66667V13.3333H4.16667V6.66667H12.5ZM14.1667 8.75V5.83333C14.1667 5.61232 14.0789 5.40036 13.9226 5.24408C13.7663 5.0878 13.5543 5 13.3333 5H3.33333C3.11232 5 2.90036 5.0878 2.74408 5.24408C2.5878 5.40036 2.5 5.61232 2.5 5.83333V14.1667C2.5 14.3877 2.5878 14.5996 2.74408 14.7559C2.90036 14.9122 3.11232 15 3.33333 15H13.3333C13.5543 15 13.7663 14.9122 13.9226 14.7559C14.0789 14.5996 14.1667 14.3877 14.1667 14.1667V11.25L16.075 13.1583C16.1916 13.2759 16.3405 13.356 16.5028 13.3886C16.6651 13.4211 16.8334 13.4046 16.9862 13.3411C17.1391 13.2777 17.2696 13.1701 17.3611 13.0322C17.4526 12.8942 17.501 12.7322 17.5 12.5667V7.425C17.501 7.25948 17.4526 7.09742 17.3611 6.95949C17.2696 6.82156 17.1391 6.714 16.9862 6.65052C16.8334 6.58705 16.6651 6.57054 16.5028 6.6031C16.3405 6.63566 16.1916 6.71581 16.075 6.83333L14.1667 8.75Z"
                fill="currentColor"
            />
        </svg>
    );
};

export const UndoIcon: FC<IconProps> = ({ className }) => {
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
                d="M6.66602 6.66602V8.61157C6.66602 9.16267 6.02326 9.46372 5.5999 9.11092L2.26523 6.33203C1.95339 6.07216 1.95339 5.59321 2.26523 5.33334L5.5999 2.55445C6.02326 2.20165 6.66602 2.5027 6.66602 3.05379V4.99935H9.99935C11.7675 4.99935 13.4632 5.70173 14.7134 6.95197C15.9636 8.20221 16.666 9.89791 16.666 11.666C16.666 13.4341 15.9636 15.1298 14.7134 16.3801C13.4632 17.6303 11.7675 18.3327 9.99935 18.3327H7.49935C7.03911 18.3327 6.66602 17.9596 6.66602 17.4993C6.66602 17.0391 7.03911 16.666 7.49935 16.666H9.99935C11.3254 16.666 12.5972 16.1392 13.5349 15.2016C14.4726 14.2639 14.9993 12.9921 14.9993 11.666C14.9993 10.3399 14.4726 9.06816 13.5349 8.13048C12.5972 7.1928 11.3254 6.66602 9.99935 6.66602H6.66602Z"
                fill="currentColor"
            />
        </svg>
    );
};

export const RedoIcon: FC<IconProps> = ({ className }) => {
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
                d="M13.334 6.66602H10.0007C8.67457 6.66602 7.4028 7.1928 6.46512 8.13048C5.52744 9.06816 5.00065 10.3399 5.00065 11.666C5.00065 12.9921 5.52744 14.2639 6.46512 15.2016C7.4028 16.1392 8.67457 16.666 10.0007 16.666H12.5007C12.9609 16.666 13.334 17.0391 13.334 17.4993C13.334 17.9596 12.9609 18.3327 12.5007 18.3327H10.0007C8.23254 18.3327 6.53685 17.6303 5.28661 16.3801C4.03636 15.1298 3.33398 13.4341 3.33398 11.666C3.33398 9.89791 4.03636 8.20221 5.28661 6.95197C6.53685 5.70173 8.23254 4.99935 10.0007 4.99935H13.334V3.05379C13.334 2.5027 13.9767 2.20165 14.4001 2.55445L17.7348 5.33334C18.0466 5.59321 18.0466 6.07216 17.7348 6.33203L14.4001 9.11092C13.9767 9.46372 13.334 9.16267 13.334 8.61157V6.66602Z"
                fill="currentColor"
            />
        </svg>
    );
};

export const OrderedListIcon: FC<IconProps> = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className={className}
        >
            <path
                d="M7.5 4.5H15.75"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7.5 9H15.75"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7.5 13.5H15.75"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M3 4.5H3.75V7.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M3 7.5H4.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4.5 13.5H3C3 12.75 4.5 12 4.5 11.25C4.5 10.5 3.75 10.125 3 10.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const UnorderedListIcon: FC<IconProps> = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className={className}
        >
            <path
                d="M6 4.5H15.75"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6 9H15.75"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6 13.5H15.75"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2.25 4.5H2.2575"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2.25 9H2.2575"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2.25 13.5H2.2575"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
