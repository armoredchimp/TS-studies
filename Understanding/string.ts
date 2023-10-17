let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "String";
if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  // never intended to break/crash script
  throw { message: message, errorCode: code };
}

generateError("Error 500", 500);
