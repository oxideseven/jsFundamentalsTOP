
// Adds 7 to a variable
function add7 (addNum) {
    return parseInt (addNum) + 7;
}

// Multiplies two variables
function multiply (multNum1, multNum2) {
    return parseInt (multNum1) * parseInt (multNum2);
}

// Capitalizes the first letter of a string and makes the rest lowercase.
function capitalize (capString) {
    return capString.charAt(0).toUpperCase() + capString.slice(1).toLowerCase();
}

// Returns the last letter of a string
function lastLetter (lastString) {
    return lastString.slice(-1);
}

// Prompts to fill variables for the above functions.
let addNum = prompt ('Enter a number to add to 7: ',);
let multNum1 = prompt ('Enter a number to multiply: ',);
let multNum2 = prompt ('Enter a second number to multiply: ',);
let capString = prompt ("Type a sentence (case doesn't matter): ",);
let lastString = prompt ('Gimme another sentence: ',);

// Displays results of the above functions in the console.
console.log (`add7: ${addNum} + 7 = ${add7(addNum)}`);
console.log (`multiply: ${multNum1} * ${multNum2} = ${multiply(multNum1, multNum2)}`);
console.log (`capitalize: ${capitalize(capString)}`);
console.log (`lastLetter: ${lastLetter(lastString)}`);
