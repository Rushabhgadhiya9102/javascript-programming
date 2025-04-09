// ----------- M O D A L - S E C T I O N --------------

const modalBtn = document.getElementById("modalBtn");
const closeBtn = document.getElementById("closeBtn");
const modal = document.getElementById("modal");

modalBtn.addEventListener("click", ()=>{
    modal.classList.add("d-block");
});

closeBtn.addEventListener("click",()=>{
    modal.classList.remove("d-block");
});


// ----------- M O D A L - S E C T I O N - E N D -------------

// ----------- F O R M - S E C T I O N  -------------

let form = document.getElementById("form")
let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");
let phoneNumber = document.getElementById("phone");
let showData = document.querySelector(".table tbody");
let formBtn = document.getElementById("formBtn");
let gender = document.querySelectorAll("input[name='gender']");
let hobby = document.querySelectorAll("input[type='checkbox']");
let city = document.getElementById("select");
let editId = -1;
let person = [];

if(localStorage.getItem("personVal")){
    person = JSON.parse(localStorage.getItem("personVal"))
    display()
}

firstName.focus();

form.addEventListener("submit", (event)=>{

    event.preventDefault();

    let genderval = "";

    if (gender[0].checked) {
      genderval = gender[0].value;

    } else {
      genderval = gender[1].value;

    }

    let hobbyvalue = []

    for(let i = 0; i < hobby.length; i++){

        if(hobby[i].checked){

            hobbyvalue.push(hobby[i].value)

        }

    }

    let cityValue = [];

    for (let i = 0; i < city.length; i++) {

      if (city[i].selected) {
        cityValue.push(city[i].value);

      }
    }    

    let info = {

        firstName: firstName.value,
        lastName: lastName.value,
        phoneNumber: phoneNumber.value,
        gender: genderval,
        hobby: hobbyvalue,
        city: cityValue

    };

    if(editId == -1){
        person.push(info);

    }else{

        person[editId] = info;
        editId = -1;
    }

    localStorage.setItem("personVal", JSON.stringify(person))

    resetForm();
    display();
    modal.classList.remove("d-block");

})


function resetForm(){

    firstName.value = "";
    lastName.value = "";
    phoneNumber.value = "";
    formBtn.textContent = "Register";
    formBtn.classList.add("btn-primary");
    formBtn.classList.remove("btn-success");
    firstName.focus();

}


function display(){

    showData.innerHTML = "";

    person.map((user, index) =>{

    let row = document.createElement("tr");

    row.innerHTML = `
            <td>${index + 1}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.phoneNumber}</td>
            <td>${user.gender}</td>
            <td>${user.hobby}</td>
            <td>${user.city}</td>
            <td>
                <i id="deleteBtn" class="bi bi-trash3-fill fs-5 me-3" onclick="deleteRecord(${index})"></i>
                <i id="editBtn" class="bi bi-pencil-fill fs-5" onclick="editRecords(${index})"></i>
            </td>
    `;

    showData.append(row);
    });

}

display();

// ----------- F O R M - S E C T I O N - E N D -------------

// ---------- D E L E T E - E D I T - B U T T O N S ------------

function deleteRecord(index){
    person.splice(index,1);
    localStorage.setItem("personVal", JSON.stringify(person));
    display();
}

function editRecords(index){

    modal.classList.add("d-block");

    let user = person.filter((_,idx) => idx == index)[0];
    firstName.value = user.firstName;
    lastName.value = user.lastName;
    phoneNumber.value = user.phoneNumber;
    formBtn.textContent = "update";
    formBtn.classList.remove("btn-primary");
    formBtn.classList.add("btn-success");

    editId = index;

}

// ---------- D E L E T E - E D I T - B U T T O N S - E N D ------------