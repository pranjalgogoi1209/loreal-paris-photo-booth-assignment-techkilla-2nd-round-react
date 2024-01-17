import React, { useState } from "react";
import styled from "styled-components";
import Buttons from "./Buttons";
import WebcamFrame from "./WebcamFrame";

export default function LeftPart() {
  const [isImgCaptured, setIsImgCaptured] = useState(false);
  const [downloadDiv, setDownloadDiv] = useState();
  return (
    <LeftPartWrapper>
      <Buttons
        setIsImgCaptured={setIsImgCaptured}
        downloadDiv={downloadDiv}
        isImgCaptured={isImgCaptured}
      />
      <span className="home">
        <i class="fa-solid fa-house"></i>Home
      </span>
      <WebcamFrame
        isImgCaptured={isImgCaptured}
        setDownloadDiv={setDownloadDiv}
      />
    </LeftPartWrapper>
  );
}

const LeftPartWrapper = styled.div`
  /* border: 1px solid black; */
  width: 72.5%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .home {
    position: absolute;
    top: 7.5vw;
    left: 54.5vw;
    display: flex;
    align-items: center;
    gap: 0.3vw;
    color: #f1f1f1;
    font-size: 1.4vw;
    i {
      font-size: 1vw;
    }
    cursor: pointer;
  }
  .webcam {
    position: absolute;
    top: 10vw;
    left: 35vw;
    /* overflow: hidden; */
  }
`;
