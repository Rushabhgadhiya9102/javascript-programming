const employeeName = document.querySelector('.employeeName');
const baseSalary = document.querySelector('.baseSalary');
const HRA = document.querySelector('.HRA');
const MA = document.querySelector('.MA');
const DA = document.querySelector('.DA');
const TA = document.querySelector('.TA');
const PF = document.querySelector('.PF');
const PT = document.querySelector('.PT');
const TDS = document.querySelector('.TDS');
const Gross = document.querySelector('.Gross');
const Total = document.querySelector('.Total');

let emp_name = "john doe"
let emp_salary = 45000;
let emp_HRA = 1000;
let emp_MA = 750;
let emp_DA = 200; 
let emp_TA = 500; 
let emp_PF = 550;
let emp_PT = 600;
let emp_TDS = 600;
let emp_Gross = emp_salary + emp_HRA + emp_MA + emp_DA + emp_TA;
let emp_Total = emp_Gross - emp_PF - emp_PT - emp_TDS;

employeeName.innerHTML = emp_name;
baseSalary.innerHTML = emp_salary;
HRA.innerHTML = emp_HRA;
MA.innerHTML = emp_MA;
DA.innerHTML = emp_DA;
TA.innerHTML = emp_TA;
PF.innerHTML = emp_PF;
PT.innerHTML = emp_PT;
TDS.innerHTML = emp_TDS;
Gross.innerHTML = emp_Gross;
Total.innerHTML = emp_Total;