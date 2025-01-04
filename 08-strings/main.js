// JavaScript String Operations

// 1. String Concatenation (Joining Strings)

// OLD Way (Not Recommended)
const name = "hamza";
const repoCount = 50;

console.log(name + " has " + repoCount + " repositories."); 
// Output: hamza has 50 repositories.

// NEW Way (Best Practice - Using Backticks ` `)
console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`); 
// Output: Hello, my name is hamza and my repo count is 50

// Why Use Backticks (` `)?
// - Backticks let you **combine strings and variables easily**.
// - You can **embed variables** inside `${}` without breaking the string.


// 2. Creating a String Object (Not Common)
let gameName = new String('hamza'); 
// The `new String()` creates a string as an object.

console.log(gameName[0]); 
// Output: h (string starts from index 0)


// 3. String Length
console.log(gameName.length); 
// Output: 5 (the number of characters)


// 4. Changing Text to Uppercase
console.log(gameName.toUpperCase()); 
// Output: HAMZA (makes all letters uppercase)


// 5. Extracting Part of a String
// substring and slice
// Notes on substring() vs slice() in JavaScript

// slice(startIndex, endIndex)
// - Supports negative indices (counts from the end).
// - Does NOT swap indices if startIndex > endIndex (returns empty string).
// - Extracts characters from startIndex to endIndex (excluding endIndex).

let str = 'abcdefghij';

// Examples with slice()
console.log(str.slice(2, 5));    // 'cde' (from index 2 to 4)
console.log(str.slice(-4));      // 'ghij' (last 4 characters)
console.log(str.slice(-4, -1));  // 'ghi' (from -4 to -2, excluding -1)
console.log(str.slice(5, 2));    // '' (empty string, no swapping)


// substring(startIndex, endIndex)
// - DOES NOT support negative indices (treated as 0).
// - Swaps indices if startIndex > endIndex.
// - Extracts characters from startIndex to endIndex (excluding endIndex).

// Examples with substring()
console.log(str.substring(2, 5));  // 'cde' (from index 2 to 4)
console.log(str.substring(-4, 5)); // 'abcde' (negative treated as 0)
console.log(str.substring(5, 2));  // 'cde' (swaps 5 and 2)

/* Key Differences Summary:
1. slice() supports negative indices; substring() does not.
2. slice() does NOT swap indices; substring() swaps them if needed.
3. Use slice() when working with the end of the string or needing precise control.
4. Use substring() if swapping indices might be helpful or negative values aren't needed.
*/



// 6. Removing Extra Spaces
let email = "       google@gmail.com        ";
console.log(email.trim()); 
// Output: google@gmail.com 
// `trim()` removes **spaces at the beginning and end**.

// 7. Finding Characters in a String

// Find a Character by Index
console.log(gameName.charAt(3)); 
// Output: z (character at index 3)

// Find the First Occurrence of a Character
console.log(gameName.indexOf('m')); 
// Output: 2 (first time 'm' appears at index 2)


// 8. Replacing Part of a String
const url = "https://www.apple.com/macbook-air/";
console.log(url.replace('-', ' ')); 
// Output: https://www.apple.com/macbook air/ 
// `replace('-',' ')` changes the first '-' to a space.


// 9. Checking If a String Contains Something
console.log(url.includes('mac')); 
// Output: true 
// Why Use `includes()`?
// - **Check if a word exists** inside a string.
// - Useful for **search functions** or **checking user input**.


// 10. Splitting a String into an Array
const string = "hamza-aleem-developer";
console.log(string.split('-'));
// Output: [ 'hamza', 'aleem', 'developer' ] 
// `split('-')` breaks the string at every '-' and returns an array.


// 11. Joining Strings
const firstName = "Hamza";
const lastName = "Aleem";

console.log(firstName.concat(" ", lastName)); 
// Output: Hamza Aleem
// `concat()` joins two or more strings together.

