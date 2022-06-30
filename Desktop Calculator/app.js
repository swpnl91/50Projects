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

function saveOperator(operator){
    savedOperator = operator;
    return savedOperator;
}

function getPrimaryOperand(){
    buttons.forEach(function(button){
        button.addEventListener('click', function(e){

        operand = e.target.textContent
            
         if (operand !== "0" && operand !== "+" && operand !== "-" && operand !== "X" && operand !== "÷" && operand !== "=" && operand !== "C"){
                primaryOperand += e.target.textContent;
                console.log(primaryOperand);
            } else if (operand === "+" || operand === "-" || operand === "X" || operand === "÷" || operand === "=" || operand !== "C"){
                operator = operand;
                getSecondaryOperand(operator);
            }
        })
    })   
}