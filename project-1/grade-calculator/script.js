// DECLARE THE VARIABLE

let avg = parseFloat(prompt("enter the average"));
let grade;

// LOGIC

grade = avg>=90? "A" : 
        avg>=85? "B" : 
        avg>=65? "C" : 
        avg>=50? "D" : 
        avg>=40? "Pass" : "Fail";

// FINAL OUTPUT

console.log("the average marks is: ",avg);
console.log("the Grade is: ",grade);