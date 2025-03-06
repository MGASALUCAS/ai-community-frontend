import { FC } from "react";
import { CheckIcon } from "~/components/icons";
import { cn } from "~/utils";
import { SelectInputOptionType } from "~/utils/zod-common";

interface Props {
    option: SelectInputOptionType;
    selected: boolean;
}

const ComboboxDefaultOption: FC<Props> = ({ option, selected }) => {
    return (
        <div className={"flex items-center gap-2"}>
            <CheckIcon
                className={cn("size-6 opacity-0", { "opacity-100": selected })}
            />
            <p>{option.label}</p>
        </div>
    );
};
export default ComboboxDefaultOption;
