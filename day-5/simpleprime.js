// find the given number is prime number or not

let number = 23;
let isPrime = true;
let i;

if (number <= 1) {

  isPrime = false;

} else {

  for (i = 2; i < number; i++) {
    
    if (number % i === 0) {
      isPrime = false;
      break;
    }

  }
}

if (isPrime) {

  console.log(number + " is a primenumber");

} else {

  console.log(number + " is not a primenumber");

}
