const button = document.querySelectorAll(".btn");
const display = document.getElementById("display");
const operator = ['+','-','*','/'];

button.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let value = e.target.innerText;

        if(value === '='){
            display.value = eval(display.value);
        }
        else if(value === 'C'){
            display.value = "";
        }
        else {
            display.value += value;
        }

    })
})