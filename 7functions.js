//  a function is a reusable block of code

function funcName(){
    //Function body/statements
}

// EXAMPLE
function add(){   // none parameterized function
    console.log(2+3);
}
add(); // function invocation

// EXAMPLE
function add2(a, b){  // parameterized function
    // console.log(a+b);
    return (a+b)
}

// add2(2,4); 
console.log(add2(7,4)); 

// EXAMPLE

function add3(left, right) { // left & right are parameters here
    let sum = left + right;   // left & right are arguments here
    return sum;
  }
  add3();
  console.log(add3(3, 6, 5)); // 5 is ignored; prints 9
  console.log(add3(3)); // second argument missing; prints NaN
                             // 3 + undefined is NaN


// RETURN VALUES
function add(a, b) {
return a + b
}

add(2, 3); // returns 5

const add = (a, b) =>{
 console.log( a+b)
 return a + b
 
}

const add = (a, b) => a + b

// Function definition
function say() {
    console.log("How are you?");
}
  
console.log("First");
say(); // function invocation / calling a function
console.log("Last");


function Add(a, b){
    return a + b
}

Add()
console.log("----------------Adding values-----------------")
console.log(Add(100000, 200000))

console.log(Add(10000000000, 1898765433));

console.log(Add(804850485048504, 497694760406404370));



// Local and global variables

// Local variable- has a limited scope (inside a function where it is defined)
// A global variable - has a global scope (it can be accessed in any function)


// EXAMPLE OF LOCAL VARIABLES
function multiply(){
    let localVariable1 = 5;
    let localVariable2 = 6;
    let product =  localVariable1 * localVariable2;
    return product;

}
console.log("my product", multiply())


function addition(){
 let total = localVariable1 + localVariable2
 return total 
}

console.log("Total", multiply2()) // This will throw an error of variables not defined


// EXAMPLE OF GLOBAL VARIABLES
let globalVariable1 = 5;
let globalVariable2 = 6;

function multiply2(){
    let product =  globalVariable1 * globalVariable2
    return product

}
console.log("my product", multiply())


function addition2(){
 let total = globalVariable1 + globalVariable2
 return total 
}

console.log("Total", multiply2())
