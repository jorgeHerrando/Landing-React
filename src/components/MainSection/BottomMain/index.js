import React from "react";

import bottomMainStyles from "./BottomMain.module.css";

import Device from "../../../assets/img/device.png";
import DeviceDesktop from "../../../assets/img/main/deviceDesktop.png";
import ProgramIcon from "../../../assets/img/programIcon.svg";
import waterIcon from "../../../assets/img/waterIcon.svg";
import quantityIcon from "../../../assets/img/quantityIcon.svg";
import foodIcon from "../../../assets/img/foodIcon.svg";
import cleanIcon from "../../../assets/img/cleanIcon.svg";
import appIcon from "../../../assets/img/appIcon.svg";

export default function BottomMain() {
  const icons = [
    { image: ProgramIcon, text: "Programmable 24h" },
    { image: waterIcon, text: "Agua siempre disponible" },
    { image: quantityIcon, text: "Cantidad personalizable" },
    { image: foodIcon, text: "Historial de las comidas" },
    { image: cleanIcon, text: "Fácil de usar y lavar" },
    { image: appIcon, text: "App para iOS y Android" },
  ];
  return (
    <>
      <div className={bottomMainStyles.bottomMainContainer}>
        <div
          className={`${bottomMainStyles.mainImageContainer} ${bottomMainStyles.imageMobile}`}
        >
          <img src={Device} alt="device" />
        </div>
        <div
          className={`${bottomMainStyles.mainImageContainer} ${bottomMainStyles.imageDesktop}`}
        >
          <img src={DeviceDesktop} alt="device" />
        </div>
        <div className={bottomMainStyles.iconsContainer}>
          {icons.map((icon, i) => {
            return (
              <>
                <div className={bottomMainStyles.oneIconContainer}>
                  <div className={bottomMainStyles.iconImageContainer}>
                    <img src={icon.image} alt="device" />
                  </div>
                  <div className={bottomMainStyles.iconTextContainer}>
                    <p>{icon.text}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
