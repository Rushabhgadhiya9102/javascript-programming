// CHECK IF A NUMBER IS AN ARMSTRONG NUMBER

let num = 153, sum = 0, temp = num;

while( temp != 0){
    let digit = temp % 10 ;
    sum += digit ** 3;
    temp = Math.floor(temp / 10);
}

console.log(num, "is Armstrong:", sum === num);