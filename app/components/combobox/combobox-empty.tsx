import { Command, useCommandState } from "cmdk";
import { useComboboxContext } from "~/components/combobox/combobox-provider";
import { SearchXIcon } from "~/components/icons";

const ComboboxEmpty = () => {
    const { loading } = useComboboxContext();
    const hasNoSearchResults = useCommandState(
        (state) => state.filtered.count === 0
    );

    if (loading && hasNoSearchResults) return null;
    return (
        <Command.Empty className={"center flex-col py-5 space-y-2"}>
            <SearchXIcon className={"size-8 text-dark-green"} />
            <p className={"text-center text-dark-green text-sm"}>
                No record matching your search query
            </p>
        </Command.Empty>
    );
};
export default ComboboxEmpty;
