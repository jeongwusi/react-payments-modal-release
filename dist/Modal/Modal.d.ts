import { PropsWithChildren } from "react";
interface CardCompanyModalProps extends PropsWithChildren {
    onClose: () => void;
}
declare const Modal: ({ onClose, children }: CardCompanyModalProps) => JSX.Element;
export default Modal;
