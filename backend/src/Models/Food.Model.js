const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    Foodname:{
        type:String,
        require:true
    },
    video:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    foodPartner:{
        type: mongoose.Types.ObjectId,
        ref:"Partner"
    }
},{timestamps:true})

const foodModel = mongoose.model("Food", foodSchema)

module.exports = foodModel