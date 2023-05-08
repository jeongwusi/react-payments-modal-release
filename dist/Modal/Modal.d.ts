import { PropsWithChildren } from "react";
interface CardCompanyModalProps extends PropsWithChildren {
    onOpen?: () => void;
    onClose: () => void;
}
declare const Modal: ({ onOpen, onClose, children }: CardCompanyModalProps) => JSX.Element;
export default Modal;
