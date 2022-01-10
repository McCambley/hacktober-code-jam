import React from "react";
import {
  FormSection,
  InputContainer,
  Input,
  Label,
  Button,
  CurrentLocation,
  ButtonContainer,
} from "./styledForm";

export default function Form({
  double = false,
  displayZip,
  displayEnv,
  zipcode,
  environment,
  setZipcode,
  setEnvironment,
  handleSubmit,
  isSubmitting,
  displayLoc,
  page = "player",
  handleCurrentLocation,
}) {
  return (
    <FormSection
      onSubmit={(evt) => handleSubmit(evt, zipcode, environment)}
      double={double}
      page={page}
    >
      {displayZip && (
        <InputContainer>
          <Input
            id="zipcode"
            type="number"
            placeholder="119900"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            minlength="4"
            maxlength="5"
            required
          />
          <Label htmlFor="zipcode"> Enter zipcode</Label>
        </InputContainer>
      )}
      {displayEnv && (
        <InputContainer>
          <Input
            id="environment"
            type="text"
            placeholder="Mountains"
            value={environment}
            onChange={(e) => setEnvironment(e.target.value)}
            minlength="2"
            maxlength="80"
            pattern="[a-zA-Z]+"
            required
          />
          <Label htmlFor="environment">Enter landscape</Label>
        </InputContainer>
      )}
      <ButtonContainer>
        <CurrentLocation type="button" onClick={handleCurrentLocation} />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Loading..." : "Submit"}
        </Button>
      </ButtonContainer>
    </FormSection>
  );
}
