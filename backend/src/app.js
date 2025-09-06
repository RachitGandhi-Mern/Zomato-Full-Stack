const express = require('express')
const app = express()
const ConnecttoDB = require('./config/db')
const cookieParser = require("cookie-parser");
const authRouter = require('./Routes/auth.Route')
const foodRouter = require('./Routes/foodPartner.Route')
ConnecttoDB()
app.use(cookieParser())
app.use(express.json())


app.use('/api/auth' , authRouter)
app.use('/api/food',foodRouter)


module.exports = app