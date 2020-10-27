const mongoose = require('mongoose')

const studentsSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    }
},{versionKey: false});

module.exports = mongoose.model('Student',studentsSchema);