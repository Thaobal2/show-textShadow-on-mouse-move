"use strict";

const container = document.querySelector(".container");
const text = document.querySelector("h1");
const distance = 1000;

function textShadow(e) {
  console.log(e);
  let { offsetX, offsetY } = e;

  if (container !== e.target) {
    offsetX = x + e.target.offsetLeft;
    offsetY = y + e.target.offsetTop;
  }

  const { offsetWidth, offsetHeight } = container;

  const xAxix = Math.round((offsetX / offsetWidth) * distance - distance / 2);
  const yAxis = Math.round((offsetY / offsetHeight) * distance - distance / 2);

  text.style.textShadow = `
    ${xAxix}px ${yAxis}px 0 rgba(255,0,255,0.7),
     ${xAxix * -1}px ${yAxis}px 0 rgba(0,255,255,0.7),
     ${yAxis}px ${xAxix * -1}px 0 rgba(0,255,0,0.7),
     ${yAxis * -1}px ${xAxix}px 0 rgba(0,0,255,0.7)
  `;
}

container.addEventListener("mousemove", textShadow);
