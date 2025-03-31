
// 31st March - 2025 : ES6, eventloop and core JS questions
// All questions are mandatory - 14 out of 15 needs to be done, 1st question is equal to two question so can't be left
// 7th requires proper elaboration and example

// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
// a. Get heroes who are not evils
// b. Print Unique family names
// c. Print Hero Names from given objects, and append sir in each of them before printing
// d. Do we have any hero in Marvel Family who is not evil

const heroes = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]

//To preserve immutability on the heroes list we can use iterators to create, extract or modify data, leaving the base object unchanged
// a. Get heroes who are not evils
// let notEvilHeroes = heroes.filter(heroObj => heroObj.isEvil == false)
// console.log(notEvilHeroes)

// b. Print Unique family names
// let uniqueFamilyNames = heroes.reduce((prev, cur, index, arr) => {
//     prev[cur.family] = prev[cur.family] ? prev[cur.family] += 1 : 1
//     return prev
// }, new Set())
// console.log(uniqueFamilyNames)

// c. Print Hero Names from given objects, and append sir in each of them before printing
// let modifiedNames = heroes.map((heroObj) => {
//     return {name : "Sir "+heroObj.name}
// })
// console.log(modifiedNames)

// d. Do we have any hero in Marvel Family who is not evil
// let marvelNotEvil = heroes.some(heroesObj => heroesObj.family == "Marvel" && heroesObj.isEvil == false)
// console.log(marvelNotEvil)

//2. Use the spread and rest operator to create a function which can multiply numbers from 1...n (n is the number of choice), 
//   using apply keyword we need to implement this one\

// let genArray = (num1) => {
//     let arr = []
//     for (let index = 1; index <= num1; index++) {
//         arr.push(index)
//     }
//     return arr
// }
// let multiply = (...nums) => {
//     let product = 0
//     product = nums.reduce((prev, cur) => {
//         return prev * cur
//     }, 1)
//     return product
// }
// let testArr = genArray(10)
// let product = multiply(...testArr)
// console.log(product)
// let product2 = multiply.apply({}, testArr)
// console.log(product2)

//3. Print the last name through destructuring and add a contact number:9119119110 as well
// const person = {
//     userDetails :{
//         first: "FirstName",
//         last: "LastName"
//     }
// }

// let {userDetails : {last, contactNumber=9119119110}} = person
// console.log(last)
// console.log(contactNumber)


//4. Give me an example of const data manipulation

// const dataManipOfConst = {
//     key1 : "value1",
//     key2 : "value2"
// }
// dataManipOfConst.key1 = "newValue1"
// console.log(dataManipOfConst.key1)

//5. What is the difference between for-of and for-in show with examples

//for-in iterates over the property values of the objects
// let forInUser = {fname : "John", lname : "Doe", age : 33, location : "United States"}
// for (const key in forInUser) {
//     if (Object.prototype.hasOwnProperty.call(forInUser, key)) {
//         const element = forInUser[key];
//         console.log(element)
//     }
// }

//for-of iterates over the values of an array without indexing
// let forOfNumbers = [1, 2, 3]
// forOfNumbers.push("test")
// forOfNumbers["newtest"] = "test1"

// for (const element of forOfNumbers) { //"newtest" : "test1" will not be printed as it has a different key than the rest of the elements
//     console.log({element}) 
// }
// for (const key in forOfNumbers) { //"newtest" : "test1" will be printed, as for-in iterated over the keys
//     const element = forOfNumbers[key];
//     console.log({key})
//     console.log({element})
// }

//6. Give me an example of bind and write its usage, comparison with arrow function

// var bindUser = {
//     FName : "John", 
//     Location : "United States", 
//     Age : 33,
//     printInfo : function () {
//         console.log(this)
//         setTimeout(function (){
//             console.log(this)
//         }.bind(this), 2000)
//         setTimeout(() => {
//             console.log(this)
//         }, 3000);
//         this.FName = "Jane" //the timeout function will use this updated FName value
//     } 
// }
// bindUser.printInfo()
//Bind is used to bind an object to a function, in this case setTimeout. The object that the first setTimeout will reference is
//  changed from a timeout object to the bindUser object. Therefore, console.log(this) in the timeout function outputs the bindUser object and not a timeout object
//The arrow function uses the same object as the surrounding code, so bind is not required in the second setTimeout

//7. Create an example showing usage of event loop in concurrent execution cycle

// console.log("Event Loop Example")

// setTimeout(function () {
//     console.log("First")
//     setTimeout(function () {
//         console.log("Inside First")
//     }, 0)
    
// }, 1000)

// setTimeout(function () {
//     console.log("Second")
// }, 1000)

// setTimeout(function () {
//     console.log("Third")
// }, 3000)

// console.log("Event Loop End")

//Step-by-step of what happens in the above code
//The initial console.log is executed
//The first setTimeout function is inserted into the web api queue, then the second setTimeout function, then the third {first -> second -> third} where first is the head
//The last console.log is executed
//After 1 second, the first setTimeout is executed, and the nested Timeout is inserted into the web api queue before the third
//  because the second setTimeout is is executing at the same time, but was inserted first {second -> inside first -> third}
//The second setTimeout executes
//The inside first settimeout executes
//After 2 more seconds the third setTimeout executes

