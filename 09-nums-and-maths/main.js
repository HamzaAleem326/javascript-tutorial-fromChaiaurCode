// ==============================
// JavaScript Numbers and Math Operations
// ==============================

// ==============================
// 1. Defining Numbers
// ==============================

// Basic Number Declaration
const score = 400; 
console.log(score); // Output: 400

// Using the Number Object
const highScore = new Number(599); // Converts number into a Number object
console.log(highScore); // Output: [Number: 599]

// Key Note:
// - Primitive numbers are stored directly.
// - `new Number()` creates a Number object.


// ==============================
// 2. Number Properties and Methods
// ==============================

// toString(): Converts number to string and allows string properties
console.log(highScore.toString().length); 
// Output: 3 (Length of the number as a string)

// toFixed(): Rounds number to a fixed decimal precision
console.log(highScore.toFixed(2)); 
// Output: 599.00 (Commonly used for 2 decimal places)

const otherNumber = 23.66;
console.log(otherNumber.toPrecision(3));
// Output: 23.7 (Precision up to 3 significant digits)
// Note: Returns a string.

const otherNumber2 = 2345.66;
console.log(otherNumber2.toPrecision(3));
// Output: 2.35e+3 (Converts large numbers into exponential form)


// ==============================
// 3. Formatting Numbers with toLocaleString()
// ==============================

// Formatting as Currency
const hundreds = 100000000;
console.log(hundreds.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
// Output: $100,000,000.00

// Formatting Dates
const date = new Date();
console.log(date.toLocaleString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric', weekday: 'long'
}));
// Example Output: Wednesday, June 12, 2024


// ==============================
// 4. Math Object
// ==============================

// Math is a built-in object for mathematical operations
console.log(Math); // Output: [Math: object]

// Math.abs(): Returns the absolute (positive) value
console.log(Math.abs(-4.7)); // Output: 4.7

// Math.round(): Rounds to the nearest integer
console.log(Math.round(4.7)); // Output: 5

// Math.ceil(): ceil means top so it it obviously round it up
console.log(Math.ceil(4.4)); // Output: 5

// Math.floor(): floor means bottom so it definitely round it to lowest
console.log(Math.floor(4.7)); // Output: 4

// Math.min(): Returns the smallest number
console.log(Math.min(0, 150, 30, 20, -8, -200)); // Output: -200

// Math.max(): Returns the largest number
console.log(Math.max(0, 150, 30, 20, -8, -200)); // Output: 150


// ==============================
// 5. Generating Random Numbers
// ==============================

// Random number between 0 and 1
console.log(Math.random()); // Example Output: unexpected

// Random number between 0 and 10
console.log(Math.random() * 10); // Example Output: unexpected

// Random number between 1 and 10
console.log((Math.random() * 10) + 1); // Example Output: unexpected

// ==============================
// 6. Random Number Formula
// ==============================

const min = 10;
const max = 20;

// Generic formula for random numbers between min and max
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// Output: Random number between 10 and 20

// Clear Explanation of Formula:
// Math.random() → Generates random number (0-1)
// (max - min + 1) → Adjusts the range (inclusive of max)
// + min → Shifts range to start from min


// ==============================
// Best Practices
// ==============================
// - Use `Number` methods (`toFixed`, `toPrecision`) carefully, especially with string outputs.
// - Prefer `toLocaleString()` for formatting currency, dates, or large numbers.
// - Understand the difference between `Math.ceil`, `Math.floor`, and `Math.round`.
// - Always use the random number formula for predictable results within a range.

console.log("JavaScript Numbers and Math Notes Completed!");
