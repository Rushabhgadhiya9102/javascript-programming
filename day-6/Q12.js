// FIND THE SUM OF DIGIT OF NUMBER

let num = 1234, sum = 0;

while(num != 0){

    sum += num%10;
    num = Math.floor(num/10);
}

console.log(sum);