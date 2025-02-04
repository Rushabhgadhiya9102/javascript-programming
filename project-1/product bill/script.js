// DECLARE THE VARIABLE

<<<<<<< HEAD
let product = "La-pinoz-pizza"
let price = 450;
=======
let product = "la pinoz pizza"
let price = 700;
>>>>>>> 0fdbe949ca3b700d2dcba4ecec3ed221c529bde1
let qty = prompt("Enter the Quantity");
let total = price * qty;
let discount;
let netprice;
let savemoney;

// MAIN LOGIC

discount = total >= 1500 ? 0.15 :
           total >= 1000 ? 0.10 :
           total >= 800 ? 0.08 : 0; 
           netprice = total - (total * discount);

discount = total >= 1500 ? "15%" : 
           total >= 1000 ? "10%": 
           total >= 800 ? "8%": "0%"; 

// FINAL OUTPUT

console.log("the product:", product);
console.log("the price:" ,price);
console.log("the quantity:", qty);
console.log("the total:", total);
console.log("the discount:",discount);
console.log("netprice:",netprice);