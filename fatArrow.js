// Fat arrow / arrow functions
const sum = (a, b) => {
return a + b
}

// Concise way of writing an arrow function that has one line of code in the body
const sum1 = (a, b) => a + b


//  however if the body has more than one line of code then we need to have the curley braces to enclose the scope of the function.
const sum2 = (a, b) => {
    console.log(a +b)
    return `The result is ${a+b} per the calculation`
}

// a and b are called parameter or arguments