// Assignment Code
var generateBtn = document.querySelector("#generate");

var charset = "abcdefghijklmnopqrstuvwxyz";
var specialChars = "~!@#$%^&*()_+";
var numeric = "0123456789";


generateBtn.addEventListener("click", writePassword);



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.placeholder = 
  passwordText.value = password;

}

function generatePassword() {
  var length = getLength();
  var characterType = characterTypes();
  var randomString = "";

  if  (characterType == "uppercase") {
    for (var i = 0; i < length; ++i) {
        randomString += charset.toUpperCase().charAt(Math.floor(Math.random() * charset.length));
    }
    return randomString;
  } else if (characterType == "lowercase") {
    for (var i = 0; i < length; ++i) {
      randomString += charset.toLowerCase().charAt(Math.floor(Math.random() * charset.length));
    }
    return randomString;
  }else if (characterType == 'numeric') {
    for (var i = 0; i < length; ++i) {
      randomString += numeric.charAt(Math.floor(Math.random() * numeric.length));
    }
    return randomString;


  }else if (characterType == 'special characters'){
    for (var i = 0; i < length; ++i) {
      randomString += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
    }
    return randomString;
  } else {
    alert('error');  
  }
 

}

function getLength() {
  var length = prompt("Choose password length between 8-128?")
  if (length > 128 || length < 8) {
    alert ("Try again")
    getLength();
  }
  return length;
}

function characterTypes() {
  var types = prompt("Choose lowercase, uppercase, numeric, and/or special characters")
  if (types == 'lowercase' || types == 'uppercase' || types == 'numeric' || types == 'special characters'){
    return types;
  } else {
    alert ("Try again!")
    characterTypes();
  }

  
}

function getNumbers() {
  var types = prompt("Do you want numeric?")
  if (numeric === "0123456789") {
      alert ("Try again")
      getNumbers();
    }
    return types;
  }