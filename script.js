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
var lowercase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var Uppercase =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers =[1,2,3,4,5,6,7,8,9,0]
var symbols =["!@#$%^&*()_+~`/?.>,<=-"];

var charsarr=[] //creating an empty array to store character sets

if (includeuppercase){
  charsarr = charsarr.concat(Uppercase)
}

if (includelowercase){
charsarr = charsarr.concat(lowercase)
}

if (includenumbers){
  charsarr = charsarr.concat(numbers)
}

if (includesymbols){
  charsarr = charsarr.concat(symbols)
}
console.log(charsarr);

for (var i = 0; i<length; i++){
var randomChar = charsarr [Math.floor(Math.random()*charsarr.length)];
console.log(randomChar);
password += randomChar;
}
return password;

}
// Write password to the #password 
function writePassword() {                                  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log(password);