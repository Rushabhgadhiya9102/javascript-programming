// -------------- PRODUCT - BILL ------------

let name = document.querySelector(".name");  
let qyt = document.querySelector('.qyt');  
let price = document.querySelector('.price');  
let total = document.querySelector('.total');  
let pdiscount = document.querySelector('.discount');  
let save = document.querySelector('.savemoney');  
let net = document.querySelector('.net');  

let productName = "helekein";
let productQty = prompt('enter the quantity');
let productPrice = 175;
let totalPrice = productQty * productPrice;
let discount =  20;
let discountValue = totalPrice - (totalPrice * discount /100);
let netPrice = discountValue;
let savemoney = totalPrice - discountValue; 

name.innerHTML = productName;
qyt.innerHTML = productQty;
price.innerHTML = productPrice;
total.innerHTML = totalPrice;
pdiscount.innerHTML = discount;
net.innerHTML = netPrice;
save.innerHTML = savemoney;