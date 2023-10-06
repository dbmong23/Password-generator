// Assignment code here
var characters ="!@#$%^&*()0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var password = "";
var length = 15

for (var i = 0; i < length; i++) {
  var randomIndex = Math.floor(Math.random() * characters.length);
  password += characters[randomIndex];
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var length = parseInt(prompt("Enter the desired password length (between 8 and 128 characters):"));
}
// Validate the user input
if (length < 8 || length > 128 || isNaN(length)) {
  alert("Invalid password length. Please enter a number between 8 and 128.");
} else {
  password.value = password;

}
console.log("Generated Password:", password);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
