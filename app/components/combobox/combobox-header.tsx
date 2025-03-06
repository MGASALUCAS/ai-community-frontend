import { FC } from "react";
import ComboboxInput from "~/components/combobox/combobox-input";

interface ComboboxHeaderProps {
    onSearch?: (query: string) => void;
    searchPlaceholder?: string;
}

const ComboboxHeader: FC<ComboboxHeaderProps> = ({
    onSearch: handleSearch,
    searchPlaceholder,
}) => {
    return (
        <div className={"w-full"}>
            <ComboboxInput
                onSearch={handleSearch}
                placeholder={searchPlaceholder}
            />
        </div>
    );
};
export default ComboboxHeader;
