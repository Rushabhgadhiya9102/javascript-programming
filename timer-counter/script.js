let time = document.getElementById('time').textContent;
const start = document.getElementById('startBtn');
const stop = document.getElementById('stopBtn');
const reset = document.getElementById('resetBtn');
let timer;

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

start.addEventListener("click", ()=>{

    startTimer();

})

stop.addEventListener("click", ()=>{

    clearInterval(timer);

})

reset.addEventListener("click", ()=>{

    time = 60
    document.getElementById("time").textContent = time;

})
