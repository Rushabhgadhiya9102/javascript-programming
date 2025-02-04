// DECLARE THE VARIABLE

let principleAmount = prompt("enter the amount");
let rateOfIntrest;
let rate;
let years = prompt("Enter the year");
let simpleIntrest;

// LOGIC 

rateOfIntrest = principleAmount >= 500000 ? 12/100 :
                principleAmount >= 350000 ? 9/100 : 
                principleAmount >= 250000 ? 8/100 : 3/100;


rate = principleAmount >= 500000 ? "12%" :
       principleAmount >= 350000 ? "9%" : 
       principleAmount >= 250000 ? "8%" : "3%";

// FINAL OUTPUT

simpleIntrest = principleAmount * rateOfIntrest * years ;
console.log("The amount is: " ,principleAmount);
console.log("The rate of intrest: ", rate);
console.log("The years is: ",years);
console.log("The simple intrest is: " ,simpleIntrest);