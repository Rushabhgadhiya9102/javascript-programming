let username = document.getElementById("username")
let email = document.getElementById("email")
let form = document.getElementById("form")
let showData = document.querySelector(".table tbody")

let users = [];
username.focus();


form.addEventListener("submit" , (event)=>{

    event.preventDefault();

    let info = {

        username: username.value,
        email: email.value
    }

    users.push(info);
    username.value = "";
    email.value = "";
    username.focus();
    display();

})

function display(){

    showData.innerHTML = ''

    users.map((user, index) =>{
        let row = document.createElement("tr");

        row.innerHTML = 
        `
        <td>${index+1}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        `

        showData.append(row)
    });

}

display()