//8. create an example showing usage of short hand and default param.

// let firstname = "John", lastname = "Doe", age = 33
// let shortHandUser = {
//     firstname : firstname,
//     lastname : lastname,
//     age : age
// }
// console.log(shortHandUser)

// function testFunc(p1 = "test", p2 = "func", p3 = "params") {
//     return p1 +" " +p2 +" " +p3
// }
// console.log(testFunc())

//9. Create two objects with some properties and merge them using Object method and ES6 way

// let mergeUser = {
//     firstname : "John",
//     lastname : "Doe",
//     age : 33
// }
// let mergeLocation = {
//     address : "123 Main Street",
//     state : "California",
//     country : "USA"
// }
// let mergedObj1 = Object.assign({}, mergeUser, mergeLocation)
// console.log(mergedObj1)
// let mergedObj2 = {...mergeUser, ...mergeLocation}
// console.log(mergedObj2)

//10. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc

// let testMap = new Map()
// let stringKey = "String Key", objectKey = {}, functionKey = function () {}, numberKey = 1234
// testMap.set(stringKey, "String Value")
// testMap.set(objectKey, "Object Value")
// testMap.set(functionKey, "Function Value")
// testMap.set(numberKey, "Number Value")
// console.log(testMap.get(stringKey))
// console.log(testMap.delete(stringKey))
// console.log(testMap.size)
// testMap.clear()

// let testSet = new Set(["John", "Jane", "Bob", "Will", "Alice", "Sam"])
// console.log(testSet.add("John"))
// console.log(testSet.size)
// console.log(testSet.delete("Alice"))
// testSet.clear()

//11. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved

// let examplePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({
//             status : "Success",
//             msg : "Session 1 success",
//             code : 200,
//             test1 : "Test 1",
//             test2 : "test2"
//         })
//     }, 2000);

//     setTimeout(() => {
//         reject({
//             status : "Failed",
//             msg : "Session 1 failed",
//             code : 400
//         })
//     }, 3000);
// })

// examplePromise
// .then((data) => {
//     console.log(data)
// })
// .catch((err) => {
//     console.log(err)
// })

//12. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)

// let genArray = (num1) => {
//     let arr = []
//     for (let index = 1; index <= num1; index++) {
//         arr.push(index)
//     }
//     return arr
// }
// let multiply = (...nums) => {
//     let product = 0
//     product = nums.reduce((prev, cur) => {
//         return prev * cur
//     }, 1)
//     return product
// }
// let testArr = genArray(10)
// let product = multiply(...testArr)
// console.log(product)

//13. Use the question #11 to build promises using async and await - with multithread

// function exmplePromiseFunc (){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 status : "Success",
//                 msg : "Session 1 success",
//                 code : 200,
//                 test1 : "Test 1",
//                 test2 : "test2"
//             })
//         }, 2000);

//         setTimeout(() => {
//             reject({
//                 status : "Failed",
//                 msg : "Session 1 failed",
//                 code : 400
//             })
//         }, 3000);
//     })
// }

// async function useExamplePromiseFunc(){
//     console.log("Trying examplePromiseFunc")
//     try{
//         await exmplePromiseFunc().then((data) => console.log(data))
//     }
//     catch(error){
//         console.log(error)
//     }
//     console.log("Will not be printed until await is finished")
// }

// useExamplePromiseFunc()

//14. Create an example of generator function of your choice

// function *testGen() {
//     yield console.log("testGen function 1")
//     yield console.log("testGen function 2")
//     yield console.log("testGen function 3")
//     return "Finished";
// }

// let testGenObj = testGen()
// console.log(testGenObj.next())
// console.log(testGenObj.next())
// console.log(testGenObj.next())
// console.log(testGenObj.next())
// console.log(testGenObj.next())

//15. Explain your knowledge on function and object protoype what is the purpose of the same - example

//Prototypes are used as a way of allowing inheritance in JavaScript. Every object has a link to another object - prototype.
//  When you want to access some data using the object, first the object itself is check for that data, if it is not present
//  then the prototype is checked. This continues up a prototype chain until the property is found or the chain ends.

// let prototypeExampleObj = {
//     firstname : "John",
//     lastname : "Doe",
//     age : 33
// }
// let prototypeExampleObjSub = Object.create(prototypeExampleObj)
// prototypeExampleObjSub.address = "123 Main Street"
// console.log(prototypeExampleObj.address)
// console.log(prototypeExampleObjSub.address)
// prototypeExampleObj.firstname = "Test"
// console.log(prototypeExampleObjSub.firstname)
// prototypeExampleObjSub.firstname = "Test 2"
// console.log(prototypeExampleObj.firstname)
// console.log(prototypeExampleObjSub.firstname)

//In this example the prototypeExampleObjSub has inherited the values from prototypeExampleObj and has an additional value: address.
//The base prototypeExampleObj does not have an address property, so it is undefined.
//The prototypeExampleObjSub does have an address property, so it is printed. The prototypeExampleObjSub inherits the firstname
//property from the prototypeExampleObj object, so it also can be printed. It is important to note that changing a value in
//the base object will change the output when accessing it from the child object if that property has not already been modified in the child object. 
//However, changing a value in the sub object is not reflected in the base object