import styled from "styled-components";

export const Modal = styled.section`
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

export const Container = styled.div`
  background-color: #fff;
  /* display: grid; */
  /* grid-template-columns: 1fr 1fr; */
  border-radius: 24px;
  /* gap: 28px; */
  padding: 36px;
  position: relative;
  max-width: 75%;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 28px;
    max-width: 80%;
  }
`;

export const CloseIcon = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
  top: -32px;
  right: -32px;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    top: -42px;
    right: 0px;
  }
`;
