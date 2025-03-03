// ------------ V A R I A B L E - D E C L A R A T I O N --------------------

const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form")

// ------------ V A R I A B L E - D E C L A R A T I O N --------------------

// ------------ M A I N - L O G I C --------------------

email.focus();

form.addEventListener("submit", (event) => {

    event.preventDefault();
    
    try {

      if (email.value != "admin@example.com" || password.value != "admin@123") {
        
        throw new Error("Invalid email or password");

      }

        alert("welcome user");
        email.value = ""; 
        password.value = ""; 
        email.focus()

    } catch (error) {

        alert(error);
        email.value = "";
        password.value = ""; 
        email.focus();

    }

})

// ------------ M A I N - L O G I C --------------------