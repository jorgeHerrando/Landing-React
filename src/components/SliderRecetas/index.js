import React from "react";

import FoodCard from "./FoodCard";

import sliderStyles from "./SliderRecetas.module.css";

import pollo from "../../assets/img/food/pollo.png";
import salmon from "../../assets/img/food/salmon.png";
import cerdo from "../../assets/img/food/cerdo.png";

export default function SliderRecetas() {
  const recipes = [
    {
      name: "Pollo y Pimiento",
      image: pollo,
      text: "Energética, con ingredientes antioxidantes",
    },
    {
      name: "Salmón y Arroz",
      image: salmon,
      text: "Ipoalergénica, con Omega 3 y 6",
    },
    {
      name: "Cerdo y Calabaza",
      image: cerdo,
      text: "Para dar vitalidad, buena para el sistema inmune",
    },
  ];
  return (
    <section className={sliderStyles.container}>
      <div className={sliderStyles.innerContainer}>
        {recipes.map((recipe, i) => {
          return (
            <FoodCard
              title={recipe.name}
              text={recipe.text}
              image={recipe.image}
              key={`recipe_${i}`}
            />
          );
        })}
        <FoodCard
          title="Tu receta"
          text="Ayúdanos a decidir nuestra nueva receta"
          image={pollo}
        />
      </div>
    </section>
  );
}
