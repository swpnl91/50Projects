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

function drawClock(){
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius){
  let grad;
  //draw white circle for the face
  ctx.beginPath();
  ctx.arc(0,0,radius,0,2*Math.PI);
  ctx.fillStyle = "White";
  ctx.fill();
  // create a radial gradient (inner, middle, and outer edge of clock)
  grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, '#333');
  //define gradient as stroke style
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke(); 
  //draw the center of the clock
  ctx.beginPath();
  ctx.arc(0,0, radius*0.1,0,2*Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  let ang;
  let num;
  ctx.font = radius*0.15 + "px arial"; //set font at 15% of radius
  ctx.textBaseline = "middle"; //set text alignment to middle
  ctx.textAlign = "center"; //set text alignment to center
  for(num=1; num < 13; num++){ //calculate the print position for each number
      ang = num *Math.PI /6;
      ctx.rotate(ang);
      ctx.translate(0, -radius*0.85);
      ctx.rotate(-ang);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius*0.85);
      ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius){
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  //hour
  hour = hour%12;
  //calculate angle of hour hand
  hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
  //make hour hand 50% of canvas's radius
  drawHand(ctx, hour, radius*0.5, radius*0.07);
  //minute
  //calculate angle of minute hand
  minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
  //make minute hand 80% of canvas's radius
  drawHand(ctx, minute, radius*0.8, radius*0.07);
  //second
  //calculate angle of second hand
  second=(second*Math.PI/30);
  //make second hand 90% of canvas's radius
  drawHand(ctx, second, radius*0.9, radius*0.02);
}