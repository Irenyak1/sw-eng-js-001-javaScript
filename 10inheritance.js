// INHERITANCE
// Process where one class acquires properties(methods and fields) from another class
// Parent class ---->child class
// Super class ----> sub class
// Base class  ----> derived class

// Parent class
class Car{
    setName(name){
        this.name = name;
    }

    getName(){
        // return this.name
        console.log('This car name is '+this.name)
    }

    startEngine(){
        console.log('Engine started for '+this.name)
    }

    stopEngine(){
        console.log('Engine stopped for '+this.name)
    }
}

// Child class
class Toyota extends Car{

    topspeed(speed){
        console.log('Top speed for '+this.name +' is '+speed)
    }
}

let myCar = new Toyota()
myCar.setName('Fielder')
myCar.getName();
myCar.startEngine();
myCar.stopEngine();
myCar.topspeed(180);
