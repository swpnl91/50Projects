const buttons = document.querySelectorAll('button');
let primaryOperand = '';
let secondaryOperand = '';
let operand = '';
let operand2 = '';
let savedOperator = '';
let results = '';
let operator = '';

getPrimaryOperand();
console.log(results);
function calculateNumber(primaryOperand, operator, secondaryOperand){
     results = eval(primaryOperand + operator + secondaryOperand);
     return results;
}