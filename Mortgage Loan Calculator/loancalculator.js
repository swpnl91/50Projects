function computeLoan(){
  const amount = document.querySelector('#amount').value;
  const interest_rate = document.querySelector('#interest_rate').value;
  const months = document.querySelector('#months').value;
  const interest = (amount * (interest_rate * 0.01)) / months;
  let payment = ((amount / months) + interest).toFixed(2); //calculate monthly payment

  //regedit to add a comma after every three digits
  payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //\B looks for a word boundary, ? says what to look for, \d looks for 3 digits in a row
  document.querySelector('#payment').innerHTML = `Monthly Payment = ${payment}`
}







////////////    INTERVIEW MOCK


var foo = 1
var foobar = function() {
  console.log(foo)
  var foo = 2
}
foobar()

///////

const user = {
  name: 'Raj',
  location: {
    city: 'NY',
    state: 'NY'
  }
};

const copy = { ...user, user..oc }; //shallow copy

copy.location.city = 'Albany';
console.log('original: ', user.location); 
console.log('copy:', copy.location); 

//////

// Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5

for(let i = 1; i<=100; i++) {

	let string = ""
  
  if(i%3 === 0) {
  	string += "fizz"
  }
   if(i%5 === 0) {
  	string += "buzz"
  }
  
  console.log(string ? string : i)




	if(i%3 === 0) {
  	if(i%5 === 0) {
  		console.log("fizzbuzz");
  	} else {
    		console.log("fizz");
    }
  } else if(i%5 ===0) {
  	console.log("buzz");
  } else {
  	console.log(i);
  } 
}

///////


// Make this work:

duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]

const arr = [1,2,3,4,5];

const duplicate = function (arr) {
	let arr2 = arr;
	arr.forEach(element => {
  	arr2.push(element);
  })
  return arr2;
}

const duplicate = function (arr) {
	return arr.concat(arr);
}

const duplicate = function (arr) {
	return [..arr, ...arr]
}


//////

// What will be returned by each of these?
console.log("hello" || "world") 
console.log("foo" && "bar") 



///////

// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.


queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12


queueTime(arr, n) {
	let tills = {};
  
	for(let i = 0; i<arr.length ; i++) {
  	
  }
}