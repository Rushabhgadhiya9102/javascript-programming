// leap year 

let year = 2025;

if((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
    console.log(year +" this is a leap year");
}else{
    console.log(year +" this is not a leap year");
}