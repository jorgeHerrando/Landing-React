import React from "react";

import SliderDogs from "./SliderDogs";
import ProductDescription from "./ProductDescription";
import topMainStyles from "./TopMain.module.css";

export default function TopMain() {
  return (
    <>
      <div className={topMainStyles.topMainContainer}>
        <SliderDogs />
        <ProductDescription />
      </div>
    </>
  );
}
