// Questions -

// Create a Person <few properties and a function to return them> and Inherit it as Student class and override the function
// Inherit should be done both way's constructor and Object.Create
console.log("CREATING AND INHERTING OBJECTS ------------------------------------")
var Person = {
    FirstName : "John",
    LastName: "Doe",
    Address : "Somewhere in US",
    EmpId : "123",
    getPersonDetails : function () {
        return `First Name is - ${this.FirstName}\n`+
               `Last Name is - ${this.LastName}\n`+
               `Address is - ${this.Address}\n`+
               `Employee ID is - ${this.EmpId}`
    }
}

console.log("Person OBJECT ----------------\n" +Person.getPersonDetails()) //Normal function output

//Inheritance using Object.create
var Student1 = Object.create(Person)
Student1.getPersonDetails = function(){
    return "Student1"
}
console.log("Student1 OBJECT --------------\n" +Student1.getPersonDetails()) //Function overridden to output "Student1" for the Student1 object
console.log("Person OBJECT ----------------\n" +Person.getPersonDetails()) //Normal function output because Student1 is a clone

//Inheritance using constructor:
var Student2 = new Object(Person)
Student2.getPersonDetails = function() {
    return "Student2"
}
console.log("Student2 OBJECT --------------\n" +Student2.getPersonDetails()) //Function overridden to output "Student2"
console.log("Person OBJECT ----------------\n" +Person.getPersonDetails()) //Outputs "Student2" due to the Student2 reference changing the base class

// Create three objects and merge their propeties
console.log("\nCREATING AND MERGING OBJECTS --------------------------------------")
var obj1 = {obj1Data : "Data from obj1", obj1Replace : "To be replaced - Obj1"}
var obj2 = {obj2Data : "Data from obj2", obj1Replace : "Obj1 field replaced by Obj2 field", obj2Replace : "To be replaced - Obj2"}
var obj3 = {obj3Data : "Data from obj3", obj2Replace : "Obj2 field replaced by Obj3 field"}
var mergedObjs = Object.assign({}, obj1, obj2, obj3)
console.log(mergedObjs)

// Create a logical example of closure
console.log("\nLOGICAL EXAMPLE OF CLOSURE ----------------------------------------")
function addOuter(x) {
    function addInner(y){
        return x + y
    }
    return addInner
}
var addTest1 = addOuter(10)
var addTest2 = addTest1(20)
console.log(addTest2)

// Share few data objects from one file to another
console.log("\nSHARE DATA OBJECTS -----------------------------------------------")
import { exportVar1, exportVar2 } from "./20250304_Sharing_Objects.js"
console.log("Var 1 from another file: " +exportVar1.key1)
console.log("Var 2 from another file: " +exportVar2.key2)

//create an example of overloading where you can attend 3 sessions on a day and 4 sessions on another day
//  print name of the session
console.log("\nEXAMPLE OF OVERLOADING --------------------------------------------")
function printSessions(session1, session2, session3){
    return `First Session: ${session1}\n`+
           `Second Session: ${session2}\n`+
           `Third Session: ${session3}\n`
}

console.log(printSessions("MERN Stack", "Java", "Data Structures and Algorithms"))

printSessions = function printSessions(session1, session2, session3, session4){
    return `First Session: ${session1}\n`+
           `Second Session: ${session2}\n`+
           `Third Session: ${session3}\n`+
           `Fourth Session: ${session4}\n`
}

console.log(printSessions("MERN Stack", "Java", "Data Structures and Algorithms", "Dev Ops"))

// once done create a git repo and push this answer and send me your github link with access