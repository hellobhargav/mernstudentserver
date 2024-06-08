require("./db");
let express = require("express");
let Students = require("./Modal/StudentModal");
let cors = require("cors")

let app = express()

app.use(cors())

app.use(express.json())

//Post Data
app.post("/student", async (req, res) => {
    let student = new Students(req.body);
    let result = await student.save();
    res.send(result)
})

//read
app.get("/student", async (req, res) => {
    let student = await Students.find();
    if (student.length > 0) {
        res.send(student)
    }
    else {
        res.send({ result: "No Data Found" })
    }
})

//Get One Object
app.get("/student/:_id", async (req, res) => {
    let student = await Students.findOne({ _id: req.params._id })
    res.send(student)
})


//Update Student
app.put("/student/:_id", async (req, res) => {
    let student = await Students.updateOne({ _id: req.params._id }, { $set: req.body });
    res.send(student)
})

//delete
app.delete("/student/:_id", async (req, res) => {
    let student = await Students.deleteOne({ _id: req.params._id })
    res.send(student)
})

app.get("*", (req, res) => {
    res.send("Welcome to API by hellobhargav")
})

app.listen(4000, () => console.log("API Started"))