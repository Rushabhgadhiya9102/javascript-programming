// --------- ALERT -------------

let btn = document.querySelector(".btn1");

btn.addEventListener("click", () => {
  alert("hello world");
});

// --------- PROMPT ------------

let btn2 = document.querySelector(".btn2");

btn2.addEventListener("click", () => {
  let message = prompt("Enter your statement");
  let h1 = document.createElement("h1");

  h1.textContent = message;
  document.body.appendChild(h1);
});

// ----------- INNER HTML ------------

let paraGraph = document.querySelector(".paragraph");
let btn3 = document.querySelector(".btn3");

btn3.addEventListener("click", () => {
  let msg = prompt("Enter your statement with tag");

  paraGraph.innerHTML = msg;
});

// ---------- DARK MODE ------------

const btn4 = document.querySelector('.btn4');

btn4.addEventListener("click", () =>{
  document.body.classList.toggle('darkmode');
});


// --------- COUNTER ----------

const btn5 = document.querySelector('.btn5');
const btn6 = document.querySelector('.btn6');
const counter = document.querySelector('.counter');
let increase = 0;

btn5.addEventListener("click", () => {
  increase++;
  counter.innerHTML = increase;
})

btn6.addEventListener("click", () => {
  if(increase != 0){
    increase--;
  }
  counter.innerHTML = increase;
})