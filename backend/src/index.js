const express = require("express")
const mongoose = require('mongoose')
var cors = require('cors')
const app = express();
const cookieParser = require('cookie-parser')
const route = require('./routes')

app.use(cors({ origin:'http://localhost:3000', credentials:true }))
app.use(cookieParser())
app.use(express.json());
mongoose.set("strictQuery", true);
app.use("/", route);

mongoose.connect("mongodb+srv://piyush:piyushrajutale@cluster0.qq9et69.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("Mongodb is connected."))
    .catch((err) => console.log(err));

app.listen(5000, function () {
    console.log("Express app is running on port " + 5000);
});