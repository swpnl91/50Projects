//create a canvas object fro HTML element
const canvas = document.getElementById('canvas');

//create a 2d drawing object
const ctx = canvas.getContext('2d');

//calculate the clock radius by using the height
const radius = canvas.height / 2;