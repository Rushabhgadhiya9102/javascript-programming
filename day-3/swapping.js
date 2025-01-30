// ------------ SWAPPING USING THIRD VARIABLE -----------

let a = 10;
let b = 50;
let temp;

temp = b;
b = a;
a = temp;

console.log('the value of a:',a);
console.log('the value of b:',b);

// ------------ SWAPPING USING THIRD VARIABLE -----------

// ------------ SWAPPING WITHOUT USING THIRD VARIABLE -----------

// A = 50 AND B = 10

console.log("without using third variable");

a = a + b;
b = a - b;
a = a - b;

console.log("the value of a:", a);
console.log("the value of b:", b);

// ------------ SWAPPING WITHOUT USING THIRD VARIABLE -----------