// ---------- V A R I A B L E - D E C L A R A T I O N ------------

let signUP = document.querySelector(".sign-up");
let login = document.querySelector(".login");
let userCard = document.getElementById("userCard");
let formSignUp = document.getElementById("sign-up");
let formLogin = document.getElementById("login");
let btnGroup = document.querySelector(".btn-section");
let userName = document.getElementById("username");
let displayemail = document.getElementById("emailId");
const toastLiveExample = document.getElementById("toast");

let user_name;
let user_email;
let user_password;

// ---------- V A R I A B L E - D E C L A R A T I O N ------------

// -------- B Y - D E F A U L T - H I D I N G ---------

login.style.display = "none";
userCard.style.display = "none";

// -------- B Y - D E F A U L T - H I D I N G - E N D ---------

// -------- M A I N - L O G I C --------

formSignUp.addEventListener("submit", function(event) {
    event.preventDefault();
    let firstName = document.getElementById("firstName").value; 
    let email1 = document.getElementById("email1").value;
    let password1 = document.getElementById("password1").value;

    user_name = firstName;
    user_email = email1;
    user_password = password1;
    formHide();
});

formLogin.addEventListener("submit", function(event) {
    event.preventDefault();

    let email2 = document.getElementById("email2").value;
    let password2 = document.getElementById("password2").value;

    if(email2 === user_email && password2 === user_password){
        displayCard();

    }else{  
    alert("invalid email or password");
    
    }
})

// -------- M A I N - L O G I C - E N D -------

// --------- F U N C T I O N - C R E A T E --------
function formHide() {
    signUP.style.display = "none";
    login.style.display = "block";
}

function displayCard() {
    userCard.style.display = "block";
    login.style.display = "none";
    displayemail.textContent = user_email;
    userName.textContent = user_name;

}

// --------- F U N C T I O N - C R E A T E - E N D -------