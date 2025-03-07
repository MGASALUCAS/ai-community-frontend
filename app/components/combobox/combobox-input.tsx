import { Command, useCommandState } from "cmdk";
import { FC } from "react";
import { SearchIcon } from "~/components/icons";
import useDebounce from "~/hooks/useDebounce";
import { cn } from "~/utils";

interface Props {
    className?: string;
    onSearch?: (query: string) => void;
    placeholder?: string;
}

const ComboboxInput: FC<Props> = ({
    className,
    onSearch,
    placeholder = "Search",
}) => {
    const hasNoSearchResults = useCommandState(
        (state) => state.filtered.count === 0
    );

    const handleValueChange = useDebounce<string>((query) => {
        // ℹ️ Proceed with the search only if there are no local search results
        if (hasNoSearchResults) onSearch?.(query);
    });

    return (
        <div className={"border-b relative"}>
            <Command.Input
                placeholder={placeholder}
                onValueChange={handleValueChange}
                className={cn(
                    "w-full py-2 placeholder:text-[#8A8F7F] pl-8 focus:outline-none focus:ring-0 border-0",
                    className
                )}
            />

            <div
                className={
                    "absolute left-0 top-0 bottom-0 my-auto flex size-7  items-center pl-2"
                }
            >
                <SearchIcon className={"size-5 text-gray-500"} />
            </div>
        </div>
    );
};
export default ComboboxInput;
