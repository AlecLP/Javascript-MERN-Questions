//create a promise with name student login
//resolve it after 3 seconds and set student details with call status in the response object
//reject it after 4 seconds and set error details with call status in the response object

let studentLogin = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve({
            status : "Success",
            code : 200,
            message : "Authentication Success"
        })
    }, 3000);

    setTimeout(() => {
        reject({
            status : "Failed",
            code : 500,
            message : "Internal server error!!"
        })
    }, 4000);
})

studentLogin
.then((data) => {
    console.log(data)
})
.catch((err) => {
    console.log(err)
})