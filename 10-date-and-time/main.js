// ==============================
// JavaScript Dates and Time - Enhanced Notes
// ==============================

// 1. 📅 **Getting the Current Date and Time**
let myDate = new Date();
console.log(myDate); 
// Output: 2025-01-06T20:40:51.664Z (ISO format with timezone info)
// Note: The `664Z` represents milliseconds and timezone in UTC. It can be formatted as needed.

// Human-Friendly Format
console.log(myDate.toString()); 
// Output: Tue Jan 07 2025 01:43:30 GMT+0500 (Pakistan Standard Time)

// Only Date
console.log(myDate.toDateString()); 
// Output: Tue Jan 07 2025

// Only Time
console.log(myDate.toTimeString()); 
// Output: 01:43:30 GMT+0500

// Check Data Type
console.log(typeof myDate); 
// Output: object (Date objects are a special type of object in JavaScript)

// Key Tip: Different methods provide different formats. Choose the one that suits your needs.


// 2. 🛠️ **Creating Custom Dates**
// Create a Specific Date and Time
let createMyDate = new Date(2025, 0, 7, 1, 43, 30, 0); 
// Parameters: year, month (0-based), day, hour, minute, second, millisecond
console.log(createMyDate.toDateString()); 
// Output: Tue Jan 07 2025

// Locale-Specific Format
console.log(createMyDate.toLocaleString()); 
// Output: 1/7/2025, 1:43:30 AM

// Custom Date from String
let createMyDate2 = new Date("2025-01-14");
console.log(createMyDate2.toDateString()); 
// Output: Tue Jan 14 2025

// Tip: ISO format (`yyyy-mm-dd`) is preferred to avoid regional confusion.


// 3. 🗓️ **Formatting Dates in Specific Patterns**
// Locale-specific Date Only
console.log(createMyDate.toLocaleDateString('en-US')); 
// Output: 1/7/2025

// Custom Locale Options
console.log(createMyDate.toLocaleString('en-GB', {
    year: 'numeric', month: '2-digit', day: '2-digit'
})); 
// Output: 07/01/2025 (UK Format)


// 4. ⏱️ **Timestamps and Date Comparisons**
// Current Timestamp in Milliseconds (since January 1, 1970 UTC)
let myTimeStamp = Date.now();
console.log(myTimeStamp); 
// Output: 1736197306243

// Compare Two Dates
console.log(createMyDate2.getTime()); 
// Output: 1736870400000 (Timestamp representation)

// Convert Milliseconds to Seconds
console.log(Math.floor(Date.now() / 1000)); 
// Output: 1736197306


// 5. 📊 **Extracting Date Components**
let newDate = new Date();

// Get Month (Add +1 for user-friendly display)
console.log(newDate.getMonth() + 1); 
// Output: 1-12

// Get Day of the Week (0 = Sunday, 6 = Saturday)
console.log(newDate.getDay()); 
// Output: 0-6

// Get Full Year
console.log(newDate.getFullYear()); 
// Output: 2025


// 6. 🌍 **Formatting with Locale Options**
// Display Day Name (e.g., Monday, Tuesday)
console.log(newDate.toLocaleString('default', {
    weekday: 'long'
})); 
// Output: Tuesday

// Display Full Locale-Specific Date and Time
console.log(newDate.toLocaleString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric', weekday: 'long'
})); 
// Output: Tuesday, January 7, 2025


// 📝 **Best Practices:**
// - Prefer ISO 8601 (`yyyy-mm-dd`) for consistency.
// - Use `toLocaleString` for regional formatting.
// - Be cautious with timezone differences.
// - Remember: JavaScript months start from 0.
// - Use timestamps for precise date comparisons.

console.log("✅ JavaScript Dates and Time Notes Enhanced!");
