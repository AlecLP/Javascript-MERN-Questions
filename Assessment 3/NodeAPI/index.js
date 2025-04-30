let express = require("express")
const app = express()

const UserPath = require("./route/userRoute")
const UserApp = express()

globalThis.rootPath = __dirname

app.use("/", UserApp)
UserApp.use("/", UserPath)

console.log("Student API listening on 9000")
app.listen(9000)