let expressObj = require("express")
let router = expressObj.Router({})
let fsObj = require("fs")

router.get("/CreateUser/:name/:session/:address/:age", (req, res) => {
    let user = {
        name : req.params["name"],
        session : req.params["session"],
        address : req.params["address"],
        age : req.params["age"]
    }
    fsObj.appendFile("userInfo.json", JSON.stringify(user) +"\n", (err) => {
        if (err) {
            console.error("File writing error:", err);
            return res.status(500).send("User data could not be saved.");
        }
        res.send("User data saved.");
    });
})

module.exports = router