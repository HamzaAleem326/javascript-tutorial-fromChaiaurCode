// JavaScript Memory: Stack vs Heap

// Memory in JavaScript is divided into two types:
// 1. Primitive (Stack) Memory
// 2. Non-Primitive (Heap) Memory


// Primitive Data Types (Stored in Stack)
// ----------------------------------------
// Data types: string, number, boolean, undefined, null, symbol, bigint
// - Stored **by value**, meaning data is **copied** when assigned to a new variable.
// - Changes to one variable **don’t affect** the original value.

let youtubeChannel = "success";    // Stored in Stack
let youtubeChannel2 = youtubeChannel;  // Copy of the value is created

// Update youtubeChannel2 (doesn't affect the original)
youtubeChannel2 = "just make projects and post on LinkedIn is success";

console.log(youtubeChannel);   // Output: success (original remains unchanged)
console.log(youtubeChannel2);  // Output: just make projects and post on LinkedIn is success


// Non-Primitive Data Types (Stored in Heap)
// ------------------------------------------
// Data types: objects, arrays, functions
// - Stored **by reference**, meaning only the memory **address** is copied.
// - Changes through one variable affect all variables pointing to the same object.

let detail = {
    name: "Hamza",    // Object stored in Heap
    email: "ss@gmail.com"
};

let detail2 = detail;  // Reference to the same memory location

// Update through detail2 (affects both variables)
detail2.name = "Aleem";  

console.log(detail.name);    // Output: Aleem (changed because reference is shared)
console.log(detail2.name);   // Output: Aleem

// Why This Happens:
// - Objects and arrays are **reference types**.
// - When assigned to another variable, only the **memory reference** is copied, not the actual data.
// - Both variables point to the **same memory location**.

