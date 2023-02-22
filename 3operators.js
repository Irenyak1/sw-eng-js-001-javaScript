// OPERATORS
// What is an Operator
// An operator is a symbol that usually represents an action or process
// let sum = 10 + 20;
// = Assignment Operator
// + Arithmetic Operator (addition)

// Operators
// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// Logical Operators
// Type Operators
// Bitwise Operators


/********** Arithmetic Operators ******************/
// + Addition
// - Subtraction
// * Multiplication
// / Division
// % Modulus (Remainder of Division)
// ** Exponential
// ++ Increment
// -- Decrement

let x = 6;
let y = 4;

// operands 

// Addition
let result1 = x + y;
console.log("Addition result is: " +result1)

// Subtraction
let result2 = x - y;
console.log("Subtraction result is: " + result2)

// Multiplication
let result3 = x * y;
console.log("Multiplication result is: " +result3)

// Division
let result4 = x / y;
console.log("Division result is: " +result4)

// Modulus (Remainder of Division)
let result5 = x % y;
console.log("Modulus result is: " +result5)
console.log(-17 % 5)

// Exponential x to the power y
let result6 = x ** y;
console.log("Exponential result is: " +result6)

// ++ Increment
// Post increement
let a = 10;
let result7 = 2 + a++ 
console.log("Post increment result is: " +result7)//12
console.log("After increment " + a)

// Pre increment
let b = 10;
let result8 = 2 + ++b
console.log("Pre increment result is: " +result8)//13

// -- Decrement
// Post decrement
let c = 10;
let result9 = 2 + c-- 
console.log("Post decrement result is: " +result9)
console.log("After decrement " + c)

// Pre decrement
let d = 10;
let result10 = 2 + --d 
console.log("Pre decrement result is: " +result10)


/********** Assignment Operators ******************/
// = Assign 
// += Add and assign
// -=  Sub and assign
// *=  Multiply and assign
// /=  Divide and assign
// %=  Modulus and assign
// **= Exponential and assign

// = Assign 
let e = 10;
e = 5 + 10;

// += Add and assign
let f = 10;
f += 5  // same as f = f+5
// f = 10 + 5
console.log(f)

// -=  Sub and assign
let g = 15
g -= 5  // same as g = g-5
console.log(g)

// *=  Multiply and assign
let h = 15
h *= 5  // same as h = h*5
console.log(h)

// /=  Divide and assign
let j = 15
j /= 5  // same as j = j/5
console.log(j)

// %=  Modulus and assign
let k = 15
k %= 5  // same as k = k%5
console.log(k)

// **= Exponential and assign
let l = 15
l **= 5  // same as l = l**5
console.log(l)

/********** Comparison Operators ******************/
// ==  equal to
// ===  equal value and equal type
// !=  not equal to
// !==  not equal value and type
// ＞  greater than
// ＜  less than
// ＞=  greater than or equal
// ＜=  less than or equal
// ?  ternary operator

let m = 10;
let n = 15;
let p = '15';

// ==  equal to
console.log('/********** Comparison Operators ******************/') 
console.log('Equals =', m == n) 
console.log('Equals =', n == p) 

// ===  equal value and equal data type
console.log("Equal value and equal data type =", n === p) 

// !=  not equal to
console.log('Not equals =', n != p) 

// !==  not equal value and type
console.log("Not equal value and equal type =", n !== p) 

// ＞  greater than
console.log('Greater than =', m > n) 

// ＜  less than
console.log('Less than =', m < n) 

// ＞=  greater than or equal
console.log('Greater than or equal =', m >= n) 

// ＜=  less than or equal
console.log('Less than or equal =', m <= n) 

// ?  ternary operator
/* 
Ternary Operator: like if-then-else
takes 3 arguments
condition ? value if true : value if false
*/
let q = 20;
let r = 15;
let result = r > q? "You are allowed into the building": "Please you are not allowed into the building"

console.log('Result for Ternary operator = ' +result)


/********** Logical Operators ******************/
// && . - logical AND | True if both conditions are true
// ||  - logical OR | True if any of the condition is true
// ! logical NOT| Will return true if the condition is false and vice versa
let s = true;
let t = false;
let ts = true;

console.log("/********** Logical Operators ******************/")
console.log(s && t)
console.log(s && ts)
console.log (s || t)
console.log(!s)
console.log(!t)


/********** Type Operators ******************/
// In JS there are two type operators 
// typeof
// Returns the type of a variable
// We can use the typeof operator to find the data type of a JavaScript variable

// instanceof
// Returns true if an object is an instance of an object type
// The instanceof operator returns a boolean value that indicates if an object is an instance of a particular class

// typeof
let firstName = 'Irene';
let num = 50;
console.log("/********** Type Operators ******************/")
console.log(typeof firstName) //Returns 'string'
console.log(typeof num) //Returns 'number'
console.log(typeof true) //Returns 'boolean'
console.log(typeof NaN);  // Returns 'number'
console.log(typeof [1,2,3,4]); //Returns 'object'
console.log(typeof {name:'John', age:20 });  //Returns 'object'
console.log(typeof new Date()); //Returns 'object'
console.log(typeof null); //Returns 'object'
console.log(typeof function (){}); //Returns 'function'
console.log(typeof myClass); //Returns 'undefined'

// instanceof
let lastName = new String('Doe'); // more explanation in OOP
let num1 = new Number(123);
console.log(lastName instanceof String);
console.log(num1 instanceof Number);


/********** Bitwise Operators ******************/
// &      AND sets each bit to 1 if both bits are 1
// |        OR sets each bit to 1 if one of two bits is 1
// ^       XOR -Exclusive or- sets each bit to 1 if only one of two bits is 1
// ~       NOT -Bitwise not- inverts all the bits
// ＜＜    Left Shift- Bitwise left shift- shifts left and fills empty spaces with 0
// ＞＞    Right Shift - Bitwise right shift- shifts right 

// Bitwise operators treat arguments as 32-bit numbers and work on the level of their binary representation

console.log('*****************- Bitwise operators- *****************')

// Example - use decimal to binary converter

// let A = 1 = 0001
// let B = 2 = 0010

// A & B = 0000
// A | B = 0011

let A = 1;
let B = 2;

console.log(A & B);
console.log(A | B);

// 3 = 0011;
// 5 = 0101;
// 3^5 = 0110;
console.log(3^5);

// 5  = 00000101
// ~5 = 11111010

console.log(~5);

5 << 1
0101 

// turns out to this after shift
// 1010 = 10
