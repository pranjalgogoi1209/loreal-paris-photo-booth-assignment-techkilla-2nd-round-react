import React from "react";
import styled from "styled-components";
import rightImg from "./../assets/right-img.png";

export default function RightPart() {
  return (
    <RightPartWrapper
    /* style={{
        background: `url(${rightImg})`,
        backgroundPosition: "left",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }} */
    >
      <img src={rightImg} alt="right-img" />
    </RightPartWrapper>
  );
}

const RightPartWrapper = styled.div`
  width: 29%;
  height: 100%;
  /* border: 1px solid red; */
  img {
    /* border: 1px solid black; */
    height: 100%;
    width: 100%;
  }
`;
