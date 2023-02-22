// ARRAYS
// To store multiple values in a single variable
let numbers = [1,2,3,4,5];
console.log(numbers);

let fruits = ['Apple', 'Banana', 'Grapes'];
console.log(fruits);

let cars = new Array('Ford', 'Toyota', 'Mercedes');
console.log(cars);

console.log(cars[1]);
cars[1] = 'Honda'
console.log(cars[1]);
console.log(cars);

fruits.push('cherry');
console.log(fruits);
console.log(fruits.length);

// ARRAY METHODS
console.log('*************ARRAY METHODS**************');
console.log(fruits);

fruits.pop(); // It removes the last element from the array
console.log(fruits);

fruits.shift(); // It removes the first element from the array
console.log(fruits);

fruits.push('cherry'); // Adds an element at the end of the array
console.log(fruits);

fruits.unshift('Guavas'); // Adds an element at the beginning of the array
console.log(fruits);

delete fruits[1]; // Deletes an element at the specified index but does not delete the index
console.log(fruits);

fruits[1] = 'Orange' // Add an element at the empty index
console.log(fruits);

fruits.splice(1,2); // Removes elements from to the specified indices
console.log(fruits);

fruits.splice(2,0, 'orange', 'lemon'); // Adds two elements and removes zero
console.log(fruits);

let citrusFruits = fruits.slice(2,4);
console.log(fruits);
console.log(citrusFruits);

let evenNumbers = [2, 4, 6]; // Array of even numbers
let oddNumbers = [1, 3, 5]; // Array of odd numbers
let primeNumbers = [2,3,5]; // Array of prime numbers

let allNumbers = evenNumbers.concat(oddNumbers, primeNumbers);
console.log(allNumbers);
