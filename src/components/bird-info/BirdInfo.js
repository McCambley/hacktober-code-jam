import React from "react";
import styled from "styled-components";

const Bird = styled.div`
  width: 200px;
  height: 100px;
  border: 2px solid gray;
  border-radius: 4px;
  color: #000000;
`;

const BirdDisplay = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  width: 100%;
  height: 100%;
`;

export default function BirdInfo() {
  return (
    <BirdDisplay>
      <Bird>Bird1</Bird>
      <Bird>Bird2</Bird>
      <Bird>Bird3</Bird>
      <Bird>Bird4</Bird>
    </BirdDisplay>
  );
}
