import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Webcam from "react-webcam";
import frame from "./../assets/frame.png";

export default function WebcamFrame({ isImgCaptured, setDownloadDiv }) {
  const webRef = useRef();
  const exportRef = useRef();
  const [capturedImg, setCapturedImg] = useState();
  useEffect(() => {
    if (isImgCaptured) {
      setCapturedImg(webRef.current.getScreenshot());
    } else {
      setCapturedImg("");
    }
  }, [isImgCaptured]);

  useEffect(() => {
    if (exportRef) {
      setDownloadDiv(exportRef.current);
    }
  }, [exportRef]);

  return (
    <WebcamWrapper className="webcam" ref={exportRef}>
      <div className="webcam-container">
        <Webcam id="webcam" ref={webRef} />
        {capturedImg && (
          <img src={capturedImg} alt="captured-img" className="captured-img" />
        )}
      </div>
      <img src={frame} alt="frame" className="frame" />
    </WebcamWrapper>
  );
}
const WebcamWrapper = styled.div`
  z-index: 1;
  position: relative;
  width: 25vw;
  height: 30.1vw;
  display: flex;
  justify-content: center;
  overflow: hidden;
  box-shadow: -0.1vw 0.3vw 0.5vw rgba(31, 31, 31, 0.4);
  .webcam-container {
    display: flex;
    justify-content: center;
    position: relative;
    width: 96%;
    height: 98%;
    background-color: #f4695a;
    overflow: hidden;
    #webcam {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .captured-img {
      position: absolute;
      transform: scale(1.64, 1.001);
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
    }
  }
  .frame {
    width: 103%;
    height: 103%;
    position: absolute;
    top: 0;
  }
`;
