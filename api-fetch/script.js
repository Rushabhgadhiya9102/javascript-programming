let api = "https://dog.ceo/api/breeds/image/random";
let image = document.getElementById("img")

const changeImg = ()=>{

fetch(api)
  .then((response) => response.json())
  .then((data) => (image.src = data.message))
  .catch((error) => console.error("something went worng"));

};

changeImg()

setInterval(() => {
    
    changeImg()

}, 3000);