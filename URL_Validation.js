// Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,
// followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters.
// Print a message indicating if the input matches the conditions or not.


function URLValidation() {
    
let input_url = document.getElementById('Url_Input').value;
let output = document.getElementById('output');

// console.log(input_url);
let regx = new RegExp(input_url);

let url = input_url.match(/[(https:linkedin.com(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

if (input_url.length != 0 && input_url.length >= 5) {
    if (url) {
        console.log(url);
        output.textContent = "Valid URL"
        output.style.backgroundColor = "rgb(24,147,248)";
        output.style.color = "rgb(255,255,255)";
    }else{
        output.innerText = "Please Enter Valid URL!";
        output.style.backgroundColor = "red";
        output.style.color = "rgb(255,255,255)";
    }
}else{
    alert("URL can\'t be empty!")
}

}

function Reset(){
    let input_url = document.getElementById("Url_Input").value;
    let output = document.getElementById("output");
    
    
    input_url.textContent = "";
    output.textContent = "";
    
    }