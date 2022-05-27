import React from "react";

import buttonStyles from "./Button.module.css";

import arrowButton from "../../assets/img/arrowButton.svg";

export default function Button({ type, title }) {
  return (
    <>
      {type === "buttonBookNow" && (
        <button
          className={`${buttonStyles.button} ${buttonStyles.buttonBookNow}`}
        >
          {title}
        </button>
      )}

      {type === "buttonMore" && (
        <button className={`${buttonStyles.button} ${buttonStyles.buttonMore}`}>
          <span>{title}</span>
          <span className={buttonStyles.arrowContainer}>
            <img src={arrowButton} alt="arrow" />
          </span>
        </button>
      )}
    </>
  );
}
