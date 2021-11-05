// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  function generatePassword() {
// prompt for length ** NEED to limit input to between 8 and 128.
    var passwordLength = prompt("How long would you like your password to be? \nBetween 8 and 128 characters.");
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Invalid input, \nPlease input a number between 8 and 128.");
      generatePassword()
    } else {
      function characterTypes() {
          //confirm for content types ** NEED to ensure atleast one is true
        var lowerCaseConfirm = confirm("Do you want to include lowercase letters?")
        var upperCaseConfirm = confirm("Do you want to include uppercase letters?")
        var numbersConfirm = confirm("Do you want to include numbers?")
        var specCharsConfirm = confirm("Do you want to include special characters?")
      }
    }




  }
  // Data sets
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]
  // var numbers = 
  var specChars = ["!", "#", "$", "%", "&", "*", "[", "]", "{", "}", "@", "~", "=", "+", "-", "_", "(", ")", "^", ".", "/", "|", ";", ":"]

  alert(length + lowerCase + upperCase + numbers + specChars)


  passwordText.value = password;

}






// create password data sets
// randomize selection
// output to page




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
