//October - MERNStack Session - Assessment Number 1 - 2nd October 2024

//Q1. Create a file with name basics and show all the features that you know about javascript? (minimum 5 and maximum 8 topics)
// Try explaining in 1-2 lines : example - Prototype : An object which behaves as a link between two functions and provides inheritance

//Q1 answer is in the basics.js file

//Q2. As javascript is not a type safe and has auto cast feature - try showing below values from the same variable
// and its type as well :values are - "Robert ", .0266, false, {myname : "Test Me"}, 25166665, undefined, true, "Robert Jr.", null, {}, -32767

console.log("Q2")
var a = "Robert"
console.log(typeof(a) +" " +a)
var a = .0266
console.log(typeof(a) +" " +a)
var a = false
console.log(typeof(a) +" " +a)
var a = {myname : "Test Me"}
console.log(typeof(a) +" " +a)
var a = 25166665
console.log(typeof(a) +" " +a)
var a = undefined
console.log(typeof(a) +" " +a)
var a = true
console.log(typeof(a) +" " +a)
var a = "Robert Jr."
console.log(typeof(a) +" " +a)
var a = null
console.log(typeof(a) +" " +a)
var a = {}
console.log(typeof(a) +" " +a)
var a = -32767
console.log(typeof(a) +" " +a)


//Q3. Create a function with name showUserInfo, this function expects three params, firstname, lastname and age
//  print all the details in the given function

console.log("\nQ3")
function showUserInfo(firstname, lastname, age){
    console.log(showUserInfo +" " +firstname +" " +lastname +" " +age)
}
showUserInfo("John", "Doe", 30)

//Q4. Create a function with name doaddition, pass three parameters and return the sum of all the three numbers
// below output needs to be monitored - doaddition(2,3,4), doaddition(2), doaddition(2.3,3), doaddition("first", 2, "three")
// analyse the outputs we get and try explaining the reasons behind!!

console.log("\nQ4")
function doaddition(p1, p2, p3){
    return p1 + p2 + p3
}
console.log(doaddition(2, 3, 4)) //Standard output: 9
console.log(doaddition(2)) //NaN, probably becuase parameters 2 and 3 are undefined, and the others are numbers
console.log(doaddition(2.3, 3)) //NaN, probably because parameter 3 is undefined, and the others are numbers
console.log(doaddition("first", 2, "three")) //first2three, appears to perform string concatenation, probably beacuse one or more of the parameters is a string

//Q5. Give me an example of your choice for each of the below concepts
// a. closure, 
// b. hoisting, 
// c. constructor function

console.log("\nQ5")
//Closure example
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

//Hoisting example
console.log(hoist1())
function hoist1() {
    return "hoist1"
}
console.log(hoist1())


//Constructor function
function Circle(radius){
    this.radious = radius
    this.calcDiameter = function(){
        return radius * 2
    }
    this.calcArea = function(){
        return 3.1415 * radius * radius
    }
}
var circle1 = new Circle(3)
console.log("Circle 1 diameter: " +circle1.calcDiameter())
console.log("Circle 1 area: " +circle1.calcArea())

//Q6. What is the purpose of call, apply and bind ? and why they are used ? whats the difference between bind and apply ?

//All three are function extensions
//Call and apply are very similar. They are both used to pass an object as the first parameter to a function to use the object as scope for the function.
//  For call, the following parameters after the object are used as parameters for the function. For apply, after the object,  you pass an array whose values will be used as parameters for the function.
//Bind is used to bind the object the function is defined in as scope for the object. An example is using setTimeout: if you don't use bind, code in the timeout function will use the timeout object
//  rather than the object the setTimtout function is present in.
//Bind and apply are different for the reasons stated above.

//Q7. Create an example of bind using Student object, where a function returns data with SetTimeOut and we fix it by bind.

console.log("\nQ7")
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

//Q8. Create an example of creating object with null prototype. What would be the purpose of the same?

var NullObject = Object.create(null)
//The purpose of creating an object with a null prototype is when you would want an empty object that does not have access to any of the standard object methods
//  for example: toString

//Q9. How do we merge different objects properties using Object class function

//To merge different objects we use Object.assign. This will copy properties from one or more source objects to a target object
//General syntax: var test1 = Object.assign({}, source1, source2)

//Q10. Create an object literal and export it to another file and import and show that there, by logging the value returned

export var exportVar1 = {key1 : "value1"}
//See testFile.js for imported object