const button = document.querySelectorAll(".btn");
const display = document.getElementById("display");
const operator = ['+','-','*','/'];

button.forEach((btn) => {

    btn.addEventListener("click", (e) => {
        let value = e.target.innerText;

        if(value === '='){
            display.value = eval(display.value);

        }
        else if(value === 'AC'){
            display.value = "";

        }
        else if (value === 'X'){
            display.value = display.value.slice(0,-1);

        }
        else {
            display.value += value;

        }

    })
})