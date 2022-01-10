import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.section`
  padding: 68px 164px;
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr 1fr;
  box-sizing: border-box;
  @media (max-width: 1440px) {
    padding: 70px 40px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 24px 32px;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 24px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 768px) {
    grid-row: 1; /* NEW */
  }
`;

export const Title = styled.h3`
  margin: 0;
  text-transform: uppercase;
  font-family: "Playfair Display", serif;
  font-family: "Bitter", serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 36px;
  margin-bottom: 50px;
  @media (max-width: 1440px) {
    font-size: 24px;
    line-height: 60px;
  }
`;
export const Subtitle = styled.p`
  margin: 0;
  margin-bottom: 30px;
  font-size: 24px;
  line-height: 42px;
  font-weight: 400;
  @media (max-width: 1440px) {
    font-size: 18px;
    line-height: 24px;
  }
`;
export const NewLink = styled(Link)`
  font-size: 24px;
  line-height: 24px;
  color: rgba(116, 116, 116, 1);
  cursor: pointer;
  transition: opacity 0.15s ease;
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 1440px) {
    font-size: 18px;
    line-height: 24px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 44px;
  }
`;
