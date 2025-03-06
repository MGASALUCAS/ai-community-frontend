import { Command } from "cmdk";
import { FC, ReactNode } from "react";
import { cn } from "~/utils";

interface ComboboxListProps {
    children: ReactNode;
    className?: string;
}

const ComboboxList: FC<ComboboxListProps> = ({ children, className }) => {
    return (
        <Command.List
            className={cn("p-2  pr-4  space-y-3 overflow-y-auto", className)}
        >
            {children}
        </Command.List>
    );
};
export default ComboboxList;
