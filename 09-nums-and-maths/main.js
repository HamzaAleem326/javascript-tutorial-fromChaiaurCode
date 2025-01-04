// Numbers

const score = 400; // in javascript we define numbers like this
console.log(score); // output: 400

const highScore = new Number(599); // in here i define a number with "new" keyword that convert it into object but also i define it number explicitly by number function
console.log(highScore); // output: [Number: 599]

console.log(highScore.toString().length); // output: 3 // here is the length of the number. i convert it into string because if i convert number into string i can use additional properties of string.
console.log(highScore.toFixed(2)); // output: 599.00 // most common presition value is used 2.

const otherNumber = 23.66;
console.log(otherNumber.toPrecision(3)) // output: 23.7 // toPrecision is use when we want spcific digits of number // also becautious because it return string  value.

const otherNumber2 = 2345.66;
console.log(otherNumber2.toPrecision(3)) // output: 2.35e+3 // if the number is too big it will be converted into exponential form.


// toLocaleString can be used for currency, date, time, number etc.
const hundreds = 100000000; // locale string for currency
console.log(hundreds.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));

const date = new Date(); // locale string for date
console.log(date.toLocaleString('en-US', {
     year: 'numeric', month: 'long', day: 'numeric' , weekday: 'long'
}));



