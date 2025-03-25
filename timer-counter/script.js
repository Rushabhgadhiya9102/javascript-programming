// ----------- V A R I A B L E -  D E C L A R A T I O N --------------

let time = document.getElementById('time').textContent;
const start = document.getElementById('startBtn');
const stop = document.getElementById('stopBtn');
const reset = document.getElementById('resetBtn');
let timer;

// ----------- S T A R T - T I M E R - F U N C T I O N -------------

function startTimer(){

    timer = setInterval(() => {
        
                 if (time == 0) {

                   clearInterval();
                
                 } else {
                
                   time--;
                   document.getElementById("time").textContent = time > 9 ? time : "0" + time;
                
                 }

            }, 1000);

}

// ----------- S T A R T - B T N -------------

start.addEventListener("click", ()=>{

    startTimer();

})

// ----------- S T O P - B T N -------------

stop.addEventListener("click", ()=>{

    clearInterval(timer);

})

// ----------- R E S E T - B T N -------------

reset.addEventListener("click", ()=>{

    time = 60
    document.getElementById("time").textContent = time;

})
