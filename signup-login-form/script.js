let signUP = document.querySelector(".sign-up");
let login = document.querySelector(".login");
let title = document.querySelector(".title");
let userCard = document.getElementById("userCard");
let signUPBtn = document.getElementById("sign-up-btn");
let loginBtn = document.getElementById("login-btn");
let btn1 = document.getElementById("btn-login");
let btn2 = document.getElementById("btn-card");

// -------- BY DEFAULT HIDING ---------

login.style.display = "none";
userCard.style.display = "none";

// -------- BY DEFAULT HIDING END ---------

signUPBtn.addEventListener("click", () => {
    signUP.style.display = "block";
    login.style.display = "none";
})

loginBtn.addEventListener("click", () => {
    
    signUP.style.display = "none";
    login.style.display = "block";
})

btn1.addEventListener("submit", () => {

    signUP.style.display = "block";
    login.style.display = "none";
})

btn2.addEventListener("submit", () => {

    // signUP.style.display = "block";
    login.style.display = "none";
    userCard.style.display = "block";
})