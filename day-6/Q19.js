// GREATEST COMMON DIVISIOR OF TWO NUMBERS

let a = 48 , b = 18;

while( b != 0){
    let temp = b;
    b = a % b;
    a = temp;
}

console.log("GCD:", a);