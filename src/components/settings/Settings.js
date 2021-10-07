import React from "react";
import styled from "styled-components";
import Form from "../form/Form";

export default function Settings() {
  return (
    <>
      <Form double={true} displayZip={true} displayEnv={true}></Form>
    </>
  );
}
