import { FC } from "react";
import { IconProps } from "~/types";

export const QuestionMarkIcon: FC<IconProps> = ({ className, strokeWidth = 1.5 }) => {
    return (
        <svg 
        className={className} 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        strokeWidth={strokeWidth}
        xmlns="http://www.w3.org/2000/svg">
        <path d="M11.95 18C12.3 18 12.596 17.879 12.838 17.637C13.08 17.395 13.2007 17.0993 13.2 16.75C13.1993 16.4007 13.0787 16.1047 12.838 15.862C12.5973 15.6193 12.3013 15.4987 11.95 15.5C11.5987 15.5013 11.303 15.6223 11.063 15.863C10.823 16.1037 10.702 16.3993 10.7 16.75C10.698 17.1007 10.819 17.3967 11.063 17.638C11.307 17.8793 11.6027 18 11.95 18ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88334 20.6867 5.825 19.9743 4.925 19.075C4.025 18.1757 3.31267 17.1173 2.788 15.9C2.26333 14.6827 2.00067 13.3827 2 12C1.99933 10.6173 2.262 9.31733 2.788 8.1C3.314 6.88267 4.02633 5.82433 4.925 4.925C5.82367 4.02567 6.882 3.31333 8.1 2.788C9.318 2.26267 10.618 2 12 2C13.382 2 14.682 2.26267 15.9 2.788C17.118 3.31333 18.1763 4.02567 19.075 4.925C19.9737 5.82433 20.6863 6.88267 21.213 8.1C21.7397 9.31733 22.002 10.6173 22 12C21.998 13.3827 21.7353 14.6827 21.212 15.9C20.6887 17.1173 19.9763 18.1757 19.075 19.075C18.1737 19.9743 17.1153 20.687 15.9 21.213C14.6847 21.739 13.3847 22.0013 12 22ZM12.1 7.7C12.5167 7.7 12.8793 7.83333 13.188 8.1C13.4967 8.36667 13.6507 8.7 13.65 9.1C13.65 9.46667 13.5377 9.79167 13.313 10.075C13.0883 10.3583 12.834 10.625 12.55 10.875C12.1667 11.2083 11.8293 11.575 11.538 11.975C11.2467 12.375 11.1007 12.825 11.1 13.325C11.1 13.5583 11.1877 13.7543 11.363 13.913C11.5383 14.0717 11.7423 14.1507 11.975 14.15C12.225 14.15 12.4377 14.0667 12.613 13.9C12.7883 13.7333 12.9007 13.525 12.95 13.275C13.0167 12.925 13.1667 12.6127 13.4 12.338C13.6333 12.0633 13.8833 11.8007 14.15 11.55C14.5333 11.1833 14.8627 10.7833 15.138 10.35C15.4133 9.91667 15.5507 9.43333 15.55 8.9C15.55 8.05 15.2043 7.35433 14.513 6.813C13.8217 6.27167 13.0173 6.00067 12.1 6C11.4667 6 10.8627 6.13333 10.288 6.4C9.71333 6.66667 9.27567 7.075 8.975 7.625C8.85834 7.825 8.821 8.03767 8.863 8.263C8.905 8.48833 9.01733 8.659 9.2 8.775C9.43333 8.90833 9.675 8.95 9.925 8.9C10.175 8.85 10.3833 8.70833 10.55 8.475C10.7333 8.225 10.9627 8.03333 11.238 7.9C11.5133 7.76667 11.8007 7.7 12.1 7.7Z" fill="white"/>
        </svg>
        
        
    );
};
