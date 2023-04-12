"use strict";
window.addEventListener("load", start);

function start() {
  console.log("Chartapp kører");

  const bars = document.querySelectorAll(".bar");
  const firstBar = bars[0];

  let h = 40;
  firstBar.style.height = `${h}px`;
}
