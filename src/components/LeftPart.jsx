// import React, { useState } from "react";
import styled from "styled-components";
import Buttons from "./Buttons";

export default function LeftPart() {
  return (
    <LeftPartWrapper>
      <Buttons />
    </LeftPartWrapper>
  );
}

const LeftPartWrapper = styled.div`
  border: 1px solid black;
  width: 72.5%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
