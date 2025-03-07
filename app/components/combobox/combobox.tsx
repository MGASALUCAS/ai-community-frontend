import { ReactNode } from "react";
import ComboboxEmpty from "~/components/combobox/combobox-empty";
import ComboboxFooter from "~/components/combobox/combobox-footer";
import ComboboxHeader from "~/components/combobox/combobox-header";
import ComboboxList from "~/components/combobox/combobox-list";
import { ComboboxListItem } from "~/components/combobox/combobox-list-item";
import ComboboxLoading from "~/components/combobox/combobox-loading";
import {
    ResetTrigger,
    useComboboxOptionManagement,
} from "~/components/combobox/combobox-option-selection-management";
import { ComboboxPanel } from "~/components/combobox/combobox-panel";
import { ComboboxContext } from "~/components/combobox/combobox-provider";
import Popover from "~/components/popover";
import { SelectInputOptionType } from "~/utils/zod-common";

export type ResetOn = string | number | boolean;

interface ComboboxProps<T extends SelectInputOptionType> {
    children: ReactNode;
    multiple?: boolean;
    loading?: boolean;
    defaultValue?: T[];
    onChange?: (value: T[]) => void;
    resetTrigger?: ResetTrigger;
}

export const Combobox = <T extends SelectInputOptionType>({
    children,
    onChange,
    multiple,
    defaultValue = [],
    loading,
    resetTrigger,
}: ComboboxProps<T>) => {
    const {
        close,
        handleOptionSelect,
        handleOptionsSelectionComplete,
        isOpen,
        isOptionSelected,
        removeOption,
        selectedOptions,
        setIsOpen,
    } = useComboboxOptionManagement({
        defaultValue,
        multiple,
        onChange,
        resetTrigger,
    });

    return (
        <ComboboxContext.Provider
            value={{
                close,
                handleOptionSelect,
                handleOptionsSelectionComplete,
                isOptionSelected,
                loading,
                multiple,
                removeOption,
                selectedOptions,
            }}
        >
            <Popover open={isOpen} onOpenChange={setIsOpen}>
                {children}
            </Popover>
        </ComboboxContext.Provider>
    );
};

Combobox.Trigger = Popover.Trigger;
Combobox.Item = ComboboxListItem;
Combobox.Lists = ComboboxList;
Combobox.Panel = ComboboxPanel;
Combobox.Empty = ComboboxEmpty;
Combobox.Header = ComboboxHeader;
Combobox.Loading = ComboboxLoading;
Combobox.Footer = ComboboxFooter;
