//Arrow function

let testArrowFunction = () => {
    console.log("Test arrow function")
}

console.log("Arrow function ----------")
testArrowFunction()

//Practice - 
let Student = {
    FirstName : "Stacy",
    Standard : "Higher Secondary",
    Session : "Final Session",
    TotalMarks : "75%",
    Subject : {
        Physics : 80,
        Chemistry : 89,
        Language : 92
    }
}

//Questions for practice

//print firstname, total marks and Individual Subject Marks, using object and nested destructuring
//along with that also create a lastname and Ecology as (marks) "95", without making any change in Student

console.log("Nested Destructuring ----------")
let {FirstName, TotalMarks, LastName = "Doe", Subject : {Physics, Chemistry, Language, Ecology=95}} = Student
console.log(FirstName)
console.log(LastName)
console.log(TotalMarks)
console.log(Physics)
console.log(Chemistry)
console.log(Language)
console.log(Ecology)

//create an array of your aspirations, print first three to achieve in 2024,25,26 and keep others in ...rest operator, using array destructuring 

console.log("Array Destructuring ----------")
let [StartProgram, GetJob, GetPromotion, ...futureAspirations] = [2024, 2025, 2026, 2027, 2028, 2029]
console.log(StartProgram)
console.log(GetJob)
console.log(GetPromotion)
console.log(futureAspirations)

//create a funtion with name multiply which accepts three parameters, and return multiplication of all
//but if we dont pass any parameter it returns 0

console.log("Default Parameters ----------")
function Multiply(p1 = 0, p2 = 1, p3 = 1){
    return p1 * p2 * p3
}
console.log(Multiply())
console.log(Multiply(1, 2, 3))

//create an array of 1 - 5 and add arr[newval] = at 6th place, print the output using for of and for in loop

console.log("For of and For in ----------")
let arr = [1, 2, 3, 4, 5]
arr["newval"] = "at 6th place"
console.log("For of ----------")
for (const element of arr) {
    console.log(element)
}
console.log("For in ----------")
for (const key in arr) {
    if (Object.prototype.hasOwnProperty.call(arr, key)) {
        console.log(arr[key])  
    }
}

//create an example of const where we can update on property of the object, where it says const is mutable

console.log("Const ----------")
const User = {FirstName : "John", LastName : "Doe"}
User.FirstName = "Jane"
console.log(User.FirstName)

//create a for loop using var and let, print each value in timeout after 2 second and try to 
//demonstrate functional scope of var and lexical of let 

console.log("Var and Let ----------")
for(var i = 0; i < 5; i++){
    setTimeout(() => {
        console.log(i)
    }, 2000);
}
for(let i = 0; i < 5; i++){
    setTimeout(() => {
        console.log(i)
    }, 2000);
}

{
    var varVariable = "Var scope"
    let letVariable = "Let scope"

    console.log(varVariable)
    console.log(letVariable)
}
console.log(varVariable)
//console.log(letVariable) //Not defined