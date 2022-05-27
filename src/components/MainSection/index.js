import React from "react";

import mainStyles from "./MainSection.module.css";
import TopMain from "./TopMain";
import BottomMain from "./BottomMain";
import SliderRecetas from "../SliderRecetas";

export default function MainSection() {
  return (
    <main className={mainStyles.mainContainer}>
      <SliderRecetas />
      <TopMain />
      <BottomMain />
    </main>
  );
}
