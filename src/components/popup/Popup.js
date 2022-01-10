import React from "react";
import close from "../../images/close.svg";
import { Modal, Container, CloseIcon } from "./styledPopup";

export default function Popup({ isOpen, children, toggleClose }) {
  return (
    <Modal className={isOpen ? "show" : ""}>
      <Container>
        {children}
        <CloseIcon src={close} onClick={toggleClose} />
      </Container>
    </Modal>
  );
}
