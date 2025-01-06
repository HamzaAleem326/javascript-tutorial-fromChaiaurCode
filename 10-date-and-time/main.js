// ==============================
// JavaScript Dates and Time Simplified
// ==============================

// 1. 📅 **Getting the Current Date and Time**
let myDate = new Date();
console.log(myDate); 
// Example Output: 2025-01-06T20:40:51.664Z (ISO format with timezone)

// Human-Friendly Format
console.log(myDate.toString()); 
// Example Output: Tue Jan 07 2025 01:43:30 GMT+0500 (Pakistan Standard Time)

// Only Date
console.log(myDate.toDateString()); 
// Example Output: Tue Jan 07 2025

// Only Time
console.log(myDate.toTimeString()); 
// Example Output: 01:43:30 GMT+0500

// Check Type of Date
console.log(typeof myDate); 
// Output: object

// Key Tip: Different methods offer different formats. Pick what fits your needs.


// 2. 🛠️ **Custom Dates**
// Create a Specific Date and Time
let customDate = new Date(2025, 0, 7, 1, 43, 30); // month start from zero // yyyy/mm/dd/hh/mm/ms
console.log(customDate.toDateString()); 
// Output: Tue Jan 07 2025

// Locale-Specific Format
console.log(customDate.toLocaleString()); 
// Output: 1/7/2025, 1:43:30 AM


// 3. 📜 **Parsing Date Strings**
let parsedDate = new Date("2025-01-14");
console.log(parsedDate.toDateString()); 
// Output: Tue Jan 14 2025

// Tip: Prefer ISO format (`yyyy-mm-dd`) to avoid regional confusion.


// 4. ⏱️ **Working with Timestamps**
// Current Timestamp (Milliseconds since 1970)
let timestamp = Date.now();
console.log(timestamp); 
// Example Output: 1736197306243

// Compare Dates with Timestamps
console.log(parsedDate.getTime()); 
// Output: 1736870400000

// Convert Milliseconds to Seconds
console.log(Math.floor(Date.now() / 1000)); 
// Example Output: 1736197306


// 5. 🗓️ **Extracting Date Components**
let newDate = new Date();

// Get Month (Add +1 for user-friendly display)
console.log(newDate.getMonth() + 1); 
// Output: 1-12

// Get Day of the Week (0 = Sunday, 6 = Saturday)
console.log(newDate.getDay()); 
// Output: 0-6


// 6. 🌍 **Formatting Dates for Locale**
// Display Full Day Name (e.g., Monday, Tuesday)
console.log(newDate.toLocaleString('default', {
    weekday: 'long'
})); 
// Example Output: Tuesday


// 📝 **Best Practices:**
// - Prefer ISO 8601 (`yyyy-mm-dd`) for consistency.
// - Use `toLocaleString` for regional formatting.
// - Be cautious with timezone differences.
// - Remember: Months in JavaScript start from 0.

console.log("✅ JavaScript Dates and Time Notes Simplified!");
