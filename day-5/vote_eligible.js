// check if the citizen is eligible to vote or not

let age = 22;
let citizen = true;

if(age > 18){
    if(citizen){
        console.log("You are eligible to vote");
        
    }else {
        console.log("You must be a citizen to vote");
        
    }
}else{
    console.log("you are not old enough to vote");
    
}