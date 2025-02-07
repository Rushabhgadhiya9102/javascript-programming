// FIND THE MAX DIGIT FROM THE NUMBER 

let num = 8374, maxDigit = 0;

while(num != 0){
   let digit = num % 10;

    if(digit > maxDigit){
        maxDigit = digit;
        num = Math.floor(num/10);
    }
    num--;
}
console.log("Largest Digit : ", maxDigit);

