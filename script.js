// Assignment Code

const generateButton = document.getElementById('generate')
generateButton.addEventListener('click', writePassword)

//Write password to the input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

//Prompts after clicking generate password button

function generatePassword() {

    var passwordLength = prompt("Please enter password length. Select between 8 and 128.");

    while (passwordLength < 8 || passwordLength > 128) {
        alert("You must choose between 8 and 128");
        passwordLength = prompt("Please choose password length: Select between 8 and 128.");
    }

    var numbers = confirm("Do you want numbers in your password?");

    var lowerCases = confirm("Do you want lower cases in your password?");

    var upperCases = confirm("Do you want upper cases in your password?");

    var special = confirm("Do you want special characters in your password?");

    // user making choices check

    var chars = [];


    // Options for the password
    var numArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    if (numbers) {
        chars = chars.concat(numArray);
    }

    var small = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    if (lowerCases) {
        chars = chars.concat(small)
    }

    var big = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    if (upperCases) {
        chars = chars.concat(big)
    }

    var specialChars = ["!", "@", "$", "%", "^", "&", "*", "(", ")", "+", "<", ">", ":", ";", "{", "}"]
    if (special) {
        chars = chars.concat(specialChars)
    }

    // final step for to generate a password

    var randomPasswordGenerated = [];

    console.log(chars)
    console.log(passwordLength)

    for (let i = 0; i < passwordLength; i++) {
        var randomNumberPicked = Math.floor(Math.random() * chars.length);
        randomPasswordGenerated.push(chars[randomNumberPicked]);
    }

    return randomPasswordGenerated;

}