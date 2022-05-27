import React from "react";

import sliderStyles from "../SliderRecetas.module.css";
import RightArrow from "../../../assets/img/rightArrow.svg";

export default function FoodCard({ title, text, image }) {
  return (
    <article className={sliderStyles.cardContainer}>
      <div className={sliderStyles.imgContainer}>
        <img src={image} alt={title} />
      </div>
      <div className={sliderStyles.bottomCardContainer}>
        {title !== "Tu receta" && (
          <>
            <h4 className={sliderStyles.title}>{title}</h4>
            <p>{text}</p>
          </>
        )}
        {title === "Tu receta" && (
          <>
            <button
              className={`${sliderStyles.buttonRecipe} ${sliderStyles.title}`}
            >
              <span>{title}</span>
              <img src={RightArrow} alt="arrow" />
            </button>
            <p>{text}</p>
          </>
        )}
      </div>
    </article>
  );
}
