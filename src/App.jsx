import React from "react";
import styled from "styled-components";
import { LeftPart, RightPart } from "./components";

export default function App() {
  return (
    <AppWrapper>
      <LeftPart />
      <RightPart />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  overflow: hidden;
`;
