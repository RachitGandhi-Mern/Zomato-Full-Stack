const express = require("express");
const { CreateFood } = require("../Controllers/foodController");
const { ProtectRoute } = require("../Middleware/ProtectedRoute");
const Router = express.Router();

Router.post("/", ProtectRoute, CreateFood);



module.exports = Router
 