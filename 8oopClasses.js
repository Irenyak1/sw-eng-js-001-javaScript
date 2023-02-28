// OOP
// class ClassName{
//     statements
// }

// A class is a blue print of an object
// A class will always have its name in singular

class Employee {
    // a class always has a constructor, which is called whenever a class is instantiated 
    // or an object of the class is created
    constructor(name, id, gender, age, color, education){
        this.name = name;
        this.id = id;
        this.gender = gender;
        this.age = age;
        this.color = color;
        this.education = education;
    }
}

// console.log("Printing out this key word", this.name)

// An object is an instance of a class
// creating objects of the class Employee
let emp1 = new Employee('John', 1001);
let emp2 = new Employee('Peter', 1002);

console.log(emp1.name);
console.log(emp1['id']);

console.log(emp2.name);
console.log(emp2.id);


class Car{
    constructor(name, manufacturer, type, speed, color){
        this.name = name;
        this.manufacturer = manufacturer;
        this.type = type;
        this.speed = speed;
        this.color = color;
    }
}

let Kalugi_Benz = new Car('ML', "Germany","Benz" , 300, "Black");

console.log(Kalugi_Benz)

