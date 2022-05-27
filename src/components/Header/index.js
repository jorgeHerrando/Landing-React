import React from "react";

import headerStyles from "./Header.module.css";

import Logo from "../../assets/img/logo.svg";
import Ellipse from "../../assets/img/ellipse.svg";
import EllipseFront from "../../assets/img/ellipseFront.png";

import Button from "../Button";

export default function Header() {
  return (
    <header>
      <div className={headerStyles.headerTopContainer}>
        <div className={headerStyles.logoContainer}>
          <img src={Logo} alt="logo" />
        </div>
      </div>
      <div className={headerStyles.headerBottomContainer}>
        <div className={headerStyles.picturesContainer}>
          <div className={headerStyles.backgroundPictureContainer}>
            <img src={Ellipse} alt="ellipse" />
            <div className={headerStyles.frontPictureContainer}>
              <img src={EllipseFront} alt="ellipse" />
            </div>
          </div>
        </div>
        <div className={headerStyles.infoContainer}>
          <div className={headerStyles.textContainer}>
            <h1>Alimentar bien a tu perro es más fácil que nunca</h1>
            <p>
              La nueva alimentación canina ha llegado. Con Kibus, podrás ofrecer
              a tu compañero comida sana, rica y recién cocinada de una forma
              fácil y cómoda
            </p>
          </div>
          <div className={headerStyles.buttonsContainer}>
            <Button type="buttonBookNow" title="Reserva Ahora" />
            <Button type="buttonMore" title="Quiero saber más" />
          </div>
        </div>
      </div>
    </header>
  );
}
