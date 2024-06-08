let mongoose = require("mongoose");
const url = "mongodb+srv://elearninfotech1:V4DdNbA00XBC4m30@mern5pm.evt9pad.mongodb.net/?retryWrites=true&w=majority&appName=mern5pm";
mongoose.connect(url)
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(err))