import styled from "styled-components";
import Form from "../form/Form";
import mapImage from "../../images/map.png";

export const Section = styled.section`
  padding: 0px 164px 90px;
  display: grid;
  gap: 30px 62px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "title link"
    "directions form"
    "places map";
  box-sizing: border-box;

  @media (max-width: 1440px) {
    padding: 0 40px 115px;
  }

  @media (max-width: 768px) {
    padding: 0 32px 76px;
    grid-template-columns: 1fr 1fr;
    gap: 28px 8px;
    grid-template-areas:
      "title link "
      "directions directions"
      "form form"
      "places places"
      "map map";
  }
`;

export const Title = styled.h3`
  grid-area: title;

  margin: 0;
  width: 100%;
  font-family: "Bitter", serif;
  font-weight: 700;
  font-size: 36px;
  text-transform: uppercase;
  line-height: 60px;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 36px;
  }
`;
export const Link = styled.a`
  grid-area: link;
  font-size: 24px;
  line-height: 24px;
  align-self: center;
  justify-self: flex-end;
  cursor: pointer;
  transition: opacity 0.15s ease;
  color: rgba(116, 116, 116, 1);

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 36px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 44px;
  }
`;

export const Directions = styled.p`
  grid-area: directions;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  margin: 0;
  @media (max-width: 1440px) {
    font-size: 18px;
    line-height: 24px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const FormSection = styled(Form)`
  grid-area: form;
`;

export const Places = styled.div`
  grid-area: places;
`;

export const Map = styled.div`
  grid-area: map;
  background-image: url(${mapImage});
  background-position: center;
  background-size: cover;
  border-radius: 24px;
  /* min-height: 100%; */
  /* width: 100%; */
  @media (max-width: 768px) {
    min-height: 500px;
  }
`;
