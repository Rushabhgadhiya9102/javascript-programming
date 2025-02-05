let signUP = document.querySelector(".sign-up");
let login = document.querySelector(".login");
let signUPBtn = document.getElementById("sign-up-btn");
let loginBtn = document.getElementById("login-btn");

// -------- BY DEFAULT HIDING ---------

login.style.display = "none";

signUPBtn.addEventListener("click", () => {
    signUP.style.display = "block";
    login.style.display = "none";
})

loginBtn.addEventListener("click", () => {
    signUP.style.display = "none";
    login.style.display = "block";
})