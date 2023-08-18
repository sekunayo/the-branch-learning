const tipAmount =  document.querySelector("#tipAmount");
const total =  document.querySelector("#total");
tipAmount.innerHTML = 0.000;
total.innerHTML = 0.000;

let tip = 0.15
let bill = 0;
let numberOfPeople = 1;


document.querySelector("#form").addEventListener(("submit"), (event) => {
   event.preventDefault();
   bill = parseFloat(document.querySelector("#bill").value);
   numberOfPeople = parseFloat(document.querySelector("#noOfPeople").value);
   let tipFormular = (bill * (tip + 1)) / numberOfPeople;
   tipAmount.innerHTML = tipFormular;
   let totalAmount = tipFormular + bill;
   total.innerHTML = totalAmount
})