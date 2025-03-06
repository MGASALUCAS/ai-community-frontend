import { FC } from "react";
import { AvatarCard, AvatarCardLoading } from "~/components/avatar";
import Badge from "~/components/badge";
import { ComboBoxOptionProp } from "~/components/form-controls/combobox-input";
import { UserIcon } from "~/components/icons";
import SkeletonLoader from "~/components/skeleton-loader";
import { SelectInputOptionType } from "~/utils/zod-common";

interface UserProfileOption extends SelectInputOptionType {
    position: string;
    userNumber: string;
    avatar?: string;
}

export type UserComboboxOptionProps = ComboBoxOptionProp<UserProfileOption>;

const UserComboboxOption: FC<UserComboboxOptionProps> = ({ option }) => {
    const { label, position, avatar, userNumber } = option;
    return (
        <div className={"items-between pr-3"}>
            <AvatarCard
                swap
                title={label}
                subtitle={userNumber}
                Icon={UserIcon}
                imageUrl={avatar}
            />

            {!!position && (
                <Badge
                    type={"disabled"}
                    className={"max-w-[5rem] px-3 truncate  whitespace-nowrap"}
                >
                    {position}
                </Badge>
            )}
        </div>
    );
};
export default UserComboboxOption;

export const UserComboboxOptionLoading = () => {
    return (
        <div
            className={
                "items-between  odd:bg-surface-container/70 rounded-lg p-3"
            }
        >
            <div className={"flex items-center gap-2 "}>
                <SkeletonLoader className={"size-4 bg-primary/20"} />
                <AvatarCardLoading
                    className={"size-9 bg-primary/20"}
                    titleClassName={"w-16  bg-primary/20"}
                    subtitleClassName={"w-32 bg-primary/20"}
                />
            </div>

            <SkeletonLoader
                className={"w-20 py-3.5 rounded-full bg-primary/20"}
            />
        </div>
    );
};
