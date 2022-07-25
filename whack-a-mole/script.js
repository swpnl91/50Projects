const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

//create a function to make a random time for mole to pop from the hole
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes){
  const index  = Math.floor(Math.random() * holes.length);
  const hole = holes[index];

  //prevent same hole from getting the same number
  if (hole === lastHole){
      return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}