const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

console.log(buttons);

buttons.forEach(function(button){
  button.addEventListener('click', function(e){
    console.log(e.target);
    
  })
})