const principle = document.querySelector('.principle');
const rate = document.querySelector('.rate');
const years = document.querySelector('.years');
const intrest = document.querySelector('.simpleIntrest');

let p = prompt('enter the amount'); 
let r = 5; 
let y = prompt('enter the years');
let SI =  (p*r*y)/100;

principle.innerHTML = p;
rate.innerHTML = r;
years.innerHTML = y;
intrest.innerHTML = SI