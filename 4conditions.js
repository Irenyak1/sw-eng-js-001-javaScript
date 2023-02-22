// if statement
// if..else statement
// if..else..if statement

// syntax:
// if(){} 

// if (expression) {
//     Statements to be executed if expression is true
// } 
// else{
//   Statements to be executed if expression is false
// }


// Example
console.log("***************Conditions***************************")
let age = 12;

let weather = "cloudy"

if (weather == "shinning"){
    console.log("We go swimming")
}else {
    console.log("Stay in house and watch a movie")
}

// Example 2
if (age > 18 ){
    console.log("You are eligible to get adriving licence")
}else if(age == 18){
    console.log("You just became eligible to get adriving licence")
}else {
    console.log("You are not eligible to get adriving licence")
}

// Ternary operator

// condition ? printed statement if condition is true : Printed statement if condition is false

// weather == cloudy? console.log("Carry your jacket") : console.log("Wear light clothes")







// Switch case
console.log("*********************switch case *******************")
let startRating = 1;

switch(startRating){
    case 1:
        console.log('Very bad');
        break;
    case 2:
        console.log('Bad');
        break;
    case 3:
        console.log('Average');
        break;
    case 4:
        console.log('Good');
        break;
    case 5:
        console.log('Excellent');
        break;
    default:
        console.log('Enter a valid integer between 1 and 5');
}


switch ( new Date().getDay()){
    case 0:
        console.log("Sunday")
        break;
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
}



let car = "Subaru";
switch(car){
    case "Mercedes":
        console.log("Very fast car");
        break;
    case "Subaru":
        console.log('Road racer');
        break;
    case "Toyota":
        console.log('Good for ugandan roads');
        break;
    case "Chevolette":
        console.log('Nice one');
        break;
    default:
        console.log('This is not part of the cars');
}

// let every one look into arrays and their accessibility. 

let fruits = ["Apples", "Mangoes", "Pineapples"];
switch(fruits){
    case fruits[1]:
        console.log("Mangoes are good");
        break;
    case "Subaru":
        console.log('Road racer');
        break;
    case "Toyota":
        console.log('Good for ugandan roads');
        break;
    case "Chevolette":
        console.log('Nice one');
        break;
    default:
        console.log('fruits');
}