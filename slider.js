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

// ! Events listeners

arrowLeft.addEventListener("click", () => {
  slideNumber === 1 ? getLastSlide() : prevSlide();
});

arrowRight.addEventListener("click", () => {
  slideNumber < items.length ? nextSlide() : getFirstSlide();
});
