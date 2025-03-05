//Create an example of your own to explain closure

console.log("CLOSURE EXAMPLE -------------------")
function userInformation(){
    var fullName = "John Doe"
    var age = 30
    var SSN = 123456789
    var streetAddress = "123 Main Street"
    var state = "Texas"

    var getUserInformation = function(iSSN){
        if(iSSN == SSN){
            return {fullName, age, state}
        }
        else{
            return "Invalid SSN"
        }
    }
    return getUserInformation
}
var userInformationVar = userInformation()
console.log(userInformationVar(987654321)) //"Invalid SSN"
console.log(userInformationVar(123456789)) // Correct output

//Question :
//1. create a callback function example for account
//2. PrintAccount details should accept this call back and the account information
//3. Upon executing PrintAccntDetails it should show the account details with a message
//4. Use the same call back to print multiple sessions planned for the day

console.log("\nCALLBACK EXAMPLE -------------------")
function PrintDetails(msg, p1){
    console.log(`${msg} ${p1}`)
}

function PrintAccntDetails(id, name, callback){
    callback("Account ID: ", id)
    callback("Account name: ", name)
}

PrintAccntDetails(123, "John Doe", PrintDetails)

function printSessions(session1, session2, session3, callback){
    callback("Session 1: ", session1)
    callback("Session 2: ", session2)
    callback("Session 3: ", session3)
}

printSessions("DSA", "MERN", "Spring", PrintDetails)