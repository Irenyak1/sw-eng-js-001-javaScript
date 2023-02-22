// WORKING WITH STRINGS
// There are a number of operations available for strings, including:

//     Converting a string to upper case or lower case—uppertolower(CHAR).
//     Removing specified characters, such as `ID_` or `$`, from a string variable—stripchar(CHAR,STRING).
//     Determining the length (number of characters) for a string variable—length(STRING).
//     Checking the alphabetical ordering of string values—alphabefore(STRING1, STRING2).
//     Removing leading or trailing white space from values—trim(STRING), trim_start(STRING), or trimend(STRING).
//     Extract the first or last n characters from a string—startstring(LENGTH, STRING) or endstring(LENGTH, STRING). For example, 
//     suppose you have a field named item that combines a product name with a four-digit ID code (ACME CAMERA-D109). 
//     To create a new field that contains only the four-digit code, specify the following formula in a Derive node:

//     endstring(4, item)

// Matching a specific pattern—STRING matches PATTERN. For example, 
// to select persons with "market" anywhere in their job title, you could specify the following in a Select node:

// job_title matches "*market*"


// Declaration
// Escape sequences
// Concatenation
// String literals
// Length of string
// Bracket notation
// String immutability

let string1 = "going to school";
let string2 = "On monday";
let string3 = "Alex"


console.log(string1 + " " + string2 )

console.log("Joseph and " + string3 + " are "+ string1 + " " + string2)


let num = 4
let num2 = 9
// NaN- not a number

console.log(num + String(num2))

// STRING METHODS
// String length
// The length property returns the length of a string:
let myString="ABCDEFGHIJKLNMOPQRSTUVWXYZ"
console.log(myString.length);

// Extracting String Parts
// There are 3 methods for extracting a part of a string:
//     slice(start, end)
//     substring(start, end)
//     substr(start, length) substr is deprecated
console.log(myString.slice(7,13))
console.log(myString.substring(7,13))
console.log(myString.substr(7,13))

// String slice()
// slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: start position, and end position (end not included).

// String substring()
// String substr()
// String replace()
// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String charAt()
// String charCodeAt()
// String split()




