// JavaScript Comparisons

// Basic Comparisons
console.log(2 > 1);   // true -> 2 is greater than 1
console.log(2 < 1);   // false -> 2 is not less than 1
console.log(2 <= 1);  // false -> 2 is not less than or equal to 1
console.log(2 >= 1);  // true -> 2 is greater than or equal to 1
console.log(2 == 1);  // false -> 2 is not equal to 1 (loose equality)
console.log(2 != 1);  // true -> 2 is not equal to 1

// These comparisons are straightforward and behave predictably as both sides are numbers.

// Comparisons Involving Strings and Numbers
console.log("2" > 1);   // true -> JavaScript converts the string "2" into a number (2) for the comparison
console.log("02" > 1);  // true -> The string "02" is also converted to the number 2

// Key Note:
// JavaScript performs **type coercion** when comparing values of different types.
// Strings like "2" or "02" are converted to numbers for the sake of comparison.
// However, this can sometimes result in unexpected or non-intuitive outcomes.

// Comparisons Involving `null`
console.log(null > 0);   // false -> null is converted to 0 for numeric comparisons, but 0 > 0 is false
console.log(null == 0);  // false -> null is only loosely equal to `undefined` and not to 0
console.log(null >= 0);  // true -> null is coerced to 0, and 0 >= 0 evaluates to true

// Detailed Explanation of `null`:
// 1. `null` in JavaScript represents the intentional absence of any value or object.
//    - It’s a **primitive type** and is often used to signify "no value" or "empty."
// 2. In **numeric comparisons**, `null` is **converted to 0** during coercion.
//    - Example: In `null > 0`, JavaScript interprets this as `0 > 0`, which is false.
// 3. For **equality checks**:
//    - `null == undefined` is true because they are considered loosely equal.
//    - `null == 0` is false because `null` is not equal to any other value except `undefined`.
// 4. The behavior of `null` in comparisons can be inconsistent, leading to confusion.
//    - Example: `null >= 0` evaluates to true, but `null > 0` is false.

// Best Practice: Avoid comparing `null` with numbers or other types. Use explicit checks
// (e.g., `value === null`) to handle null values reliably.

// Loose vs. Strict Equality
console.log("2" == 2);   // true -> Loose equality (==) converts "2" into a number (2) for comparison
console.log("2" === 2);  // false -> Strict equality (===) checks both value and type

// Key Differences Between `==` and `===`:
// 1. **Loose Equality (`==`)**:
//    - Performs **type coercion** before comparing values.
//    - Example: "2" == 2 evaluates to true because the string "2" is converted to the number 2.
// 2. **Strict Equality (`===`)**:
//    - Does **not perform type coercion** and compares both value and type.
//    - Example: "2" === 2 evaluates to false because one is a string and the other is a number.

// Best Practice:
// - Use `===` (strict equality) whenever possible to avoid unexpected behavior caused by type coercion.
// - Use `==` only if you explicitly want JavaScript to perform type conversion.

// General Advice:
// 1. Avoid comparing values of different types unless you're fully aware of JavaScript's type coercion rules.
// 2. Use strict equality (`===`) for comparisons to avoid unintentional results.
// 3. If you're working with mixed types or want more robust type checking, consider using TypeScript, 
//    which prevents comparisons between incompatible types.
