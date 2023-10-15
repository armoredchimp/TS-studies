"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "String";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    // never intended to break/crash script
    throw { message: message, errorCode: code };
}
generateError("Error 500", 500);
