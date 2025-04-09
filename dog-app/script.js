const dogImg = document.getElementById("dogImg");
const breeds = document.getElementById("breeds");

fetch("https://dog.ceo/api/breeds/list/all")
.then((res) => res.json())
.then((data) => {

    let breedList = Object.keys(data.message)
    console.log(breedList);
    
    breedList.forEach(breed => {
        let option = document.createElement("option")

        option.value = breed;
        option.innerText = breed;

        breeds.append(option);
    });

})
.catch((error) => {
    console.error(error);  
});



const display = ()=> {

    let breedSelect = document.getElementById('breeds').value

    fetch(`https://dog.ceo/api/breed/${breedSelect}/images/random`)
    .then((res) => res.json())
    .then((data) => dogImg.src = data.message)
    .catch((error) => console.error(error))

}