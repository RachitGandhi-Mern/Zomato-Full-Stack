const foodModel = require('../Models/Food.Model')





exports.CreateFood = async(req ,res)=>{

console.log(req.FoodPartner)
res.send('food created')

}