// As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are
// formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should start with https://
// www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, and
// end with a letter or digit. The length of the profile ID should be between 5 and 30 characters.
// The program should use a regular expression to match valid LinkedIn profile URLs, and should not match URLs
// that do not follow this format or contain invalid characters. The program should provide clear output messages
// indicating whether each input is a valid LinkedIn profile URL or not.


function URLValidation() {
    
    let input_url = document.getElementById('Url_Input').value;
    let output = document.getElementById('output');
    
    // console.log(input_url);
    let regx = new RegExp(input_url);
    
    let url = input_url.match(/^(https:\/\/)?(www\.)?linkedin\.com\/in\/[A-Za-z0-9_-]+\/?$/i);
    
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