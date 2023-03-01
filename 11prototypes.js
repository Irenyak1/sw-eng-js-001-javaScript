
// PROTOTYPE
// In JS, every function has a property called Prototype
// By default this property is empty
// You can add properties and methods to it
// JavaScript has prototype based Inheritance

// Suppose there is a function X.
// When you create another func that is inherited from X,
// it will inherit the methods and properties defined in X’s prototype

// This is a constructor even without a class
let EmpDetails = function(name, age){
    this.name = name;
    this.age = age;
}

// Prototypes
EmpDetails.prototype.getName = function(){
    return this.name
}

EmpDetails.prototype.getAge = function(){
    return this.age
}

// instances of EmpDetails
let emp1 = new EmpDetails('White', 30);
let emp2 = new EmpDetails('Kabates', 20);
console.log(emp1.getName());
console.log(emp2.getAge());