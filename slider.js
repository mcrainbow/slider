"use strict";

const arrowLeft = document.querySelector(".left");
const arrowRight = document.querySelector(".right");
const slider = document.querySelector(".slider");
const items = document.querySelectorAll(".item");
const bottom = document.querySelector(".bottom");

// ! Variables
let slideNumber = 1;
const length = items.length;

const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * 598}px)`;
  slideNumber++;
};

// ! Some Work With Buttons

for (let i = 0; i < length; i++) {
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";

const resetBg = () => {
  buttons.forEach((button) => {
    button.style.removeProperty("background-color");
  });
};

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    resetBg();
    slideNumber = index + 1;
    slider.style.transform = `translateX(-${index * 598}px)`;
    button.style.backgroundColor = "white";
  });
});

// ! Slide change functions

const getFirstSlide = () => {
  slideNumber = 1;
  slider.style.transform = `translateX(${0}px)`;
};

const getLastSlide = () => {
  slider.style.transform = `translateX(-${(length - 1) * 598}px)`;
  slideNumber = length;
};

const prevSlide = () => {
  slider.style.transform = `translateX(-${(slideNumber - 2) * 598}px)`;
  slideNumber--;
};

const changeColor = () => {
  resetBg();
  buttons[slideNumber - 1].style.backgroundColor = "white";
};

// ! Events listeners

arrowLeft.addEventListener("click", () => {
  slideNumber === 1 ? getLastSlide() : prevSlide();
  changeColor();
});

arrowRight.addEventListener("click", () => {
  slideNumber < items.length ? nextSlide() : getFirstSlide();
  changeColor();
});
