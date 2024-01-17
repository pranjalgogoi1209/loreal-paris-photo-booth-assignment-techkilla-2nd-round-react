import React, { useState } from "react";
import styled from "styled-components";
import exportAsImage from "../utils/ExportAsImage";

export default function Buttons({
  setIsImgCaptured,
  downloadDiv,
  isImgCaptured,
}) {
  const btns = ["CAPTURE", "RETAKE", "POST", "SAVE"];
  const [selectedBtn, setSelectedBtn] = useState();

  const handleClick = (e, index) => {
    setSelectedBtn(index);
    if (e.target.innerText === "CAPTURE") {
      setIsImgCaptured(true);
    } else if (e.target.innerText === "RETAKE") {
      setIsImgCaptured(false);
    } else if (e.target.innerText == "SAVE") {
      if (isImgCaptured) {
        exportAsImage(downloadDiv, "loreal-paris-photo-booth");
      }
    }
  };
  return (
    <ButtonsWrapper>
      <div className="btns-container">
        {btns &&
          btns.map((btn, index) => (
            <div
              onClick={e => handleClick(e, index)}
              key={index}
              id={
                index === 2
                  ? "exceptional-btn-one"
                  : index === 3
                  ? "exceptional-btn-two"
                  : ""
              }
              className={`btn ${index === selectedBtn ? "selected-btn" : ""}`}
            >
              <button>{btn}</button>
            </div>
          ))}
      </div>
    </ButtonsWrapper>
  );
}

const ButtonsWrapper = styled.div`
  .btns-container {
    /* width: 83.5%; */
    width: 64%;
    right: 24.2vw;
    top: 16vw;
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    gap: 1.5vw;
    position: absolute;
    .btn {
      border-bottom: 2px solid rgba(241, 241, 241, 0.7);
      width: 100%;
      transition: border-color ease 0.5s;
      button {
        font-size: 2.3vw;
        font-weight: bold;
        padding: 0.5vw 1vw;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        outline: none;
        border-top-left-radius: 2vw;
        border-bottom-right-radius: 2vw;
        color: #ea1879;
        width: 15.2vw;
        cursor: pointer;
        background-color: rgba(241, 241, 241, 0.7);
        transition: background-color ease 0.5s;
      }
    }
    .selected-btn {
      border-color: #f1f1f1;
      button {
        background-color: #f1f1f1;
      }
    }
    #exceptional-btn-one {
      width: 99.6%;
    }
    #exceptional-btn-two {
      width: 94%;
    }
  }
`;
