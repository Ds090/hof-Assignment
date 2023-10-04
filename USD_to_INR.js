// Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
// program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
// use the map higher-order function to create a new object with the converted prices in Rupees.


function Convert_INR(){
const Input = document.getElementById("input_num").value;
const update_box1 = document.getElementById("update_box");

// console.log(Input);

    update_box1.value = Input * 83.133271;

console.log(update_box1.value);


}

var Input = document.getElementById("input_num").value;
var update_box1 = document.getElementById("update_box").value;
const ClearBtn = document.getElementById("Clear");


ClearBtn.addEventListener("click", () =>{
    Input.value = "";
    update_box1.value = "";
})


