// Assignment Code
var generateBtn = document.querySelector("#generate");
var password="";

function generatePassword(){
var length = parseInt(prompt ("Enter the number of charecters:"));
var includeuppercase = confirm ("Include Uppercase Letters?");
var includelowercase = confirm ("Include lowercase Letters?");
var includenumbers = confirm ("Include numbers?");
var includesymbols = confirm ("Include symbols?");

//declaring charater sets to inlude in password
var lowercase="abcdefghijklmnopqrstuvwxyz";
var Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var symbols = "!@#$%^&*()_+~`/?.>,<=-";

var charsarr=[] //creating an empty array to store character sets

if (includeuppercase){
  charsarr.push(Uppercase)
}

if (includelowercase){
  charsarr.push(lowercase)
}

if (includenumbers){
  charsarr.push(numbers)
}

if (includesymbols){
  charsarr.push(symbols)
}

// Write password to the #password 
function writePassword() {                                  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
} 

for (var i = 0; i<length; i++){
var generatePassword = char [Math.floor(Math.random()*char.length)];
var writePassword = charsarr [Math.floor(Math.random()* charsarr.length)];
password += charsarr;
return password;
}
document. getElementById("passwordText").value = password
}
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

console.log(password);