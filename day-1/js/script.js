// ------ ALERT BOX ------

// alert("hello world");

// ---- DOCUMENT WRITE -----
document.write("hello Rushabh Welcome to the world of programming");

// ----- INNER HTML ------

let title = document.getElementById("title");
let para = document.getElementById("paragraph");
title.innerHTML = "<h1>Hell boy</h1>";
para.innerText =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, non? Totam veniam quibusdam quos dolor aliquid excepturi natus, quis, temporibus quidem, fugiat cum? Suscipit facere non, id eius in recusandae?";



// ------ PROMPT -------

let message = prompt("enter your name");
let h1 = document.createElement('h1');

h1.textContent = message;
document.body.appendChild(h1);


// ------ TABLE ------

let array = [
  { name: "Rushabh", age: 22 },
  { name: "Rudra", age: 20 },
  { name: "Rohan", age: 19 }
];

console.table(array)