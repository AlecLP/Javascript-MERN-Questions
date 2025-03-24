//Spread Operator - 
//create a list of vaccines and print
//create doctor object and print his qualifications and other details using spread
//create a vaccine object with details like - name, no of doses required, price etc and merge it with nearest doctor object using spread

let vaccines = ["MMR", "Rotavirus", "Polio", "Flue"]
console.log(...vaccines)

let Doctor = {
    Name : "John Doe",
    Education : "PhD",
    YearsOfExperience : 30
}

let Vaccine = {
    Dosage : ".5mL",
    Contents : "Each inactivated influenza vaccine",
    Price : 0
}

let DocVac = {...Doctor, ...Vaccine}
console.log(DocVac)

//Rest Parameter - 
//create a function which accepts start and end of number and generates a array of that size, [100....150]
//then use this array to pass as spread operator into a function named largesum
//in largesum we should accept the array in rest parameter (...arrayOfNums), and then add the numbers

let arrayFunc = (num1, num2) => {
    let arr = []
    for (let index = num1; index <= num2; index++) {
        arr.push(index)
    }
    return arr
}
let largeSum = (...nums) => {
    let sum = 0
    sum = nums.reduce((prev, cur) => {
        return prev + cur
    }, 0)
    return sum
}
let testArr = arrayFunc(1, 10)
let sum = largeSum(...testArr)
console.log(sum)

//try wiriting your favourite quotes on life lessons or from tech experts
// in expression you need to write the expert name or reference

let Quotes = {
    EdmundHillary : "It is not the mountain we conquer, but ourselves.",
    Socrates : "The unexamined life is not worth living.",
    Plato : "Be kind, for everyone you meet is fighting a hard battle."
}

let quotes = `Quote from Edmund Hillary : ${Quotes.EdmundHillary}
Quote from Socrates : ${Quotes.Socrates}
Quote from Plato : ${Quotes.Plato}`
console.log(quotes)