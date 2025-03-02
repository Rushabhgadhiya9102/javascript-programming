// ------------------- V A R I A B L E - D E C L A R A T I O N ----------------

let slidecontainer = document.querySelector(".slider");
let slides = document.querySelectorAll(".slider-item ");
let indicator = document.querySelectorAll(".indicator");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let currentSlide = 0;


// ------------------- V A R I A B L E - D E C L A R A T I O N ----------------

// ------------------- F U N C T I O N - S H O W - S L I D E S ----------------

function slidesShow(index){

    if(index >= slides.length){
        currentSlide = 0;

    }else if(index < 0){
        currentSlide = slides.length - 1;

    }else {
        currentSlide = index;

    }

     slides.forEach((slide, index) => {
       slide.classList.remove("active");
       if (index === currentSlide) {
         slide.classList.add("active");   
       }
     });

     indicator.forEach((btn, index) => { 
      btn.style.background = "white"; 
       if (index === currentSlide) {
          btn.style.background = "goldenrod"; 
       }
     });

}

// ------------------- F U N C T I O N - S H O W - S L I D E S ----------------

// ------------------- F U N C T I O N - C H A N G E - S L I D E S --------------

function slideChanger(n){
    slidesShow((currentSlide += n));
}

// ------------------- F U N C T I O N - C H A N G E - S L I D E S --------------

// ----------------- N A V I G A T I O N - B U T T O N ------------------

prevBtn.addEventListener("click", () => {
    slideChanger(-1);
});

nextBtn.addEventListener("click", () => {
    slideChanger(1);
});

// ----------------- N A V I G A T I O N - B U T T O N ------------------

// ----------------- A U T O - C H A N G I N G --------------------------

let autoChange = setInterval(() => {
    slideChanger(1);
}, 5000)

// ----------------- A U T O - C H A N G I N G --------------------------