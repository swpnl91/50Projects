const resultElement = document.getElementById("result");
const lengthElement = document.getElementById("length");
const uppercaseElement = document.getElementById("uppercase");
const lowercaseElement = document.getElementById("lowercase");
const numbersElement = document.getElementById("numbers");
const symbolsElement = document.getElementById("symbols");
const generateElement = document.getElementById("generate");
const clipboardElement = document.getElementById("clipboard");

// Random functions
// fromCharCode: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
// ASCII codes: https://www.w3schools.com/charsets/ref_html_ascii.asp
const getRandomLower = () =>
  String.fromCharCode(Math.floor(Math.random() * 26) + 97);

