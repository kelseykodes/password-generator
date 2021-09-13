// Assignment Code
var generateBtn = document.querySelector("#generate");


 //function generatePassword() {
   // var generateBtn = document.querySelector("#generate");
  //  const passwordValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  //  var password = "";
  // for (var i = 0; i <= generateBtn; i++){
      //password = password + passwordValues.charCode(Math.floor(Math.random() * Math.floor(passwordValues.length - 1)));
  // }
  //document.getElementById("display").value = password;
      //}

  function generatePassword(){
      //uppercase letters
      var upperCase = prompt("Enter two uppercase letters from A-Z ");
      //lowercase letters 
      var lowerCase = prompt("Enter two lowercase letters from a-z ");
      //symbols
      var sympbols = prompt("Enter two of the following symbols: ! @ # $ % ^ & or * ");
      //numbers
      var numbers = prompt("Enter two numbers between 0-9 ");
      //password length
      var passLength = prompt("How long would you like your password to be? (Enter a number between 8-128 ");
  }
  if (passLength < 8) {
    window.alert('Password must contain between 8 - 129 characters')
    return;
}
  if (passLength > 128) {
    window.alert("Password must contain a maximum of 129 characters");
    return;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 

//  if (passLength < 8) || (passLength > 128){
  //window.alert('Password must contain between 8 - 129 characters')
 // return null;

