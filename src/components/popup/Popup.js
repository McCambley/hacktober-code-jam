import React from "react";
import styled from "styled-components";
import close from "../../images/close.svg";

const Modal = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.4);
  visibility: hidden;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  &.show {
    visibility: visible;
    opacity: 1;
    transition: visibility 0.3s ease, opacity 0.3s ease;
  }
`;

const Container = styled.div`
  background-color: #fff;
  /* display: grid; */
  /* grid-template-columns: 1fr 1fr; */
  border-radius: 24px;
  /* gap: 28px; */
  padding: 36px;
  position: relative;
`;

const CloseIcon = styled.img`
  position: absolute;
  top: -24px;
  right: -24px;
`;

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