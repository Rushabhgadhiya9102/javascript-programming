// season based on month 

let month = 6;
let season;

if(month === 12 || month === 1 || month === 2){
    season = "winter"
    
}else if(month >= 3 && month <=5 ){
   season = "spring"
    
}else if (month >= 6 && month <= 8){
    season = "summer"

}else if(month >= 9 && month <= 11){
    season = "autumn";
}

console.log("month is: " + month + " and the season is: "+ season);