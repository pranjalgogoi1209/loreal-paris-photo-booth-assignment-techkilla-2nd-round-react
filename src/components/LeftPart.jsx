import React, { useState } from "react";
import styled from "styled-components";
import Buttons from "./Buttons";
import WebcamFrame from "./WebcamFrame";

export default function LeftPart() {
  const [isImgCaptured, setIsImgCaptured] = useState(false);
  return (
    <LeftPartWrapper>
      <Buttons setIsImgCaptured={setIsImgCaptured} />
      <WebcamFrame isImgCaptured={isImgCaptured} />
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

  .webcam {
    position: absolute;
    top: 10vw;
    left: 35vw;
    /* overflow: hidden; */
  }
`;
