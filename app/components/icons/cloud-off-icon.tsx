import { FC } from "react";
import { IconProps } from "~/types";

export const CloudOffIcon: FC<IconProps> = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className={className}
        >
            <path
                fill="currentColor"
                d="M19.8 22.6L17.15 20H6.5q-2.3 0-3.9-1.6T1 14.5q0-1.925 1.188-3.425T5.25 9.15q.075-.2.15-.387t.15-.413L1.4 4.2l1.4-1.4l18.4 18.4zM6.5 18h8.65L7.1 9.95q-.05.275-.075.525T7 11h-.5q-1.45 0-2.475 1.025T3 14.5t1.025 2.475T6.5 18m15.1.75l-1.45-1.4q.425-.35.638-.812T21 15.5q0-1.05-.725-1.775T18.5 13H17v-2q0-2.075-1.463-3.537T12 6q-.675 0-1.3.163t-1.2.512l-1.45-1.45q.875-.6 1.863-.912T12 4q2.925 0 4.963 2.038T19 11q1.725.2 2.863 1.488T23 15.5q0 .975-.375 1.813T21.6 18.75m-6.775-6.725"
            ></path>
        </svg>
    );
};
