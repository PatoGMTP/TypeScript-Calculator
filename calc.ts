let output = document.querySelector('.output') as HTMLInputElement;
  /*declare the following variables and types
    num1 as number
    num2 as number
    operand as string
    
    Figure out how to set the values of num1 and num2 as the buttons are clicked
    */
    let operands_arr: string[] = ["+" , "-" , "/" , "*" ];
    // let operands_regex: RegExp = new RegExp(operands_arr.join("|"));
    type operands_type = "+" | "-" | "/" | "*" ;
    enum valid_operands {"+" , "-" , "/" , "*"};

    let test = [1];

    console.log(test.includes(1));

document.querySelector('.calc').addEventListener('click',(evt)=>{
    let button = evt.target as HTMLButtonElement;
  
    if(button.className.indexOf('num')!==-1){
        console.log(button.innerHTML);      
        output.value += button.innerHTML;
    }
    if(button.className.indexOf('operator')!==-1){
        console.log(button.innerHTML);      
        output.value += button.innerHTML;
    }
    if(button.className.indexOf('equal')!==-1){
        console.log(button.innerHTML);
        let calculation = calculate(/*pass in params here*/);
        output.value = calculation.toString();
    }
    /* create another condition to clear the value of the input when C is pressed*/
});

//create a function that takes in 2 numbers and a string (operand)
function calculate(/*You fill in here*/){
    /* based on the operand, find the correct value of the 2 numbers.  i.e., 4+5=9, 4*5=20, etc
    return that value
    */

    let input: string = output.value;
    let operands_regex: RegExp = /\+|-|\/|\*/;
    console.log(input);
    console.log(input.split(operands_regex));

    let operands: operands_type[] = input.split("").filter(item => operands_arr.includes(item)).map(item => item as operands_type);
    let numbers: Number[] = input.split(operands_regex).map(item => new Number(item));
    console.log(operands, numbers)

    return 0;

}