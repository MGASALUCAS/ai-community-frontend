import { Command } from "cmdk";
import { FC, ReactNode } from "react";
import ComboboxInput from "~/components/combobox/combobox-input";
import Popover from "~/components/popover";
import { cn } from "~/utils";

interface Props {
    children: ReactNode;
    className?: string;
    onSearch?: (query: string) => void;
    searchPlaceholder?: string;
}

export const ComboboxListsOld: FC<Props> = ({
    children,
    className,
    onSearch,
    searchPlaceholder,
}) => {
    return (
        <Popover.Content className={cn("p-0 overflow-hidden", className)}>
            <Command loop>
                <ComboboxInput
                    onSearch={onSearch}
                    placeholder={searchPlaceholder}
                />
                <div className={"p-2 max-h-72 pr-4 overflow-y-auto"}>
                    <Command.List className={""}>{children}</Command.List>
                </div>
            </Command>
        </Popover.Content>
    );
};
