// ABSTRACTION
// An abstraction is a way of hiding the implementation details and showing only the functionality to the users
// Abstraction hides certain details and only show the essential features of the object.
// This approach improves understandability as well as maintainability of the code. 
// For example because of abstraction, you won't know the details of how many processes are involved
// to make a car start after igniting it. 
// Therefor Abstraction is way of hiding complexity from the user

//  Basically, hide details and show essentials

// function Employee(name, age, baseSalary){
//     this.name = name;
//     this.age = age;
//     this.baseSalary = baseSalary;
//     this.monthlyBonus = 1000; // This property is being added to employee constructor

//     // this method is exposed as a property
//     this.calculateFinalSalary = function(){
//         let finalSalary = this.baseSalary + this.monthlyBonus
//         console.log('Final Salary is : '+finalSalary)
//     }  
//     // this method is exposed as a property
//     this.getEmpDetails = function(){
//         console.log('Name : '+this.name+' | Age : '+this.age);
//     }
// }

// // create an instance of employee
// let emp1 = new Employee('John', 30, 1000)
// emp1.getEmpDetails();
// emp1.calculateFinalSalary();



// Let's not expose the calculateFinalSalary function
function Employee(name, age, baseSalary){
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;

    // private variable / hidden variable
    let monthlyBonus = 1000;
   // Abstraction of this method. It is not exposed to the user, it is hidden
   let calculateFinalSalary = function(){
        let finalSalary = baseSalary + monthlyBonus
        console.log('Final Salary is : '+finalSalary)
    } 
    
    // Another private function
    let calculateEmpService = function(){
        let yearStarted = 1990;
        let yearNow = 2023
        let yearsWorked = yearNow - yearStarted
        if(yearsWorked > 30){
            console.log("This employee retired")
        }else if (yearsWorked === 30){
            console.log("This employee is due retirement")
        }else {
            console.log("This employee is still in service")
        }
    } 

    this.getEmpDetails = function(){
        console.log('Name : '+this.name+' | Age : '+this.age);
        calculateFinalSalary(); // Result of final salary is got when you call the function getEmpDetails()
        calculateEmpService();
    }

}

let emp1 = new Employee('John', 30, 5000)
emp1.getEmpDetails();


