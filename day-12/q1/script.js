let users = [

    {
        id: 1,
        name: "Rushabh",
        email: "rushabhgadhiya123@gmail.com",
        age: 22
    },
    {
        id: 2,
        name: "Rohan",
        email: "rohankatira12@gmail.com",
        age: 20
    },

    {
        id: 3,
        name: "Rudra",
        email: "rudragondaliya3@gmail.com",
        age: 20
    },

    {
        id: 4,
        name: "Milu",
        email: "milanmandaviya1@gmail.com",
        age: 24
    },

    {
        id: 5,
        name: "Akshar",
        email: "aksharparekh123@gmail.com",
        age: 23
    },

    {
        id: 6,
        name: "Payal",
        email: "payalpatel34@gmail.com",
        age: 19
    },

    {
        id: 7,
        name: "Komal",
        email: "komalpatel48@gmail.com",
        age: 23
    }

];

let mainTable = document.querySelector('#root table tbody');

users.map((users) => {
    let row = document.createElement('tr');

    let idCell = document.createElement('td');
    idCell.textContent = users.id;

    let nameCell = document.createElement('td');
    nameCell.textContent = users.name;

    let emailCell = document.createElement('td');
    emailCell.textContent = users.email;

    let ageCell = document.createElement('td');
    ageCell.textContent = users.age;

    row.appendChild(idCell);
    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(ageCell);

    mainTable.appendChild(row);
})