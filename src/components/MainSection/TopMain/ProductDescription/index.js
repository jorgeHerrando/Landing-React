import React from "react";

import descriptionStyles from "./Description.module.css";

import Button from "../../../Button";

export default function ProductDescription() {
  return (
    <>
      <div className={descriptionStyles.description}>
        <div className={descriptionStyles.descriptionTop}>
          <h3 className={descriptionStyles.title}>
            Mejor para ellos, más fácil y cómodo para ti
          </h3>
          <p>
            Con Kibus, nunca tendrás que preocuparte de cómo ofrecer una dieta
            sana y natural a tu perro de forma cómoda y rápida. Nuestro
            dispositivo cocina automáticamente la cantidad exacta en cada comida
            y hasta lo puedes programar a distancia a través de la App. Tu perro
            aprovechará comida de calidad casera, con el mínimo esfuerzo
          </p>
        </div>
        <div className={descriptionStyles.descriptionButtons}>
          <Button type="buttonBookNow" title="Reserva Ahora" />
          <Button type="buttonMore" title="Quiero saber más" />
        </div>
      </div>
    </>
  );
}
