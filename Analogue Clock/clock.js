//create a canvas object fro HTML element
let canvas = document.getElementById('canvas');

//create a 2d drawing object
let ctx = canvas.getContext('2d');

//calculate the clock radius by using the height
let radius = canvas.height / 2;

//remap the x and y axis to the center of the canvas
ctx.translate(radius, radius);

//reduce clock radius by 90%
radius = radius * 0.90;

setInterval(drawClock, 1000); //run the drawClock function every second.