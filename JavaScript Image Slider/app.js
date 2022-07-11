// create an array of image sources;
let images = [
  'image1.png', 'image2.png', 'image3.png','image4.png'
]

let i = 0;

//add initial image to canvas
let canvas = document.getElementById('canvas');

canvas.style.background = `url(./images/${images[0]})`

//add eventListeners to arrows
let arrows = document.querySelectorAll('.arrow');

arrows.forEach(function(arrow){
  
});