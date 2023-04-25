// Ref: https://developer.mozilla.org/fr/docs/Web/API/Canvas_API
const canvas = document.getElementById("canvas");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const sizeElement = document.getElementById("size");
const colorElement = document.getElementById("color");
const clearElement = document.getElementById("clear");
const ctx = canvas.getContext("2d");

let size = 10;
let color = "black";
let x;
let y;
let isPressed = false;

const drawCircle = (x, y) => {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
};

const drawLine = (x1, y1, x2, y2) => {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
};

const updateSizeOnScreen = () => (sizeElement.innerText = size);

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});