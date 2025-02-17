// ---------- V A R I A B L E - D E C L A R A T I O N -----------

const greeting = document.getElementById("greeting-section");
const mainCalculator = document.getElementById("calculator-item");
const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const numberBtn = document.querySelectorAll(".number-btn");
const operatorBtn = document.querySelectorAll(".operator-btn");
const clearBtn = document.querySelector(".clear-btn");
const equalBtn = document.querySelector(".equal-btn");


let num1 = "";
let num2 = "";
let operator = "";

// ------------ G R E E T I N G - S E C T I O N ------------

mainCalculator.style.display = "none";

startBtn.addEventListener("click", () => {

    mainCalculator.style.display = "block";
    greeting.style.display = "none";

})

// ------------ G R E E T I N G - S E C T I O N ------------

// --------- N U M B E R - B U T T O N S -----------

numberBtn.forEach(button => {
    button.addEventListener("click", () => {

        if(operator === ""){
            num1 += button.value;
            display.value = num1;
        }else{
            num2 += button.value;
            display.value = num1 +" " + operator+ " " + num2;
        }

    })
})
// --------- N U M B E R - B U T T O N S -----------

// --------- O P E R A T O R - B U T T O N S -----------

operatorBtn.forEach(button => {
    button.addEventListener("click", () => {

        if(num1 !== ""){
            operator = button.value;
            display.value = num1 + " " + operator;
        }

    })
})

// --------- O P E R A T O R - B U T T O N S -----------

// --------- C L E A R - B U T T O N S -----------

clearBtn.addEventListener("click", () => {

    num1 = "";
    num2 = "";
    operator = "";
    display.value = "";

})

// --------- C L E A R - B U T T O N S -----------

// --------- E Q U A L - B U T T O N S -----------

equalBtn.addEventListener("click", () => {
    if(num1 !== "" && num2 !== ""){
        let result = 0;
        switch (operator){

            case '+':
                result = parseInt(num1) + parseInt(num2);
              break;  

            case '-':
                result = parseInt(num1) - parseInt(num2);
              break; 

            case '*':
                result = parseInt(num1) * parseInt(num2);
              break;  

            case '/':
                result = parseInt(num1) / parseInt(num2);
              break;
              
            default:
                break;    
        }

        display.value = num1 + " " + operator+ " " +  num2 + " = " + result;
    } else {
        display.value = "invalid calculation";
    }
})

// --------- E Q U A L - B U T T O N S -----------