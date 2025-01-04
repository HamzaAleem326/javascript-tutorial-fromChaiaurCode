// JavaScript Arithmetic and Increment/Decrement Operators

// 1. Basic Arithmetic Operations:
console.log(2 + 3); // Addition: 2 + 3 = 5
console.log(2 - 3); // Subtraction: 2 - 3 = -1
console.log(2 * 3); // Multiplication: 2 * 3 = 6
console.log(2 / 3); // Division: 2 / 3 = 0.666...
console.log(2 ** 3); // Exponentiation: 2 raised to the power of 3 = 8
console.log(2 % 3); // Remainder: 2 divided by 3 leaves a remainder of 2

// Explanation of `%` (Remainder):
// The remainder operator `%` returns the leftover amount after division.
// Example:
console.log(10 % 3); // Output: 1 (10 divided by 3 leaves 1 as remainder)
console.log(15 % 4); // Output: 3 (15 divided by 4 leaves 3 as remainder)


// 2. Avoid Complex Expressions in Production:
console.log(2 + 3 / 4 % 5); 
// Complex expressions like this can be confusing to read and debug.
// Instead, break it into simple steps for clarity:

let division = 3 / 4;       // Step 1: Divide 3 by 4
let remainder = division % 5; // Step 2: Find the remainder when divided by 5
let result = 2 + remainder; // Step 3: Add 2 to the result
console.log(result);        // Output: 2.75

// Best Practice:
// - Avoid writing everything in one line.
// - Breaking down operations improves readability and helps others understand your code.


// 3. Working with Strings and Arithmetic:
let fName = "Hamza";
let lName = " Aleem";
let fullName = fName + lName; // Concatenates (combines) the strings
console.log(fullName); // Output: Hamza Aleem

// Explanation:
// - The `+` operator can combine strings, but other arithmetic operators are not allowed.
// Example:
console.log("Hello" - "World"); // Output: NaN (Not a Number)

// Real-World Use:
// - String concatenation is useful for combining user input, names, messages, etc.


// 4. Operator Tricks: Not Recommended in Production
console.log(+true); // Converts `true` to 1: Output -> 1
console.log(+"");   // Converts an empty string to 0: Output -> 0

// Explanation:
// - `+` before a value converts it into a number (if possible).
// - These shortcuts can be confusing and are not practical in real-world projects.
// Instead, use clear conversions.


// 5. Readability: Avoid Complex Assignments
let num1, num2, num3;

// Avoid this:
num1 = num1 = num1 = 2 + 4; // Confusing and reduces readability

// Instead, write clear and simple code:
num1 = 2 + 4; // Perform the calculation first
num2 = num1;  // Assign the same value to other variables
num3 = num1;
console.log(num1, num2, num3); // Output: 6 6 6

// Real-World Advice:
// - Always prioritize readability and clarity.
// - Avoid shortcuts that make your code harder to understand.


// 6. Increment and Decrement Operators:
let gameScore = 100;

// Postfix Increment:
gameScore++; 
console.log(gameScore); // Output: 101 (Increments by 1)

// Prefix Increment:
++gameScore;
console.log(gameScore); // Output: 102 (Increments by 1)

// Explanation:
// - **Postfix (variable++):** The current value is used first, then the variable is incremented.
// Example:
let postfixExample = gameScore++;
console.log(postfixExample); // Output: 102 (original value used)
console.log(gameScore);      // Output: 103 (incremented after)

// - **Prefix (++variable):** The variable is incremented first, then the new value is used.
// Example:
let prefixExample = ++gameScore;
console.log(prefixExample); // Output: 104 (incremented value used)
console.log(gameScore);     // Output: 104

// Real-World Use:
// - Increment (`++`) is commonly used to count iterations, scores, or items added into cart.
// Example: Tracking user progress in a game or adding items to a shopping cart.
// - Decrement (`--`) is used to reduce values, like tracking remaining livesgames in  or reducing stock in stock market.
// Example: Reducing player lives after a mistake or deducting an item's quantity.


// 7. Summary of Key Points:
// - Use arithmetic operators (`+`, `-`, `*`, `/`, `%`, `**`) with clear intent.
// - Break down complex expressions into smaller, readable steps.
// - Avoid operator tricks (`+true`, `+""`) in production code.
// - Increment (`++`) and decrement (`--`) are essential for counters and loops.
// - Always prioritize readability and clarity for better maintainability.
