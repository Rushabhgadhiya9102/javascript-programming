let time = document.getElementById('time').textContent;
const start = document.getElementById('startBtn');
const stop = document.getElementById('stopBtn');

function startTimer(){

    setInterval((id) => {
        
         if (time == 0) {
            
           clearInterval(id);

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

    clearInterval();

})
