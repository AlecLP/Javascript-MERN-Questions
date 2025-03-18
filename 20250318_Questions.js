//Create an example of your own for - 
// 1. ForOf Loop
// 2. ForIn Loop

let forOfInArray = [1, 2, 3, 4, 5]
forOfInArray["name"] = "John Doe"
forOfInArray.push(7)

//Will not print the "name" : "John Doe" key : value pair
for (const element of forOfInArray) {
    console.log({element})
}

for (const key in forOfInArray) {
    if (Object.prototype.hasOwnProperty.call(forOfInArray, key)) {
        console.log(key +" " +forOfInArray[key])
    }
}

//Create an example of multiplication using default parameters
function Multiply(p1=1, p2=1, p3=1){
    return p1*p2*p3
}

console.log(Multiply())
console.log(Multiply(3))
console.log(Multiply(3, 3, 2))

//Task evaluate the output and fix
let lion = "roar", birds = "chirp", cow = "moo", dogs = "bark"
let animalSound = {
    lion : lion,
    birds : birds,
    cow : cow,
    dogs : dogs
}

let animalSoundES6 = {
    lion,
    birds,
    cow,
    dogs
}
console.log("Animal sounds with vanilla Javascript " + JSON.stringify(animalSound))