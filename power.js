
// A convoluted function for learning loops. < num ** exp > could do the same.
function calcExp(num, exp) {
    // let result = num;

    // for (let i = 1; i < exp; i++) {
    // result *= num;
    // }

    // return result;
    return num ** exp;
}

let num = prompt("Provide an interger greater than 0: ", '');
let exp = prompt("Provide another interger greater than 0: ", '');

if ((num < 1 || exp < 1) || (exp == null || num == null)) {
    console.log(`You didn't read the prompt correctly`);
} else {
    console.log( calcExp(num, exp) );
}
