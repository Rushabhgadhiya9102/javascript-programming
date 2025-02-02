let form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let email = document.getElementById("email");
  let password = document.getElementById("password");

  if (email.value == "rgadhiya77@gmail.com") {
    
    if (password.value == "9102") {
        console.log(email.value);
        console.log(password.value);
        alert("wlecome");

    } else {

         alert("invalid password");

    }

  } else {

    alert("invalid email");

  }
});
