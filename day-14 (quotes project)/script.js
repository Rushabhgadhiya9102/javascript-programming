// VARIABLE DECLARATION 

const quoteData = document.querySelector(".blockquote p");
const authors = document.querySelector(".blockquote-footer");
const quotesTitle = document.querySelector(".card-header");
const changeBtn = document.querySelector(".btn");

const quotes = [
  {
    title: "Quotes 1",
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },

  {
    title: "Quotes 2",
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },

  {
    title: "Quotes 3",
    quote: "Get busy living or get busy dying.",
    author: "Stephen King"
  },

  {
    title: "Quotes 4",
    quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    author: "Brian Tracy"
  },

  {
    title: "Quotes 5",
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },

  {
    title: "Quotes 6",
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },

  {
    title: "Quotes 7",
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  },

  {
    title: "Quotes 8",
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston S. Churchill"
  },

  {
    title: "Quotes 9",
    quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson"
  },

  {
    title: "Quotes 10",
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker"
  }
];

function changeQuotes(){
    const index = Math.floor(Math.random() * quotes.length);
    quotesTitle.textContent = quotes[index].title;
    quoteData.textContent = quotes[index].quote;
    authors.textContent = quotes[index].author;
}

setInterval(() => {
    changeQuotes();
}, 5000);

changeQuotes();

changeBtn.addEventListener('click', () => {
    changeQuotes();
})

// ANIMATION

  AOS.init();