const userModel = require("../Models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const PartnerModel = require("../Models/Partner.model");
const { json } = require("express");

exports.register = async (req, res) => {
  try {
    const { fullname, username, password } = req.body;
    const isUser = await userModel.findOne({ username });
    if (isUser) {
      return res.status(401).json("User Already Exist");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const NewUser = await userModel.create({
      fullname,
      username,
      password: hashedPassword,
    });
    const token = jwt.sign({ id: NewUser._id }, process.env.JWT_SECRET);
    res.cookie("token", token);

    res.status(201).json({ Message: "User Registered Successfully", NewUser });
  } catch (error) {
    res.status(500).json({ Message: error.message, error });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const User = await userModel.findOne({ username });
    if (!User) {
      return res
        .status(401)
        .json({ message: "User Not found Please Login First" });
    }
    const isPassword = await bcrypt.compare(password, User.password);
    if (!isPassword) {
      return res
        .status(401)
        .json({ message: "User Not found Please Login First" });
    }
    const token = jwt.sign({ id: User._id }, process.env.JWT_SECRET);
    res.cookie("token", token);

    res
      .status(201)
      .json({ message: "User LoggedIn Succesfully", User: username, token });
  } catch (error) {
    res.status(500).json({ Message: error.message, error });
  }
};

exports.logout = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    message: "Logut Successfully",
  });
};

exports.registerParter = async (req, res) => {
  try {
    const { fullname, username, password } = req.body;
    const isUser = await PartnerModel.findOne({ username });
    if (isUser) {
      return res.status(401).json({ message: "User Already Exist" });
    }
    const hashedPass = await bcrypt.hash(password, 10);
    const newUser = PartnerModel.create({
      fullname,
      username,
      password: hashedPass,
    });
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
    res.cookie("token", token);
    res.status(201).json({
      message: "Partner Register Succesfully",
      fullname: fullname,
      username: username,
      token,
    });
  } catch (error) {
    res.status(500).json({ Message: error.message, error });
  }
};

exports.loginPartner = async (req, res) => {
  try {
    const { username, password } = req.body;
    const User = await PartnerModel.findOne({ username });
    if (!User) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }
    const isPassword = await bcrypt.compare(password, User.password);
    if (!isPassword) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign({ id: User._id }, process.env.JWT_SECRET);
    res.cookie("token", token);
    res
      .status(201)
      .json({ message: "User LoggedIn Succesfully", User: username, token });
  } catch (error) {
    res.status(500).json({ Message: error.message, error });
  }
};

exports.logoutPartner = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    message: "Logut Successfully",
  });
};