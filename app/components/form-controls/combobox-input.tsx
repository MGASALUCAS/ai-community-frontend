import { Fragment, ReactNode } from "react";
import { Control, Controller } from "react-hook-form";
import { Combobox, ResetOn } from "~/components/combobox/combobox";
import ComboboxDefaultOption from "~/components/combobox/combobox-default-option";
import { ComboboxDefaultTrigger } from "~/components/combobox/combobox-default-trigger";
import { MultiSelectTrigger } from "~/components/form-controls/multi-select-trigger";
import { IconType } from "~/types";
import { cn } from "~/utils";
import { SelectInputOptionType } from "~/utils/zod-common";

export interface ComboBoxOptionProp<T extends SelectInputOptionType> {
    option: T;
    index?: number;
    selected: boolean;
}

export type ComboBoxProps<T extends SelectInputOptionType> = {
    options: T[];
    wrapperClassName?: string;
    placeholder?: string;
    defaultValue?: T[];
    name: string;
    disabled?: boolean;
    triggerComponent?: ReactNode;
    renderOption?: <TOption extends SelectInputOptionType>(
        props: ComboBoxOptionProp<TOption>
    ) => ReactNode;
    multiselect?: boolean;
    onSearch?: (query: string) => void;
    loadingComponent?: ReactNode;
    loading?: boolean;
    control: Control;
    label?: string;
    hasError?: boolean;
    resetOn?: ResetOn;
    _prefix?: IconType | string;
};

export const ComboboxInput = <T extends SelectInputOptionType>({
    options = [],
    triggerComponent,
    renderOption,
    loadingComponent,
    multiselect,
    name,
    onSearch,
    loading,
    hasError,
    control,
    defaultValue,
    wrapperClassName,
    disabled,
    label,
    resetOn,
    placeholder,
    _prefix: Icon,
}: ComboBoxProps<T>) => {
    return (
        <Controller
            render={({ field: { onChange: handleChange } }) => (
                <Combobox
                    defaultValue={defaultValue}
                    multiple={multiselect}
                    onChange={handleChange}
                    loading={loading}
                    resetTrigger={resetOn}
                >
                    <Combobox.Trigger
                        disabled={disabled}
                        className={cn("text-left  w-full", wrapperClassName)}
                    >
                        {triggerComponent ??
                            (multiselect ? (
                                <MultiSelectTrigger
                                    disabled={disabled}
                                    wrapperClassName={"col-span-2 "}
                                    placeholder={placeholder}
                                    label={label}
                                    hasError={hasError}
                                />
                            ) : (
                                <ComboboxDefaultTrigger
                                    Icon={Icon}
                                    disabled={disabled}
                                    placeholder={placeholder}
                                    hasError={hasError}
                                    label={label}
                                />
                            ))}
                    </Combobox.Trigger>

                    <Combobox.Panel>
                        <Combobox.Header onSearch={onSearch} />
                        <Combobox.Loading>{loadingComponent}</Combobox.Loading>
                        <Combobox.Empty />

                        <Combobox.Lists>
                            {options.map((option, index) => (
                                <Combobox.Item value={option} key={index}>
                                    {(selected) => (
                                        <Fragment>
                                            {renderOption ? (
                                                renderOption({
                                                    option,
                                                    selected,
                                                    index,
                                                })
                                            ) : (
                                                <ComboboxDefaultOption
                                                    option={option}
                                                    selected={selected}
                                                />
                                            )}
                                        </Fragment>
                                    )}
                                </Combobox.Item>
                            ))}
                        </Combobox.Lists>
                        <Combobox.Footer />
                    </Combobox.Panel>
                </Combobox>
            )}
            name={name}
            control={control}
        />
    );
};
