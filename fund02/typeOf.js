console.log(`typeof undefined: ${typeof undefined}`); // "undefined"
console.log(`typeof 0: ${typeof 0}`); // "number"
console.log(`typeof 10n: ${typeof 10n}`);; // "bigint"
console.log(`typeof true: ${typeof true}`); // "boolean"
console.log(`typeof "foo": ${typeof "foo"}`); // "string"
console.log(`typeof Symbol("id"): ${typeof Symbol("id")}`); // "symbol"
console.log(`typeof Math: ${typeof Math}`); // "object"
console.log(`typeof null: ${typeof null}`); // "object" not really, null is null. This is compatibility.
console.log(`typeof alert: ${typeof alert}`); // "function"