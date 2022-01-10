import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 255px 1fr;
  gap: 16px;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 1440px) {
    grid-template-columns: 210px 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ImageDiv = styled.div`
  cursor: pointer;
  transition: opacity 0.15s ease;
  border-radius: 24px;
  overflow: hidden;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  min-height: 180px;
  min-width: 100%;

  &:hover {
    opacity: 0.8;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const Title = styled.h3`
  margin: 0;
  font-family: "Bitter", serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 10px;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.15s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 1440px) {
    font-size: 18px;
    line-height: 24px;
  }
`;
export const Subtitle = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  @media (max-width: 1440px) {
    font-size: 18px;
    line-height: 24px;
  }
`;
