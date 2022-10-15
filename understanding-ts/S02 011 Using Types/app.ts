// Use UNKNOWN if you dont know the value type to input (better than type ANY)
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}

// NEVER type
function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
    // while (true) {}
}

generateError('An error occurred!', 500);