import { Command } from "cmdk";
import { FC, ReactNode } from "react";
import Popover from "~/components/popover";
import { cn } from "~/utils";

interface Props {
    children: ReactNode;
    className?: string;
}

export const ComboboxPanel: FC<Props> = ({ children, className }) => {
    return (
        <Popover.Content className={cn("p-0 overflow-hidden", className)}>
            <Command loop>{children}</Command>
        </Popover.Content>
    );
};
