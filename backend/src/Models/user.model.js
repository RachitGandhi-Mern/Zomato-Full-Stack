const mongoose = require('mongoose')


const userSchema = new  mongoose.Schema({
    fullname:{
        type:String,
        require:true,
        trim:true
    },
    username:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
},{timestamps:true})


const userModel = mongoose.model('User', userSchema)

module.exports = userModel