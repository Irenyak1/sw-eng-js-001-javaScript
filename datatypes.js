// Data Types
// There are eight basic data types in JavaScript. They are:

// Example

// 1. STRING
// represents textual data
'hello', "hello world!"

let firstName ="Jane"
let lastName = undefined;


console.log("xxxxxxxxxxxxxxxxxxxxxxxxxx", lastName)


'Hello, world!'     // string literal
3.141592            // numeric literal
true                // boolean literal
// { a: 1, b: 2 }      // object literal key:value pair
[ 1, 2, 3 ]         // array literal
undefined           // undefined literal

console.log("************STRING*******************")
console.log( "He said, 'Hi there!'" )   // with double quotes
console.log( 'He said, \'Hi there!\'') // with single quotes and escaping
console.log( "He said, \"Hi there!\"") // with double quotes and escaping
console.log( 'He said, "Hi there!"') // with single quotes

// `5 plus 5 equals ${5 + 5}`
// = '5 plus 5 equals 10'

// let num = 2
// let num2 = 5

// let result = num + num2 

// console.log( "My result is " , )
// `Blah ${expression} blah.`

// 2. NUMBER
// an integer or a floating-point number
3, 3.234, 3e-2 
1, 2, -3, 4.5, -6.77, 234891234 // Examples of numeric literals



// 3. UNDEFINED
// a data type whose variable is not initialized
let a;
let ab = undefined;

// 4. NULL
// denotes a null value
let b = null;
console.log(typeof null) //object

// 5. BOOLEAN
// Any of two values: true or false
true && false

let num3 = 5;
let num4 = 5

console.log("-----------------------------", num3 == num4)

// 6. BIGINT
// an integer with arbitrary length
900719925124740999n , 1n 

// 7. SYMBOL
// data type whose instances are unique and immutable
let value = Symbol('hello');

// 8. OBJECT
// key-value pairs of collection of data
let student = {firstName:"Irene" };