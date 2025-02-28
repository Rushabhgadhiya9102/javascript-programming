// ------------------- V A R I A B L E - D E C L A R A T I O N ----------------

let slidecontainer = document.querySelector(".slider");
let slides = document.querySelectorAll(".slider-item ");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let currentSlide = 0;

// ------------------- V A R I A B L E - D E C L A R A T I O N ----------------

// ------------------- F U N C T I O N - S H O W - S L I D E S ----------------

function showSlides(index){

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

}

// ------------------- F U N C T I O N - S H O W - S L I D E S ----------------

// ------------------- F U N C T I O N - C H A N G E - S L I D E S --------------

function changeSlide(n){
    showSlides(currentSlide + n);
}

// ------------------- F U N C T I O N - C H A N G E - S L I D E S --------------

// ----------------- N A V I G A T I O N - B U T T O N ------------------

prevBtn.addEventListener("click", () => {
    changeSlide(-1);
});

nextBtn.addEventListener("click", () => {
    changeSlide(1);
});

// ----------------- N A V I G A T I O N - B U T T O N ------------------