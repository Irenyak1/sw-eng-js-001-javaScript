// OBJECTS
// Objects store a collection of key-value pairs:
// each item in the collection has a name that we call the key and an associated value.

let person = { name: "Jane", age: 37, hobbies: ["photography", "genealogy"] };

// ACCESSING PROPERTIES
person.name; // dot notation
// = 'Jane'

// String concatenation
console.log("This girl is called " + person.name + " and she likes swimming and she is " + person.age + " years old")

// String interpolation `......${}....`
console.log(`This girl is called ${person.name} and she likes swimming and she is ${person.age} years old`)

person["age"]; // bracket notation
// = 37

// console.log("This girl is called " + person["name"])

// ADDING NEW PROPERTIES
person.height = "5 ft";
// = '5 ft'

console.log(person);

person["gender"] = "female";
// = 'female'

console.log(person);

// DELETING PROPERTIES
// delete removes the key-value pair from the object and returns true
// unless it cannot delete the property (for instance, if the property is non-configurable).
delete person.age;
// = true

console.log(delete person.age)
console.log(person)

delete person["gender"];
// = true

delete person["hobbies"];
// = true

console.log(person);

// OBJECT IMMUTABILITY
// Individual properties can be assigned different values
const MyObj = { foo: "bar", qux: "xyz" };
MyObj.qux = "hey there";
MyObj.pi = 3.1415;
// console.log(MyObj)

// MyObj = {gender: "female", age:13, height:158 }; // You can not change assignment to a constant variable
// const declaration prohibits changing what thing the const points to,
// but it does not prohibit changing the content of that thing.
// Thus, we can change a property in a const object, but we can't change which object the const points to.
// console.log("Changing the object to point to something else", MyObj);

// OBJECT.FREEZE()
const MyObj2 = Object.freeze({ foo: "bar", qux: "xyz" });
MyObj2.qux = "hi";
MyObj2.foo = "pawpaw"
// MyObj2 = { foo: "Pineapple", qux: "hey there" };
console.log("Changing the object afer  object freeze", MyObj2);

"use strict"
num3 = 3.14; 
"use strict";
let x = {p1:10, p2:20}; 
// console.log(delete x.p1);
// console.log(delete x);
// console.log(x);


// this key word refers to the object person as per the example
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };