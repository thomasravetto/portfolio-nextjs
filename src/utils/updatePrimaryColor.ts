import { useEffect } from "react";

function updatePrimaryColor () {
  const colors = [
    "#FF5733", // Bright Orange
    "#33FF57", // Lime Green
    "#57C7FF", // Sky Blue
    "#FF33A6", // Hot Pink
    "#FFD433", // Golden Yellow
    "#33FFF3", // Aqua Blue
    "#FF5733", // Fiery Red
    "#B833FF", // Purple
    "#33FFA1", // Mint Green
    "#FF5733", // Coral
    "#FF33E9", // Neon Pink
    "#33FFCA", // Turquoise
    "#FFA533", // Tangerine
    "#A5FF33", // Lime
    "#33FFD4", // Teal
    "#FF6D33", // Red-Orange
    "#33FF93", // Seafoam Green
    "#FF335E", // Magenta
    "#33FFE0", // Electric Blue
    "#FF33B2", // Fuchsia
  ];

  const today = new Date().getDate() % 20;
  const root = document.documentElement;

  if (today > 19) {
    today = 8;
  }

  root.style.setProperty("--primary", colors[today]);
  return;
};
