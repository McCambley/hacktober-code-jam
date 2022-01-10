import styled from "styled-components";
import location from "../../images/location.svg";
import locationActive from "../../images/location-active.svg";

export const FormSection = styled.form`
  width: 100%;
  display: grid;
  gap: 16px;
  /* grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  grid-template-columns: ${({ double }) =>
    double ? `1fr 1fr 1fr` : `2fr 1fr`}; */
  grid-template-columns: ${({ page }) => {
    if (page === "player") {
      return `1fr 1fr 1fr`;
    } else if (page === "landing") {
      return `3fr 2fr`;
    }
  }};
  justify-content: space-between;
  grid-area: form;

  @media (max-width: 1024px) and (orientation: portrait) {
    gap: 8px;
  }

  @media (max-width: 768px) and (orientation: portrait) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%inherit;
`;
export const Input = styled.input`
  width: 100%;
  height: 56px;
  box-sizing: border-box;
  background-color: #f2f2f2;
  font-size: 24px;
  line-height: 24px;
  color: #747474;
  border: none;
  padding: 16px 12px;
  border-radius: 10px;
`;
export const Label = styled.label`
  width: 100%;
  padding: 0;
  padding-left: 12px;
  padding-top: 8px;
  color: #747474;
`;
export const ButtonContainer = styled.div`
  display: grid;
  gap: 16px;
  grid-template-areas: "a b";

  @media (max-width: 1024px) and (orientation: portrait) {
    gap: 8px;
  }

  @media (max-width: 768px) and (orientation: portrait) {
    grid-template-areas: "b b b a";
    gap: 12px;
  }
`;

export const Button = styled.button`
  height: 56px;
  background-color: #2b8dc0;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 24px;
  line-height: 24px;
  border: 2px solid #2b8dc0;
  cursor: pointer;
  transition: all 0.15s ease;
  grid-area: b;

  &:hover {
    background-color: #fff;
    color: #2b8dc0;
    border: 2px solid #2b8dc0;
  }
  @media (max-width: 1440px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const CurrentLocation = styled.button`
  background-image: url(${location});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 56px;
  background-color: #2b8dc0;
  border: none;
  border-radius: 8px;
  border: 2px solid #2b8dc0;
  padding: 0;
  cursor: pointer;
  grid-area: a;

  transition: all 0.15s ease;

  &:hover {
    background-color: #fff;
    background-image: url(${locationActive});
    color: #2b8dc0;
  }
`;
