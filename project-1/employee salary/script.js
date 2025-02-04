// DECLARE THE VARIABLE

let employeeName = "Dhaval leelawala"
let employeeSalary = prompt("enter the salary");
let experience = prompt("enter the experience");
let role = "Faculty"
let HRA = 0.50;
let MA = 0.15;
let TA = 0.08;
let DA = 0.08;
let PF = 0.12;
let PT = 200;
let TDS = 0.10;
let grossSalary = employeeSalary *(1 + HRA + MA + DA +TA );
let finalSalary = grossSalary - (grossSalary * PF) - (grossSalary * TDS) - PT;
let Bonus;
let Bonussalary;

// MAIN LOGIC

Bonus = finalSalary >= 25000 && experience >= 5 ? 50/100 :
        finalSalary >= 20000 && experience >= 3 ? 35/100 :
        finalSalary >= 15000 && experience >= 2 ? 20/100 : 10/100;

Bonus = finalSalary * Bonus;
Bonussalary = finalSalary + Bonus;        

// FINAL OUTPUT
console.log("Employee name:", employeeName);
console.log("Employee salary:", employeeSalary);
console.log("Role:",role);
console.log("Employee Experience:",experience);
console.log("House Rent Allowance:",HRA);
console.log("Medical Allowance:",MA);
console.log("Travelling Allowance:",TA);
console.log("Dearness Allowance:",DA);
console.log("Provident Funds:",PF);
console.log("Professional Tax:",PT);
console.log("Tax Deducted at Source:", TDS);
console.log("Gross Salary:",grossSalary);
console.log("Final Salary:", finalSalary);
console.log("Bonus:",Bonus);
console.log("Bonus + Salary:",Bonussalary);