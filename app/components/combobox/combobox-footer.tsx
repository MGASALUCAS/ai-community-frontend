import { Button } from "~/components/button";
import { useComboboxContext } from "~/components/combobox/combobox-provider";
import { cn } from "~/utils";

const ComboboxFooter = () => {
    const {
        close: closeCombobox,
        handleOptionsSelectionComplete,
        selectedOptions,
    } = useComboboxContext();

    const isDisabled = selectedOptions.length === 0;

    return (
        <footer
            className={cn(
                "flex items-center border-t bg-surface-container/60 px-3 justify-end gap-5  py-3 "
            )}
        >
            <Button
                type={"button"}
                onClick={closeCombobox}
                className={
                    " border text-xs border-swiss-coffee bg-white font-medium text-gray-600 px-4 focus:ring-gray-500/60 active:ring-gray-500/60"
                }
            >
                Cancel
            </Button>

            <Button
                disabled={isDisabled}
                onClick={handleOptionsSelectionComplete}
                className={
                    "border text-xs border-primary font-medium disabled:cursor-not-allowed px-4 disabled:opacity-50"
                }
            >
                Done
            </Button>
        </footer>
    );
};
export default ComboboxFooter;
