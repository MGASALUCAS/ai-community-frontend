import { useCallback, useEffect, useState } from "react";
import { SelectInputOptionType } from "~/utils/zod-common";

export type ResetTrigger = string | number | boolean;

interface UseComboboxOptionManagement<T extends SelectInputOptionType> {
    defaultValue: T[];
    multiple?: boolean;
    onChange?: (value: T[]) => void;
    resetTrigger?: ResetTrigger;
}

export const useComboboxOptionManagement = <T extends SelectInputOptionType>({
    defaultValue,
    multiple,
    onChange,
    resetTrigger,
}: UseComboboxOptionManagement<T>) => {
    const [selectedOptions, setSelectedOptions] = useState<T[]>(defaultValue);
    const [isOpen, setIsOpen] = useState(false);

    const removeOption = (option: T) => {
        setSelectedOptions((prev) =>
            prev.filter((item) => item.value !== option.value)
        );
    };

    const close = () => {
        setIsOpen(false);
        setSelectedOptions([]);
    };

    const handleOptionsSelectionComplete = () => {
        if (onChange && selectedOptions.length) {
            onChange(selectedOptions);
            close();
        }
    };

    const toggleOption = (option: T) => {
        const isSelected = selectedOptions.some(
            ({ value }) => option.value === value
        );
        setSelectedOptions((prev) =>
            isSelected
                ? prev.filter(({ value }) => value !== option.value)
                : [...prev, option]
        );
    };

    useEffect(() => {
        if (resetTrigger) {
            setSelectedOptions(defaultValue);
        }
    }, [resetTrigger, defaultValue]);

    useEffect(() => {
        setSelectedOptions([]);
    }, [multiple]);

    const isOptionSelected = useCallback(
        (option: T) => {
            return selectedOptions?.some((selectedOption) => {
                return selectedOption.value === option.value;
            });
        },
        [selectedOptions]
    );

    const handleOptionSelect = (value: string) => {
        const currentSelectedOption = JSON.parse(value) as T;
        if (multiple) {
            return toggleOption(currentSelectedOption);
        }
        setSelectedOptions([currentSelectedOption]);
    };

    return {
        close,
        handleOptionSelect,
        handleOptionsSelectionComplete,
        isOpen,
        isOptionSelected,
        removeOption,
        selectedOptions,
        setIsOpen,
    };
};
