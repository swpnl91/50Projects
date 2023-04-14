const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");

let activeSlide = 0;

const setBackground = () => {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
};