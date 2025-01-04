// Variables in JavaScript:
// Variables are used to store values, just like in mathematics when we assign a value to a symbol, like x = 1.
// Think of variables as containers that hold data. For example, in a kitchen, different boxes are used to store different items like sugar, flour, etc.

// In JavaScript, we have three ways to declare variables: `const`, `let`, and `var`.


// 1. `const` (Constant Variables):
// `const` is used to declare variables that cannot be changed after they are assigned.
// Think of it like constants in mathematics, such as π (pi = 3.14159), which always has the same value.

const accountId = 144111; // Declaring a constant variable.
console.log(accountId); // Output: 144111

// If you try to change the value of a `const` variable, JavaScript will throw an error.
// Example:
// accountId = 123456; // This will throw an error because `accountId` is constant.


// 2. `let` (Block-Scoped Variables):
// `let` is used to declare variables whose values can be updated or changed later.

let accountEmail = "hamza@gmail.com"; // Declaring a `let` variable and assigning a string means text under "" value.
console.log(accountEmail); // Output: hamza@gmail.com

// Updating the value of a `let` variable:
accountEmail = "newemail@example.com";
console.log(accountEmail); // Output: newemail@example.com

// `let` is block-scoped, meaning it is only accessible within the block (enclosed by `{}`) where it is declared.
// Example:
{
    let blockScopedVariable = "I am inside a block";
    console.log(blockScopedVariable); // Output: I am inside a block
}
// console.log(blockScopedVariable); // Error: blockScopedVariable is not defined outside the block.


// 3. `var` (Avoid Using `var`):
// `var` was used in the earlier days of JavaScript to declare variables, but it has issues with block scope and function scope.
// It is now recommended to use `let` or `const` instead of `var`.

var accountPassword = 121212; // Declaring a variable using `var`.
console.log(accountPassword); // Output: 121212

// Example of `var` issues:
// `var` is not block-scoped, so it can be accessed outside the block where it is declared.
{
    var notBlockScoped = "I am outside the block!";
}
console.log(notBlockScoped); // Output: I am outside the block!

// Modern JavaScript developers prefer `let` and `const` over `var` for better and safer code.


// JavaScript's Faults with Variables:
// In JavaScript, you can assign a value to a variable without declaring it (this is considered a bad practice).
// Example:
accountCity = "Karachi"; // Variable assigned without `let`, `const`, or `var`.
console.log(accountCity); // Output: Karachi

// This happens because JavaScript assumes it is a global variable, but it can lead to bugs in your code.
// Many of these issues are fixed in TypeScript, which is an advanced version (or superset) of JavaScript.


// Undefined Variables:
// If a variable is declared but not assigned a value, its value will be `undefined`.
let accountState; // Declared but not assigned.
console.log(accountState); // Output: undefined


// Printing All Variables at Once:
// Instead of using `console.log()` repeatedly, you can use `console.table()` to display all variables in a table format.
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
// Example output:
// ┌─────────┬──────────────┐
// │ (index) │   Values     │
// ├─────────┼──────────────┤
// │    0    │   144111     │
// │    1    │ "newemail@example.com" │
// │    2    │   121212     │
// │    3    │ "Karachi"    │
// │    4    │   undefined  │
// └─────────┴──────────────┘
