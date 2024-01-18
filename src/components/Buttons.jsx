import React, { useState } from "react";
import styled from "styled-components";
import exportAsImage from "../utils/exportAsImage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Buttons({
  setIsImgCaptured,
  downloadDiv,
  isImgCaptured,
}) {
  const btns = ["CAPTURE", "RETAKE", "POST", "SAVE"];
  const [selectedBtn, setSelectedBtn] = useState();

  // toast options
  const toastOptions = {
    position: "bottom-left",
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  const handleClick = (e, index) => {
    setSelectedBtn(index);
    if (e.target.innerText === "CAPTURE") {
      setIsImgCaptured(true);
    } else if (e.target.innerText === "RETAKE") {
      setIsImgCaptured(false);
    } else if (e.target.innerText == "SAVE") {
      if (isImgCaptured) {
        exportAsImage(downloadDiv, "loreal-paris-photo-booth");
        toast.success("Your image is successfully downloaded", toastOptions);
      } else {
        toast.error("Please capture your image", toastOptions);
      }
    }
  };
  return (
    <ButtonsWrapper>
      <div className="btns-container">
        {btns &&
          btns.map((btn, index) => (
            <div
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
              <button onClick={e => handleClick(e, index)}>{btn}</button>
            </div>
          ))}
      </div>
      <ToastContainer />
    </ButtonsWrapper>
  );
}

const ButtonsWrapper = styled.div`
  .btns-container {
    width: 63.5%;
    right: 24.55vw;
    top: 16vw;
    display: flex;
    flex-direction: column;
    gap: 1.5vw;
    position: absolute;
    .btn {
      border-bottom: 0.4vh solid rgba(241, 241, 241, 0.7);
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
        position: relative;
      }
    }

    .selected-btn {
      border-color: #f1f1f1;
      button {
        background-color: #f1f1f1;
      }
    }
    #exceptional-btn-one {
      width: 99.5%;
    }
    #exceptional-btn-two {
      width: 98.5%;
    }
  }
`;
