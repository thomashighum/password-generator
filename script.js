// Assignment Code
var generateBtn = document.querySelector("#generate");

// Data sets
var emptyArray = []
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specChars = ["!", "#", "$", "%", "&", "*", "[", "]", "{", "}", "@", "~", "=", "+", "-", "_", "(", ")", "^", ".", "/", "|", ";", ":"]



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
function generatePassword() {
// prompt for length 
    var passwordLength = prompt("How long would you like your password to be? \nBetween 8 and 128 characters.");
    // limit input to between 8 and 128.
    if (passwordLength < 8 || passwordLength > 128) {
      // if incorrect value alert and reset
      alert("Invalid input, \nPlease input a number between 8 and 128.");
      generatePassword();
    } else {
      function characterTypes() {
        var typeChoices = {  //confirm for content types
          lowerCaseConfirm: confirm("Do you want to include lowercase letters?"),
          upperCaseConfirm: confirm("Do you want to include uppercase letters?"),
          numbersConfirm: confirm("Do you want to include numbers?"),
          specCharsConfirm: confirm("Do you want to include special characters?"),
        };
        if (// confirm atleat one choice made
          typeChoices.lowerCaseConfirm === false &&
          typeChoices.upperCaseConfirm === false &&
          typeChoices.numbersConfirm === false &&
          typeChoices.specCharsConfirm === false 
        ){ // if none given alert and reset, NEED -- Continue or not
          alert("You will need to select at least one character type.")
          characterTypes()
        } else {
          //  var arrayChoices = [].concat(lowerCase, upperCase, numbers, specChars)
          function passwordRandom() { // generate the password to length and using types
            if ( typeChoices.lowerCaseConfirm){
              emptyArray = emptyArray.concat(lowerCase)
            }
            if (typeChoices.upperCaseConfirm) {
              emptyArray = emptyArray.concat(upperCase)
            }  
            if ( typeChoices.numbersConfirm){
              emptyArray = emptyArray.concat(numbers)
            }
            if ( typeChoices.specCharsConfirm){
              emptyArray = emptyArray.concat(specChars)
            }
            // emptyArray.join('');
            var newPass = ""
            for (i = 0; i < passwordLength; i++) {
              newPass += emptyArray[Math.floor(Math.random() * emptyArray.length)];
            };


            console.log(newPass)
            console.log(emptyArray)
            alert("Your new password is: \n" + newPass)
              // passwordText.value = newPass;
           
          } 
          passwordRandom()
        }
      }
      characterTypes();
    }

  }




}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
