// VARIABLE DECLARATION 

const quoteData = document.querySelector(".blockquote p");
const authors = document.querySelector(".blockquote-footer");
const changeBtn = document.querySelector(".btn");


// QUOTES

const quotes = [

  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },

  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },

  {
    quote: "Get busy living or get busy dying.",
    author: "Stephen King"
  },

  {
    quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    author: "Brian Tracy"
  },

  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },

  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },

  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  },

  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston S. Churchill"
  },

  {
    quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson"
  },

  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker"
  }

];

// FUNCTION DECLARATION TO CHANGE QUOTES RAMDOMLY

function changeQuotes(){
    const index = Math.floor(Math.random() * quotes.length);
    quoteData.textContent = quotes[index].quote;
    authors.textContent = quotes[index].author;
}

// SET INTERVAL OF CHANGING QUOTES

setInterval(() => {
    changeQuotes();
}, 5000);

changeQuotes();

// BUTTON TO CHANGE QUOTES

changeBtn.addEventListener('click', () => {
    changeQuotes();
})