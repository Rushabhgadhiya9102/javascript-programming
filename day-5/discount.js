// eligiblity discount

let member = true;
let spending = 150;

if(member){
    if(spending > 100){
        console.log("you get a 20% discount");
    }else {
        console.log("you get a 10% discount");
    }
}else{
    console.log("no discount is avaiable for non member");
}