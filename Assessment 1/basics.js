//Q1. Create a file with name basics and show all the features that you know about javascript? (minimum 5 and maximum 8 topics)
// Try explaining in 1-2 lines : example - Prototype : An object which behaves as a link between two functions and provides inheritance

//1. Bind
//A function expression that binds the context of an object with an event handler function such as click, hover, and can be used with setTimeout

var Student = {
    name : "John Doe",
    age : 30,

    printInfo : function () {
        console.log("printInfo", this.name);

        setTimeout(function (){
            console.log("setTimeout", this.name); //without bind this would print undefined, with bind it prints Jane Doe
        }.bind(this), 2000)

        this.name = "Jane Doe"
    }
}
Student.printInfo()

//2. Call and Apply
//Extended functions that allow a function to use an object passed as a parameter as context/scope for the function. Call accepts an object as the first parameter
//  and then subsequent parameters for the function afterwars. Apply accepts an object as the first parameter, then an array of data representing the following parameters

var Student1 = {
    FullName : "John Doe",
    Age : "30",
    Location : "USA",
    State : "Texas",
    Addres : "123 Main Street"
}

var Student2 = {
    FullName : "Jane Doe",
    Age : "25",
    Location : "USA",
    State : "New York",
    Addres : "456 Broadway"
}

function PrintStudentSessions(msg, session1, session2, session3, session4) {
    return console.log(`
        ${this.FullName}
        ${this.Age}
        ${this.Location}
        ${msg}
        ${session1}
        ${session2}
        ${session3}
        ${session4}`
    )  
}

PrintStudentSessions.call(Student1, "Student 1 is taking: ", "DSA", "MERNStack", "SpringBoot", "AWS")

var student2Sessions = ["Student2 is taking: ", "Java", "SQL", "MERNStack", "SpringBoot"]

PrintStudentSessions.apply(Student2, student2Sessions)

//3. Closure
//When a functions return another function with properties that we want to expose. The outer function acts similarly to a class and returns the inner function.

function closureEx() {
    var v1 = "v1"
    var v2 = "v2"
    function getV1(){
        return v1
    }
    return getV1
}
var closureTest = closureEx()
console.log(closureTest())

//4. Callback
//A function that is used as a parameter in another function and called within. Useful for reusing functions in different contexts.

function PrintInfo(msg, p1) {
    console.log(`${msg} ${p1}`)
}

function GetUserInfo(name, age, callback){
    callback("User name is: ", name)
    callback("User age is: ", age)
}

GetUserInfo("Alec", 25, PrintInfo)

//5. Over-writing
//The last function definition replaces all previous function definitions and gets hoisted to the top

console.log(Sum(10, 5))
function Sum(p1, p2) {
    return p1 + p2
}
console.log(Sum(10, 5))
function Sum() {
    return 0
}
console.log(Sum())

//6. Hoisting
//Hoisting is where functions and variables are pulled to the top so information about them is known. It is why JS is often considered partially compiled.

console.log(hoist1())
function hoist1() {
    return "hoist1"
}
console.log(hoist1())
