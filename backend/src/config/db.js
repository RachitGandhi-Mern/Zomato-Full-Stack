const mongoose = require('mongoose')



async function ConnecttoDB(){
    if(!process.env.MONGODB_URI){
        console.error("MONGODB_URI is Missing in Env")
        process.exit(1);
    }

    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("Successfully Connected to Database")
    })
    .catch(error=>{
        console.log("Database Connection Failed" , error)
    })
}

module.exports = ConnecttoDB