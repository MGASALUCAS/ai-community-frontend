import { FC } from "react";
import { IconProps } from "~/types";

export const CupIcon: FC<IconProps> = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={className}
        >
            <path
                d="M21.75 5.625H19.875V4.5C19.875 4.20163 19.7565 3.91548 19.5455 3.7045C19.3345 3.49353 19.0484 3.375 18.75 3.375H5.25C4.95163 3.375 4.66548 3.49353 4.4545 3.7045C4.24353 3.91548 4.125 4.20163 4.125 4.5V5.625H2.25C2.00377 5.625 1.75995 5.6735 1.53247 5.76773C1.30498 5.86195 1.09828 6.00006 0.924175 6.17417C0.572544 6.52581 0.375 7.00272 0.375 7.5V9C0.376241 10.0936 0.811236 11.1421 1.58455 11.9154C2.35787 12.6888 3.40636 13.1238 4.5 13.125H4.57219C5.05268 14.4789 5.89361 15.6759 7.00431 16.587C8.115 17.4981 9.45333 18.0888 10.875 18.2953V19.875H9C8.70163 19.875 8.41548 19.9935 8.2045 20.2045C7.99353 20.4155 7.875 20.7016 7.875 21C7.875 21.2984 7.99353 21.5845 8.2045 21.7955C8.41548 22.0065 8.70163 22.125 9 22.125H15C15.2984 22.125 15.5845 22.0065 15.7955 21.7955C16.0065 21.5845 16.125 21.2984 16.125 21C16.125 20.7016 16.0065 20.4155 15.7955 20.2045C15.5845 19.9935 15.2984 19.875 15 19.875H13.125V18.2916C16.0256 17.8687 18.4247 15.8353 19.4062 13.125H19.5C20.5936 13.1238 21.6421 12.6888 22.4154 11.9154C23.1888 11.1421 23.6238 10.0936 23.625 9V7.5C23.625 7.00272 23.4275 6.52581 23.0758 6.17417C22.7242 5.82254 22.2473 5.625 21.75 5.625ZM2.625 9V7.875H4.125V10.5C4.125 10.6134 4.125 10.7259 4.13344 10.8384C3.70821 10.7537 3.32551 10.5242 3.05048 10.189C2.77545 9.85375 2.62509 9.43359 2.625 9ZM17.625 10.4156C17.625 13.5403 15.1209 16.1016 12.0431 16.125C11.3008 16.1307 10.5647 15.9894 9.87729 15.7093C9.18984 15.4291 8.56465 15.0157 8.03774 14.4928C7.51084 13.9699 7.09264 13.3479 6.80727 12.6626C6.52189 11.9773 6.37498 11.2423 6.375 10.5V5.625H17.625V10.4156ZM21.375 9C21.375 9.43415 21.2243 9.85484 20.9487 10.1903C20.6731 10.5257 20.2896 10.7552 19.8638 10.8394C19.8713 10.6988 19.875 10.5581 19.875 10.4156V7.875H21.375V9Z"
                fill="currentColor"
            />
        </svg>
    );
};
