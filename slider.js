"use strict";

const arrowLeft = document.querySelector(".left");
const arrowRight = document.querySelector(".right");
const slider = document.querySelector(".slider");
const items = document.querySelectorAll(".item");

let slideNumber = 1;

arrowLeft.addEventListener("click", () => {});

arrowRight.addEventListener("click", () => {
  if (slideNumber < items.length) {
    slider.style.transform = `translateX(-${slideNumber * 500}px)`;
  } else {
    slideNumber = 1;
    console.log(slideNumber);
    slider.style.transform = `translateX(${0}px)`;
    return 0;
  }
  slideNumber++;
});
