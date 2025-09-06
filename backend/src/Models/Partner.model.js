const mongoose = require('mongoose')

const PartnerSchema =  mongoose.Schema({
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


const PartnerModel = new mongoose.model("Partner", PartnerSchema)

module.exports = PartnerModel