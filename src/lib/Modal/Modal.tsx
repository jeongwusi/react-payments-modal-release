import styled from "styled-components";
import { PropsWithChildren } from "react";

interface CardCompanyModalProps extends PropsWithChildren {
  onClose: () => void;
}
const ModalBackground = styled.section`
  position: absolute;
  background-color: #344054;
  opacity: 0.33;
  width: 370px;
  height: 750px;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
`;

const ModalContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 30px;
  padding: 15px;
  position: absolute;
  background-color: white;
  width: 370px;
  height: 225px;
  border-radius: 10px;
  top: 545px;
  font-size: 11px;
  font-weight: bolder;
`;

const Modal = ({ onClose, children }: CardCompanyModalProps) => {
  return (
    <>
      <ModalBackground onClick={onClose} />
      <ModalContainer>{children}</ModalContainer>
    </>
  );
};

export default Modal;
