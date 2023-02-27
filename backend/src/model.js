const mongoose = require('mongoose')
const schema = mongoose.Schema({
    Email:String,
    Password:String,
    Students:Array
})
module.exports = mongoose.model('Tailweb', schema)