//create promise of four concurrent sessions of a day and try to resolve and reject them

let session1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            status : "Success",
            msg : "Session 1 success",
            code : 200
        })
    }, 4000);

    setTimeout(() => {
        reject({
            status : "Failed",
            msg : "Session 1 failed",
            code : 400
        })
    }, 4000);
})

let session2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            status : "Success",
            msg : "Session 2 success",
            code : 200
        })
    }, 4000);

    setTimeout(() => {
        reject({
            status : "Failed",
            msg : "Session 2 failed",
            code : 400
        })
    }, 4000);
})

let session3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            status : "Success",
            msg : "Session 3 success",
            code : 200
        })
    }, 4000);

    setTimeout(() => {
        reject({
            status : "Failed",
            msg : "Session 3 failed",
            code : 400
        })
    }, 3000);
})

let session4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            status : "Success",
            msg : "Session 4 success",
            code : 200
        })
    }, 4000);

    setTimeout(() => {
        reject({
            status : "Failed",
            msg : "Session 4 failed",
            code : 400
        })
    }, 3000);
})

Promise.allSettled([
    session1,
    session2,
    session3,
    session4
]).then((data) => {
    console.log(data)
})

Promise.all([
    session1,
    session2,
    session3,
    session4
]).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})

//create a promise to print user info like - name, address, account number after 3 seconds, using aync and await
// also check when it rejects after 2 second
// analyse how await works as blocking execution

function printUserInfo (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                FullName : "John Doe",
                Address : "123 Main Street",
                AccountNumber: "123456789"
            })
        }, 3000);

        setTimeout(() => {
            reject({
                status : "Failed",
                code : "400",
                msg : "Failed to print user info"
            })
        }, 2000);
    })
}

async function getUserInfo(){
    console.log("Trying to fetch user info")
    try{
        await printUserInfo().then((data) => console.log(data))
    }
    catch(error){
        console.log(error)
    }
    console.log("Blocked by await")
}

getUserInfo()

// create one set of map using different types of keys and at leas show the usage of 5 functions (.get, .clear)
// create a list using set and show the usage of 5 functions (.add, .clear)

let testMap = new Map()
let stringKey = "String Key", objectKey = {}, functionKey = function () {}, numberKey = 1234
testMap.set(stringKey, "String Value")
testMap.set(objectKey, "Object Value")
testMap.set(functionKey, "Function Value")
testMap.set(numberKey, "Number Value")
console.log(testMap.get(stringKey))
console.log(testMap.delete(stringKey))
console.log(testMap.size)
console.log(testMap.entries())
testMap.clear()

let testSet = new Set(["John", "Jane", "Bob", "Will", "Alice", "Sam"])
console.log(testSet.add("John"))
console.log(testSet.size)
console.log(testSet.delete("Alice"))
console.log(testSet.entries())
testSet.clear()