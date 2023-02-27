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

let citrusFruits = fruits.slice(2,4); // creates a sub array from an array
console.log(fruits);
console.log(citrusFruits);

let evenNumbers = [2, 4, 6]; // Array of even numbers
let oddNumbers = [1, 3, 5]; // Array of odd numbers
let primeNumbers = [2,3,5]; // Array of prime numbers

let allNumbers = evenNumbers.concat(oddNumbers, primeNumbers);
console.log(allNumbers);




// NESTED ARRAYS / MULTIDIMENSIONAL ARRAYS
console.log("NESTED ARRAYS")
let hobbies = [["swimming", 4], ["singing", 5], ["netball", 8], ["football", 6],]
console.log("Print main array", hobbies)


// PRINT OUT FIRST ITEM IN SECOND SUB-ARRAY
console.log("print an element at specified index", hobbies[1][0])


// REMOVE AN ELEMENT FROM SUB ARRAY
hobbies[2].pop();
console.log("After removing last element from a sub-array", hobbies)

// ADDING ELEMENTS INTO THE SUB-ARRAY
hobbies[1].push("hocky", 3);
console.log("After push",hobbies)


// DELETING FIRST SUB-ARRAY FROM THE MAIN ARRAY
hobbies.splice(0,1) // delete first sub-array
console.log("After deleting first sub-array", hobbies)


// ADDING A SUB-ARRAY TO AN ARRAY AT A SPECIFIED POSITION
//Here, the “hobbies.splice()” method will overwrite the “hobbies” array 
// and add the “[‘dancing’, 3]” sub-array at the second position:
hobbies.splice(1, 0, ['dancing', 3]); 
console.log(hobbies)

// DELETING LAST SUB-ARRAY FROM THE MAIN ARRAY
hobbies.pop(); // Deletes last array from the main array
console.log("After delete", hobbies)

 
// To remove the second element of each “sub-array”, 
// we will iterate through the “hobbies” array using the “forEach()” method, 
// and at each iteration the “pop()” method deletes the element positioned at the first index:
console.log("***********Using forEach function to loop through the elements in an array*****************")
hobbies = [["swimming", 4], ["singing", 5], ["netball", 8], ["football", 6],]
hobbies.forEach((hobby) => {
    hobby.pop(1);
});
console.log("After delete second item from each nested array", hobbies)


// FLATENING THE ARRAYS
// Flaten the sub- arrays into one array
// This removes all the sub arrays and creates one array
hobbies = [["swimming", 4], ["singing", 5], ["netball", 8], ["football", 6],]
const flatArray= hobbies.flat();
console.log("Flatened array", flatArray)
// console.log("Flat array", hobbies.flat())
