import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { FC } from "react";
import { ChipsButton } from "~/components/button";
import Card from "~/components/card";
import { useComboboxContext } from "~/components/combobox/combobox-provider";
import { FieldContainer } from "~/components/form-controls/common";
import Label from "~/components/form-controls/label";
import { cn } from "~/utils";

interface Props {
    wrapperClassName?: string;
    placeholder?: string;
    hasError?: boolean;
    disabled?: boolean;
    label?: string;
}

export const MultiSelectTrigger: FC<Props> = ({
    placeholder,
    wrapperClassName,
    hasError,
    disabled,
    label,
}) => {
    const { selectedOptions, removeOption } = useComboboxContext();

    const moreItems = selectedOptions.length - 3;
    const hasSelectedOptions = !!selectedOptions.length;

    return (
        <FieldContainer className={wrapperClassName}>
            <Label
                label={label ?? "Select Items"}
                className={"text-gray-700 font-normal text-[13.5px]"}
            />
            <Card
                className={cn(
                    "flex items-between rounded-lg bg-white p-2 ",
                    { "py-2.5": !hasSelectedOptions },
                    { "border-rose-500": hasError },
                    { "bg-gray-100 cursor-not-allowed": disabled }
                )}
            >
                <div className={"flex gap-2 "}>
                    {!hasSelectedOptions && (
                        <p className={"text-muted text-sm font-light"}>
                            {placeholder ?? "Select"}
                        </p>
                    )}
                    {selectedOptions.slice(0, 3).map((option) => (
                        <ChipsButton
                            onClick={() => removeOption(option)}
                            label={option.label}
                            key={option.value}
                        />
                    ))}
                </div>

                <div className={"flex gap-2 items-center"}>
                    {moreItems >= 1 && (
                        <p className={"space-x-1 text-sm text-primary"}>
                            <span className={"font-medium"}>+{moreItems}</span>
                            <span>more </span>
                        </p>
                    )}
                    <ChevronDownIcon
                        strokeWidth={2}
                        className={"size-5 text-gray-500"}
                    />
                </div>
            </Card>
        </FieldContainer>
    );
};
