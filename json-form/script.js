let username = document.getElementById("username")
let email = document.getElementById("email")
let form = document.getElementById("form")
let showData = document.querySelector(".table tbody")
let deleteBtn = document.getElementById("deleteBtn");
let editBtn = document.getElementById("editBtn");
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

        row.innerHTML = `
        <td>${index + 1}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <tr>
            <i id="deleteBtn" class="bi bi-trash3-fill fs-4" onclick="deleteBtn(${index})"></i>
            <i id="editBtn" class="bi bi-pencil-fill fs-4" onclick="editBtn(${index})"></i>
        </tr>
        `;

        showData.append(row)
    });

}

display()

deleteBtn = (index)=>{
    users.splice(index,1);
    display()
}

editBtn = (index)=>{

    let user = users.filter((_,idx) => idx == index)[0]
    username.value = user.username
    email.value = user.email

}