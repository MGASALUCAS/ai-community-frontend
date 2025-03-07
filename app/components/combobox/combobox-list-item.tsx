import { Command, Command as CommandPrimitive } from "cmdk";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { useComboboxContext } from "~/components/combobox/combobox-provider";
import Checkbox from "~/components/form-controls/checkbox";
import { cn } from "~/utils";
import { SelectInputOptionType } from "~/utils/zod-common";

interface Props<T extends SelectInputOptionType>
    extends Omit<
        ComponentPropsWithoutRef<typeof CommandPrimitive.Item>,
        "children" | "value"
    > {
    value: T;
    children: (selected: boolean) => ReactNode;
}

export const ComboboxListItem = <T extends SelectInputOptionType>({
    children,
    value,
    ...rest
}: Props<T>) => {
    const { multiple, handleOptionSelect, isOptionSelected } =
        useComboboxContext();

    const selected = isOptionSelected(value);

    return (
        <Command.Item
            {...rest}
            value={JSON.stringify(value)}
            keywords={[value.label]}
            className={cn(
                "py-2 px-3  mb-1 gap-2 flex cursor-pointer data-[selected=true]:bg-surface-container rounded-lg",
                {
                    "bg-[#D3E0B8] data-[selected=true]:bg-[#D3E0B8] ": selected,
                }
            )}
            onSelect={handleOptionSelect}
        >
            {multiple && (
                <Checkbox
                    checked={selected}
                    className={"pointer-events-none"}
                />
            )}
            <div className={"flex-1"}>{children(selected)}</div>
        </Command.Item>
    );
};
