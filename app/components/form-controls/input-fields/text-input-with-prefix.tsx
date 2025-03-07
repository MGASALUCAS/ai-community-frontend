import { forwardRef } from "react";
import {
    TextInputBasic,
    TextInputBasicProps,
} from "~/components/form-controls/input-fields/text-input-basic";
import { IconType } from "~/types";
import { cn } from "~/utils";

export interface TextInputWithPrefixProps
    extends Omit<TextInputBasicProps, "prefix"> {
    _prefix: IconType | string;
    hasError?: boolean;
    prefixClassName?: string;
    wrapperClassName?: string;
}

export const TextInputWithPrefix = forwardRef<
    HTMLInputElement,
    TextInputWithPrefixProps
>(
    (
        {
            wrapperClassName,
            _prefix: Prefix,
            className,
            prefixClassName,
            ...rest
        },
        ref
    ) => {
        const isPrefixString = typeof Prefix === "string";

        return (
            <div className={cn("relative group", wrapperClassName)}>
                <TextInputBasic
                    ref={ref}
                    className={cn("pl-9 ", className, {
                        "pl-10": isPrefixString,
                    })}
                    {...rest}
                />

                {!isPrefixString ? (
                    Prefix && (
                        <Prefix
                            className={cn(
                                "size-5 absolute left-2 text-muted/90 top-0 bottom-0 my-auto",
                                prefixClassName
                            )}
                        />
                    )
                ) : (
                    <p
                        className={cn(
                            "absolute left-2  text-gray-500 top-2.5",
                            prefixClassName
                        )}
                    >
                        {Prefix}
                    </p>
                )}
            </div>
        );
    }
);

TextInputWithPrefix.displayName = "TextInputWithPrefix";
