// FIBONACCI SERIES UP TO 10

let a = 0, b = 1, temp;

console.log(a);
console.log(b);

for (let i = 2; i <= 10; i++){
    temp = a + b;
    console.log(temp);
    
    a = b;
    b = temp;   
}

