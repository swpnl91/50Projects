//Set date to countdown to:
let countDownFromDate = new Date('Feb 1, 2020 12:00:00').toDateString();
let countDownDate = new Date('Feb 1, 2020 12:00:00').getTime();

let x = setInterval(function(){
  let now = new Date().getTime();
  //get distance between current date to countdown date
  let distance = countDownDate - now;
  
  
}, 1000);