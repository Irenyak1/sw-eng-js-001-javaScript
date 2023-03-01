// ENCAPSULATION
// - A mechanism of restricting direct access to some of the object's components
// - A mechanism of bundling data with methods that operate on that data

// There are two ways of encapsulation in Javascript:

//     Making data members private using var/let keyword.
//     Set the data using setter methods and get that data using getter methods.

// We can manage read and write access of object’s properties by using encapsulation.

//     Read Only Access : If we declare getter methods only then it facilitates the read only access.
//     Write Only Access : If we declare setter methods only then it facilitates the write only access.
//     Read & Write Access : If we declare both getter and setter methods then it facilitates both read and write access.

// Why Encapsulation
// - Security- Controlled access- guards an object against illegal access
// - Hide implementation and expose behaviour - helps to achieve a level without revealing its complex details.
// - Loose coupling - modify the implementation anytime
// - Make the application more flexible and manageable.
// - Simplifies the application.

// Example
class Worker {
    constructor() {
      let name; // these are encapsulated
      let rating;
      let number;
    }
    // getter method
    getName() {
      return this.name;
    }
    // setter method
    setName(name) {
      this.name = name;
    }
    // getter method
    getRating() {
      return this.rating;
    }
    // setter method
    setRating(rating) {
      this.rating = rating;
    }
    setNumber(number){
        this.number = number
    }
    getNumber(){
        return this.number
    }
  }

// create instances of the class Worker
  let worker = new Worker();
  worker.setName("Naren");
  worker.setRating(9);

  console.log("Print out", worker.getName() + " " + worker.getRating());

  
  class Employee {
    // constructor
    setEmpDetails(name, id, phoneNo) {
      this.name = name;
      this.id = id;
      this.phoneNo = phoneNo;
    }
    // Getter methods
    getEmpName() {
      return this.name;
    }
    getEmpId() {
      return this.id;
    }
    getEmpPhoneNo() {
      return this.phoneNo;
    }
  }
  
  let emp1 = new Employee();
  emp1.setEmpDetails("John", 1001, 789345453);
  console.log(emp1.getEmpName());
  console.log(emp1.getEmpId());
  console.log(emp1.getEmpPhoneNo());

  console.log("xxxxxxxxxxxxxxxxxxx", emp1.name)
  
  // function Photo(name){
  //     this.name = name || 'photo';
  // }
  
  // Photo.prototype.setName = function(name){
  //     this.name = name;
  // }
  
  // Photo.prototype.getName = function(){
  //     return this.name;
  // }
  
  // var photo = new Photo();
  // photo.setName('picture'); //sets photo name to 'picture'
  // photo.getName(); // returns 'picture
  