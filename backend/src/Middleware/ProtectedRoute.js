const jwt = require("jsonwebtoken");
const PartnerModel = require('../Models/Partner.model')

exports.ProtectRoute = async (req, res, next) => {
  try {
    const  token  = req.cookies.token ;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized: No token provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const FoodPartner = await PartnerModel.findById(decoded.id)
    req.FoodPartner = FoodPartner;
    next();
  } catch (error) {
    res.status(500).json({ Message: error.message, error });
  }
};
