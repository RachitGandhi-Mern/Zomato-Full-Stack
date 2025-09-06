const express = require('express')
const { register, login, logout, registerParter, loginPartner, logoutPartner } = require('../Controllers/authController')
const Router = express.Router()

Router.post('/register',register )
Router.post('/login',login )
Router.post('/user/logout',logout )




Router.post('/Partner/RegisterPartner',registerParter )
Router.post('/Partner/loginPartner',loginPartner )
Router.post('/Partner/logoutPartner',logoutPartner )


 

module.exports = Router