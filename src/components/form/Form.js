import React from "react";
import styled from "styled-components";

const FormSection = styled.form`
  width: 100%;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  grid-template-columns: ${({ double }) =>
    double ? `1fr 1fr 1fr` : `2fr 1fr`};
  justify-content: space-between;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%inherit;
`;
const Input = styled.input`
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
const Label = styled.label`
  width: 100%;
  padding: 0;
  padding-left: 12px;
  padding-top: 8px;
  color: #747474;
`;
const Button = styled.button`
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

  &:hover {
    background-color: #fff;
    color: #2b8dc0;
    border: 2px solid #2b8dc0;
  }
`;
export default function Form({ double = false, displayZip, displayEnv }) {
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("submitted");
  }
  return (
    <FormSection onSubmit={handleSubmit} double={double}>
      {displayZip && (
        <InputContainer>
          <Input
            id="zipcode"
            type="text"
            placeholder="119900"
            // value={""}
            minlength="5"
            maxlength="5"
            required
          />
          <Label htmlFor="zipcode"> Enter your zipcode here</Label>
        </InputContainer>
      )}
      {displayEnv && (
        <InputContainer>
          <Input
            id="environment"
            type="text"
            placeholder="Mountains"
            // value={""}
            minlength="2"
            maxlength="80"
            required
          />
          <Label htmlFor="environment">Enter an Environment here</Label>
        </InputContainer>
      )}
      <Button type="submit">Submit</Button>
    </FormSection>
  );
}
