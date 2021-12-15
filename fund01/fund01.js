
// Your JavaScript goes here!
console.log ("Hello, World!");

// Store a variable (can also use const and var)
let message = 'cheese is delicious';

// Can also store var like this, but its ugly & bad
let user = 'aemilia', age = 37; 

// Now word stores the same info as message.
let words = message; 


// var must start with letters, no numbers. It can include numbers and the two symbols $ _
// ie: userName, test$123. No hyphens, cant use reserved things like 'let' or 'if'

// const is a var that wont change. 
// For hard to recall or set prior to execution const like hex codes, use UPPERCASE for clarity.
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// Then summon with a 'let'
let color = COLOR_GREEN;
let name = 'john';
let admin = name;
let currentPlanetName = 'Earth';
let currentUserName = 'Steve'

// This is a popup message
// alert(admin); 

// Fundamentals assignemnt starts here.
console.log (1 + 2);

console.log (1 + 2 + 3 + 4 + 5 + 6);

console.log ((4 + 6 + 9) / 77);

let a = 10;
console.log (a);
console.log (9 * a);
let b = 7 * a;
console.log (b);

const MAX = 57;
let actual = MAX - 13;
let percentage = actual / MAX;

console.log (2 % 1);
console.log (2 % 2);
console.log (10 % 2);
console.log (10 % 3);
console.log (10 % 4);
console.log (10 % 5);
console.log (10 % 7);
console.log (10 % 8);

console.log ('a' == 'a'); // Compares a to a; True 
console.log ('a' === 'a'); // Compares string a to string a; True
console.log ('2' == 2); // Compares 2 to 2; True
console.log ('2' === 2); // Compares the string 2 to the number 2; False, not the same type.
