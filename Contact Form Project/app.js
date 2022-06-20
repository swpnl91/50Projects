let sendButton = document.getElementById('send');
let resetButton = document.getElementById('reset');
let form = document.getElementById('form');

form.addEventListener('submit', function(e){
  e.preventDefault();
})

resetButton.addEventListener('click', function(){
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let message = document.getElementById('message');

  name.value = '';
  email.value = '';
  message.value = '';
})