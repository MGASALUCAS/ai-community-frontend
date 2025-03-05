import { FC } from "react";
import { IconProps } from "~/types";

export const EventsIcon: FC<IconProps> = ({ className, strokeWidth = 1.5 }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Calendar Outline */}
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      {/* Header Divider */}
      <path d="M3 10h18" />
      {/* Binding Marks */}
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      {/* Event Dots */}
      <circle cx="9" cy="16" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="15" cy="16" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
};
