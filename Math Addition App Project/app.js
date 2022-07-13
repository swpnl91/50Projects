//generate random numbers
let firstNumber = parseInt(Math.random()*10);
let secondNumber = parseInt(Math.random()*10);

//get the total
let total = firstNumber + secondNumber;

//display numbers on the canvas
let primary = document.getElementById('primary-number');
primary.innerHTML = `<p>${firstNumber}</p>`;