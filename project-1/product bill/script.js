// DECLARE THE VARIABLE

let product = "Heliken"
let price = 700;
let qty = prompt("Enter the Quantity");
let total = price * qty;
let discount;
let netprice;
let savemoney;

// MAIN LOGIC

discount = total >= 1500 ? 15/100 :
           total >= 1000 ? 10/100 :
           total >= 800 ? 8/100 : 0; 

netprice = total - (total * discount);

// FINAL OUTPUT

console.log("the product:", product);
console.log("the price:" ,price);
console.log("the quantity:", qty);
console.log("the total:", total);
console.log("netprice:",netprice);