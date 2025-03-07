import { Outlet } from "@remix-run/react";
import Modal from "~/components/modal";
import useRouteModal from "~/hooks/useRouteModal";

const LoginFormLayout = () => {
    const { open, closeModal } = useRouteModal();
    return (
        <Modal open={open} onClose={closeModal}>
            <Modal.Panel size={"xs"} className={"md:w-[30rem] pb-[3rem]"}>
                <Modal.Header
                    title={"Sign in"}
                    subtitle={""}
                />
                <Modal.Content className={"space-y-3"}>
                    <Outlet />
                </Modal.Content>
            </Modal.Panel>x
        </Modal>
    );
};
export default LoginFormLayout;
