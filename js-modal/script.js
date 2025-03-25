// ---------- V A R I A B L E - D E C L A R A T I O N --------

const trigger = document.getElementById("trigger");
const close = document.getElementById("close");
const modal = document.getElementById("myModal");
let intervalId;
// ---------- V A R I A B L E - D E C L A R A T I O N --------

// ---------- T R I G G E R - B U T T O N -----------

trigger.addEventListener("click", ()=>{

    modal.classList.remove("hidden")

})

// ---------- T R I G G E R - B U T T O N -----------

// ---------- C L O S E - B U T T O N -----------

close.addEventListener("click", ()=>{

    modal.classList.add("hidden")
    clearInterval(intervalId)

})

// ---------- C L O S E - B U T T O N -----------

// ---------- A U T O - S H O W - M O D A L -----------

function autoShow(){

   intervalId = setInterval(() => {
    
                    modal.classList.remove("hidden");

                }, 5000);

}
autoShow()
// ---------- A U T O - S H O W - M O D A L -----------