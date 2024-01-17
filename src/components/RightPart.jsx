import React from "react";
import styled from "styled-components";
import rightImg from "./../assets/right-img.png";

export default function RightPart() {
  return (
    <RightPartWrapper
      style={{
        background: `url(${rightImg})`,
        backgroundPosition: "left",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    ></RightPartWrapper>
  );
}

const RightPartWrapper = styled.div`
  width: 28.5%;
  height: 100%;
`;
