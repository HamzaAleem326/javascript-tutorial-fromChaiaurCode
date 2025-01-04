// ==============================
// JavaScript Notes - Data Types, Strict Mode, and Best Practices
// ==============================

// ==============================
// 1. "use strict"; 
// ==============================
// "use strict" enables **strict mode** in JavaScript:
// - Enforces modern JavaScript rules.
// - Prevents undeclared variables and unsafe actions.
// - Helps catch coding mistakes and avoid bugs.

"use strict"; // Activates strict mode

// Example: Without "use strict" (Commented out to prevent an error):
// x = 10; // No error (bad practice without "use strict").
// console.log(x); // Would cause an error due to undeclared variable.


// ==============================
// Data Types Overview
// ==============================

// JavaScript Data Types are divided into two main categories:

// **Primitive Data Types** (Stored directly in memory):
// - string, number, boolean, null, undefined, symbol, bigint

// **Non-Primitive Data Types** (Stored by reference):
// - object (including arrays, functions)


// ==============================
// 2. typeof Operator
// ==============================
// `typeof` checks the **data type** of a value or variable.
// It returns the data type as a string.

console.log(typeof "Hello");      // Output: string
console.log(typeof 123);          // Output: number
console.log(typeof true);         // Output: boolean
console.log(typeof undefined);    // Output: undefined
console.log(typeof null);         // Output: object (Why? See explanation below)
console.log(typeof Symbol("id")); // Output: symbol

// Why Does `typeof null` Return "object"? 
// - This is a **historical bug** in JavaScript.
// - In JavaScript’s early development, **data types** were internally labeled with codes.
// - Objects were given the code `0` (binary representation).
// - **`null` was mistakenly labeled as an object**, even though it means "empty" or "nothing."
// - This **mistake cannot be fixed** because millions of websites depend on this behavior.


// ==============================
// Primitive Data Types (7 Types)
// ==============================

// ==============================
// 3. String (Text Data)
// ==============================

let userName = "Hamza Aleem"; 
let greeting = "Hello, how are you?";

console.log(userName);   // Output: Hamza Aleem
console.log(greeting);   // Output: Hello, how are you?
console.log(typeof userName); // Output: string

// Use Case:
// Strings are used for messages, user input, and text storage.


// ==============================
// 4. Number (Integers & Decimals)
// ==============================

let age = 25;       // Integer
let price = 99.99;  // Decimal

console.log(age, price);        // Output: 25 99.99
console.log(typeof age);        // Output: number

// Special Case: Max Safe Value in JavaScript
let maxSafeValue = Number.MAX_SAFE_INTEGER;
console.log(maxSafeValue); // Output: 9007199254740991 we can also write max max in 2^53-1

let limit = 2 ** 53 -1;// number datatypes have limit you cant assign value bigger than this.
console.log(limit); // output 9007199254740991 we can also check it with maxsafeinteger


// Math Operations:
let sum = 10 + 20; 
let product = 5 * 4; 
console.log(sum, product); // Output: 30 20


// ==============================
// 5. BigInt (Large Numbers)
// ==============================
// **BigInt** is used for numbers **larger** than 2^53-1 (the safe integer limit).
// Add `n` at the end of a number or use `BigInt()`.

let bigNumber = 1234567890123456789012345678901234567890n;
let anotherBigInt = BigInt(99999999999999999);

console.log(bigNumber);          // Output: 1234567890123456789012345678901234567890n
console.log(anotherBigInt);      // Output: 99999999999999999n
console.log(typeof bigNumber);   // Output: bigint


// ==============================
// 6. Boolean (True/False)
// ==============================
// Booleans are **true** or **false** values.

let isDeveloper = true; 
let hasExperience = false;

console.log(isDeveloper, hasExperience);  // Output: true false
console.log(typeof isDeveloper);          // Output: boolean

// Use Case:
// Booleans are used in decision-making and conditional checks.

let isAdult = age > 18; 
console.log(isAdult); // Output: true


// ==============================
// 7. Null (Empty Value)
// ==============================
// **Null** means "nothing" or "empty value." 
// Developers use it when they **intentionally** clear a variable.

let temperature = null; 
console.log(temperature);        // Output: null
console.log(typeof temperature); // Output: object (JavaScript mistake)

// Example Use Case:
// A server might return `null` if no data is available.


// ==============================
// 8. Undefined (No Value Assigned)
// ==============================
// **Undefined** means a variable is declared but **not assigned** a value.

let password; 
console.log(password);        // Output: undefined
console.log(typeof password); // Output: undefined

// Avoid Explicit Assignment of `undefined` (Not Recommended)
let passcode = undefined; 
console.log(passcode);        // Output: undefined


// ==============================
// 9. Symbol (Unique Identifiers)
// ==============================
// **Symbol** creates **unique values** (often used as object keys).

let symbol1 = Symbol("123"); 
let anotherSymbol = Symbol("123"); 

console.log(symbol1 === anotherSymbol); // Output: false (symbols are always unique)
console.log(typeof symbol1);            // Output: symbol


// ==============================
// Non-Primitive Data Types (Reference Types)
// ==============================

// ==============================
// 10. Object (Key-Value Pairs)
// ==============================
// An **object** stores **key-value pairs.**

let user = {
    name: "Hamza Aleem",
    age: 25,
    isDeveloper: true,
};

console.log(user);           // Output: { name: "Hamza Aleem", age: 25, isDeveloper: true }
console.log(user.name);      // Output: Hamza Aleem
console.log(typeof user);    // Output: object


// ==============================
// 11. Arrays (Lists of Data)
// ==============================
// An **array** is a list of items.

const laptopBrands = ["Lenovo", "Dell", "HP", "Samsung", "Mac" ]; 

console.log(laptopBrands);         // Output: [ "Lenovo", "Dell", "HP", "Samsung", "Mac" ]
console.log(typeof laptopBrands);  // Output: object (Arrays are objects)


// ==============================
// 12. Functions (Reusable Code)
// ==============================
// Functions are **reusable blocks of code.**

const myFunction = function() {
    console.log("Hello World"); 
};

myFunction();              // Output: Hello World
console.log(typeof myFunction); // Output: function


// ==============================
// Best Practices & Advice
// ==============================

// 1. **Master Objects and Browser Events.**
//    - Objects help organize data efficiently.
//    - Browser events handle user interactions on websites.

// 2. **Avoid undeclared variables.** 
//    - Always declare variables using `let`, `const`, or `var` to avoid scope issues.

// 3. **Use `typeof`** to inspect data types when debugging.
//    - It helps identify unexpected types and avoid bugs.

// 4. **Prefer `===` over `==`** to avoid type coercion issues.
//    - `===` checks **value + type**, while `==` only checks **value** (after type conversion).

// 5. **Write clean and readable code.**
//    - Use consistent naming and avoid deeply nested code.

// 6. **Be aware of JavaScript quirks**, such as:
//    - `typeof null === "object"` (JavaScript mistake).
//    - Arrays and functions being objects.
//    - Symbols being unique even when given the same description.

