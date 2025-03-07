import PageHeader from "~/components/page-header";
import { Tab } from "@headlessui/react";
import { Fragment } from "react/jsx-runtime";
import { Button } from "~/components/button";
import { useNavigate } from "@remix-run/react";
import { useGetProfileDetails } from "~/routes/portal/home/profile/resources/index";
import SocialLinks from "~/components/social-links";
import { generateAvatar } from "~/utils/generate-avatar";
import InsureData from "~/components/insure-data";
import { PencilIcon } from "~/components/icons";
import { LoadingElement } from "~/components/loading-element";

const ProfilePage = () => {

    const { data: profileData, isLoading } = useGetProfileDetails()


    const navigate = useNavigate();

    const tabs = ["Education", "Achievements", "Saves"]


    return (
        <InsureData
            data={profileData}
            loading={isLoading}
            loadingElement={<LoadingElement/>}
        >
            <div className="flex-col relative p-1 md:p-4 gap-4 md:gap-12">
                <PageHeader title="Profile" hasFilter={false} hasSearch={false} />

                <div className="absolute top-[6%] md:top-[20%] right-[10%]">
                    <SocialLinks />
                </div>

                <div className="absolute bg-secondary rounded-full top-[19%] right-[30%]">
                    <Button 
                    className="text-textColor hover:opacity-80 hover:bg-gray-800"
                    onClick={() => navigate("edit", { state: profileData})}>
                        <PencilIcon className="size-6"/>
                    </Button>
                </div>

                <div className="hidden md:grid md:grid-cols-[1fr,2fr] items-start justify-between gap-4 mt-4 max-w-[50rem]">
                    <div className="flex flex-col items-center mt-8">
                        <img
                            src={generateAvatar(profileData?.profileImage ?? "user")}
                            alt="Profile Picture"
                            className="rounded-full  w-[9rem] h-[9rem]"
                        />
                    </div>
                    <div className="flex-grow">
                        <div className="flex flex-col mt-2">
                            <p className="text-textColor">{profileData?.name}</p>
                            <p className="text-textColor">{profileData?.email}</p>
                            <p className="text-textColor">{profileData?.phone}</p>
                            <p className="text-[#CED0DC] font-[300] text-sm break-words w-full">{profileData?.bio}</p>
                        </div>
                        <div className="flex flex-col mt-2 gap-2">
                            <p className="text-textColor">Sectors: <span className="text-[#CED0DC]">{profileData?.sectors?.map((sector) => sector.name).join(", ")}</span></p>
                            <p className="text-textColor">Technologies: <span className="text-[#CED0DC]">{profileData?.technologies?.map((sector) => sector.name).join(", ")}</span></p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 md:hidden">
                    <div className="flex items-center gap-4">
                        <img
                            src={generateAvatar(profileData?.profileImage ?? "user")}
                            alt="Profile Picture"
                            className="rounded-full w-[8rem] h-[8rem] md:w-[16rem] md:h-[8rem]"
                        />
                        <div>
                            <p className="text-textColor">{profileData?.name}</p>
                            <p className="text-textColor">{profileData?.email}</p>
                            <p className="text-textColor">{profileData?.phone}</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-[#CED0DC] text-sm font-light p-2">{profileData?.bio}</p>
                    </div>
                    <div className="flex flex-col py-4 gap-2">
                        <div>
                            <p className="text-textColor">Sectors: Business</p>
                        </div>
                        <div>
                            <p className="text-textColor">Technologes: React</p>
                        </div>
                    </div>
                </div>

                <div className="w-full px-2 pt-4 md:pt-10 md:px-12">
                    <Tab.Group>
                        <Tab.List className="flex gap-4">
                            {tabs.map((tab) => (
                                <Tab key={tab} as={Fragment}>
                                    {({ selected }) => (
                                        <button
                                            className={`pb-1 mx-2 border-b-2 transition-all ${selected ? "border-b-accent text-accent" : "border-transparent text-textColor"
                                                }`}
                                        >
                                            {tab}
                                        </button>
                                    )}
                                </Tab>
                            ))}
                        </Tab.List>

                        <Tab.Panels className="mt-4 text-textColor">
                            {tabs.map((tab) => (
                                <Tab.Panel key={tab} className="w-[90%] md:w-[60%]">
                                    {/* @ts-ignore */}
                                    <p className="p-4">{profileData?.tabContent[tab]}</p>
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>
                </div>

                <div className="flex justify-center md:pl-[20rem] mt-8 pl-0">
                    <Button
                        outline
                        onClick={() => navigate("/portal/home/profile/finish-profile-setup")}
                        className="border border-gray-400 rounded-md px-[6rem] text-xs bg-primary hover:opacity-80"
                    >
                        Update Your Profile
                    </Button>
                </div>
            </div>
        </InsureData>
    );
};

export default ProfilePage;
