// JavaScript Type Conversion Notes

// 1. Checking Data Types with `typeof`:
let score = 45; // A numeric value
console.log(typeof(score)); // Output: number
console.log(typeof score);  // Output: number (same result, different syntax)
console.log(score);         // Output: 45

// Explanation:
// - The `typeof` operator is used to find the data type of a variable or value.
// - Both `typeof(score)` and `typeof score` are valid.
//   - Use `typeof score` for simple cases (shorter syntax).
//   - Use `typeof(score)` in complex expressions for better clarity.

// Example of Different Data Types:
console.log(typeof "Hello");       // Output: string
console.log(typeof 123);           // Output: number
console.log(typeof true);          // Output: boolean
console.log(typeof undefined);     // Output: undefined
console.log(typeof null);          // Output: object (a historical bug in JavaScript)
console.log(typeof Symbol("id"));  // Output: symbol


// 2. Converting Strings to Numbers:
let score2 = "67abc"; // A string containing numbers and letters
let valueinNumber2 = Number(score2); 
console.log(typeof(valueinNumber2)); // Output: number
console.log(valueinNumber2);         // Output: NaN

// Explanation:
// - The `Number()` function attempts to convert a value to a number.
// - If the string contains invalid characters (like "abc"), it results in `NaN` (Not a Number).
// - Be cautious: `NaN` is still of type "number".


// 3. Special Case: Converting `null` to a Number:
let score3 = null; // Represents "no value"
let valueinNumber3 = Number(score3);
console.log(typeof(valueinNumber3)); // Output: number
console.log(valueinNumber3);         // Output: 0

// Explanation:
// - `null` converts to 0 when changed into a number.


// 4. Special Case: Converting `undefined` to a Number:
let score4 = undefined; // Represents an uninitialized variable
let valueinNumber4 = Number(score4);
console.log(typeof(valueinNumber4)); // Output: number
console.log(valueinNumber4);         // Output: NaN

// Explanation:
// - `undefined` cannot be converted into a valid number, resulting in `NaN`.


// 5. Converting Booleans to Numbers:
let score5 = true; // A boolean value
let valueinNumber5 = Number(score5);
console.log(typeof(valueinNumber5)); // Output: number
console.log(valueinNumber5);         // Output: 1

let scoreFalse = false;
let valueinNumberFalse = Number(scoreFalse);
console.log(typeof(valueinNumberFalse)); // Output: number
console.log(valueinNumberFalse);         // Output: 0

// Explanation:
// - `true` converts to 1, and `false` converts to 0.


// 6. Converting Non-Numeric Strings to Numbers:
let score6 = "Hamza"; // A non-numeric string
let valueinNumber6 = Number(score6);
console.log(typeof(valueinNumber6)); // Output: number
console.log(valueinNumber6);         // Output: NaN

// Explanation:
// - Strings that don't represent valid numbers will result in `NaN`.


// 7. Converting an Empty String to a Number:
let score7 = ""; // An empty string
let valueinNumber7 = Number(score7);
console.log(typeof(valueinNumber7)); // Output: number
console.log(valueinNumber7);         // Output: 0

// Explanation:
// - An empty string converts to 0 when changed into a number.


// 8. Converting Numbers to Booleans:
let isLoggedIn = 1; // Numeric representation of a boolean
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn); // Output: boolean
console.log(booleanIsLoggedIn);        // Output: true

let isLoggedOut = 0; // Another numeric representation
let booleanIsLoggedOut = Boolean(isLoggedOut);
console.log(typeof booleanIsLoggedOut); // Output: boolean
console.log(booleanIsLoggedOut);        // Output: false

// Explanation:
// - Boolean conversion rules:
//   - Truthy values (convert to `true`): Non-zero numbers, non-empty strings, objects.
//   - Falsy values (convert to `false`): 0, null, undefined, NaN, "".


// 9. Converting Numbers to Strings:
let area = 87; // A numeric value
let valueinString = String(area);
console.log(typeof valueinString); // Output: string
console.log(valueinString);        // Output: "87"

// Explanation:
// - The `String()` function converts numbers into strings.
// - Even though the value looks like a number, it is now treated as text.


// 10. Examples of Truthy and Falsy Values in Boolean Conversion:
console.log(Boolean(0));        // Output: false
console.log(Boolean(1));        // Output: true
console.log(Boolean(""));       // Output: false
console.log(Boolean("Hamza"));  // Output: true
console.log(Boolean(null));     // Output: false
console.log(Boolean(undefined));// Output: false


// Summary of Common Conversions:
// 1. **String to Number:** Use `Number(value)`. Be careful of `NaN`.
// 2. **Number to String:** Use `String(value)`. Be careful because it may look like number but not treat as a number
// 3. **Any to Boolean:** Use `Boolean(value)`.
//    - Truthy: Non-zero numbers, non-empty strings, objects.
//    - Falsy: 0, null, undefined, NaN, "" (empty string).

console.log("JavaScript type conversion examples completed!");


