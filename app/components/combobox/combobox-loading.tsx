import { Command, useCommandState } from "cmdk";
import { FC, ReactNode } from "react";
import { useComboboxContext } from "~/components/combobox/combobox-provider";
import { LoadingCircle } from "~/components/icons";

const ComboboxLoading: FC<{ children?: ReactNode }> = ({ children }) => {
    const { loading } = useComboboxContext();
    const hasNoSearchResults = useCommandState(
        (state) => state.filtered.count === 0
    );

    if (!(loading && hasNoSearchResults)) return null;

    return (
        <Command.Loading>
            {children ? (
                children
            ) : (
                <div className={"center flex-col py-3 space-y-3"}>
                    <LoadingCircle className={"size-5 opacity-80"} />
                    <p className={"text-gray-500 text-sm "}>Loading data...</p>
                </div>
            )}
        </Command.Loading>
    );
};
export default ComboboxLoading;
