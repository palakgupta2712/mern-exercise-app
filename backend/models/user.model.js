const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    userName:{
        type : String,
        required : true,
        unique : true,
        trim : true,
        minLength : 3
    },
    age : {
        type : Number,
        required : true
    }
}, {
    timestamps : true,
})

//Converting schema into model 
const User  = mongoose.model('User', userSchema)
module.exports = User