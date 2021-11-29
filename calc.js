let output = document.querySelector('.output');
/*declare the following variables and types
  num1 as number
  num2 as number
  operand as string
  
  Figure out how to set the values of num1 and num2 as the buttons are clicked
  */
let operands_arr = ["+", "-", "/", "*"];
var valid_operands;
(function (valid_operands) {
    valid_operands[valid_operands["+"] = 0] = "+";
    valid_operands[valid_operands["-"] = 1] = "-";
    valid_operands[valid_operands["/"] = 2] = "/";
    valid_operands[valid_operands["*"] = 3] = "*";
})(valid_operands || (valid_operands = {}));
;
let test = [1];
console.log(test.includes(1));
document.querySelector('.calc').addEventListener('click', (evt) => {
    let button = evt.target;
    if (button.className.indexOf('num') !== -1) {
        console.log(button.innerHTML);
        output.value += button.innerHTML;
    }
    if (button.className.indexOf('operator') !== -1) {
        console.log(button.innerHTML);
        output.value += button.innerHTML;
    }
    if (button.className.indexOf('equal') !== -1) {
        console.log(button.innerHTML);
        let calculation = calculate( /*pass in params here*/);
        output.value = calculation.toString();
    }
    /* create another condition to clear the value of the input when C is pressed*/
});
//create a function that takes in 2 numbers and a string (operand)
function calculate( /*You fill in here*/) {
    /* based on the operand, find the correct value of the 2 numbers.  i.e., 4+5=9, 4*5=20, etc
    return that value
    */
    let input = output.value;
    let operands_regex = /\+|-|\/|\*/;
    console.log(input);
    console.log(input.split(operands_regex));
    let operands = input.split("").filter(item => operands_arr.includes(item)).map(item => item);
    let numbers = input.split(operands_regex).map(item => parseInt(item));
    console.log(operands, numbers);
    return 0;
}
