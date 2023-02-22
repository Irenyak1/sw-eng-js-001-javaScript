// FOR LOOPS
// for
// for/in
// for/of

// for (initialization; condition; increment) {
//     // loop body
// }

console.log("*******************FOR LOOPS**************************")

let student; // declaration

for(student = 1; student < 5; student++){
    console.log('value of student is: ' + student);
}


let oddNumbers 
for(oddNumbers = 1; oddNumbers <=10; oddNumbers+=2){
    console.log('value of oddNumbers is: ' + oddNumbers);
}

let fruits = [{"apples":10,}, {"grapes": 6}, {"berries": 8}, {"bananas": 4}];
let fruit;
console.log("***********for in********************")
for(fruit in fruits){
    console.log(fruits[fruit])
}

console.log("***********for of********************")
for(fruit of fruits){
    console.log(fruit)
}

// The for...in statement iterates over the enumerable string properties of an object, 
// while the for...of statement iterates over values that the iterable object defines to be iterated over.

// WHILE LOOPS
console.log("***********WHILE LOOPS********************")
let counter=0;

while(counter  <= 10){
    console.log('counter: '+counter)
    counter++
}

// DO WHILE LOOPS
// There's an execution even when the condition is false 
// Not normally used becuase of the loophole it may have
console.log("***********DO WHILE LOOPS********************")
counter = 11;

do {
    counter--;
    console.log('The value of counter is: '+counter);
} while (counter >= -1)