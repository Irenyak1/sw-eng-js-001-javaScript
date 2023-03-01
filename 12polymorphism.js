// POLYMORPHISM
// Poly = many
// Morph = forms
// Polymorphism = many forms
// Polymorphism in Object-Oriented Programming is the ability to create a variable,
// a function, or an object that has more than one form.
// Polymorphism is the OOPs principle which provides the facility to perform one task in many ways.

class Animal{
    constructor(name){
        this.name = name;
    }
    // This function is polymorphic becuase it also exists in the child class Alligator
    eats(){
        console.log(this.name+ ' eats meat');
    }
}

class Alligator extends Animal {
    // No constructor needed since it will use the one for the parent class
    // This function is polymorphic becuase it also exists in the parent class
    eats(){
        super.eats();
        console.log(this.name+' eats fish')
    }
}

let murphy = new Alligator('Murphy');
murphy.eats();