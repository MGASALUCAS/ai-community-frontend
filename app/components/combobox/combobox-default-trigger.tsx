import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { FC } from "react";
import { useComboboxContext } from "~/components/combobox/combobox-provider";
import { FieldContainer } from "~/components/form-controls/common";
import { TextInputWithPrefix } from "~/components/form-controls/input-fields/text-input-with-prefix";
import Label from "~/components/form-controls/label";
import { UserIcon } from "~/components/icons";
import { IconType } from "~/types";

interface Props {
    Icon?: IconType | string;
    placeholder?: string;
    wrapperClassName?: string;
    label?: string;
    hasError?: boolean;
    disabled?: boolean;
}

export const ComboboxDefaultTrigger: FC<Props> = ({
    Icon = UserIcon,
    placeholder = "",
    wrapperClassName,
    hasError,
    label,
    disabled,
}) => {
    const { selectedOptions } = useComboboxContext();

    return (
        <FieldContainer className={wrapperClassName}>
            {label && (
                <Label
                    label={label}
                    className={"text-gray-700 font-normal text-[13.5px]"}
                />
            )}

            <div className={"relative"}>
                <TextInputWithPrefix
                    _prefix={Icon}
                    placeholder={placeholder}
                    hasError={hasError}
                    disabled={disabled}
                    value={
                        selectedOptions.length
                            ? selectedOptions[0]?.label
                            : undefined
                    }
                    className={
                        " placeholder:font-normal lg:py-2.5 border-[1px] z-0  bg-white shadow-none  text-gray-700 xl:text-[14.5px]"
                    }
                />
                <ChevronDownIcon
                    strokeWidth={2}
                    className={
                        "size-5 text-muted absolute top-0 bottom-0 my-auto right-2 "
                    }
                />
            </div>
        </FieldContainer>
    );
};
