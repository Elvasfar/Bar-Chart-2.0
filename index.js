"use strict";
window.addEventListener("load", start);

const data = [
  16, 28, 4, 16, 22, 7, 1, 15, 19, 30, 32, 29, 3, 5, 27, 21, 6, 11, 13, 17, 4,
  10, 12, 31, 30, 1, 4, 17, 11, 5, 28, 29, 21, 17, 15, 19, 12, 9, 3, 8,
];

function start() {
  console.log("Chartapp kører");

  const bars = document.querySelectorAll(".bar");
  const firstBar = bars[0];

  let h = (data[0] / 32) * 100;
  firstBar.style.height = `${h}px`;
}
