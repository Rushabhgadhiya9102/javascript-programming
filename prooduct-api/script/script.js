async function fetchdata(){

    try{

        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json()

        console.log(data);
        
        const root = document.getElementById("root");

        root.innerHTML = "";

        data.forEach(product => {
            
            const div = document.createElement("div");
            div.classList.add("col-lg-3");

            const {image, title, price, description, category} = product;

            div.innerHTML = `
            
            <div class="card overflow-hidden" style="height:450px;">
                <img src="${image}" class="card-img-top" width="200px" height="250px" alt="${category}" />
                <div class="card-body">
                  <p class="card-title">${category}</p>
                  <p class="card-title">${title}</p>
                  <p class="card-title">$${price}</p>
                </div>
              </div>
            `;

            root.append(div);
        });   

    }
    catch(error){
        console.error(error);
    }

}

fetchdata()