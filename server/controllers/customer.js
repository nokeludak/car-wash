const User = require("../models/CustomerModel");
const Wash = require("../models/WashModel");

// CREATE CUSTOMER
const create = async (req, res, next) => {
  const newUser = new User({
    username: req.body.username,
    name: req.body.name,
    lastName: req.body.lastName,
    washCount: req.body.washCount,
    
  });
  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
    console.log(savedUser)
  } catch (error) {
    res.status(500).json(error);
  }
};

const getCustomer = async (req, res, next) => {
  try {
    const users = await User.findById();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};
// controller for getting all customer in front
const getAllCustomers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

const washController = async (req, res) => {

  const newUser = new Wash({
    username: req.body.username,
    washType: req.body.washType,
    price: req.body.price,
    discount: req.body.discount
    
  });
  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
    console.log(savedUser)
  } catch (error) {
    res.status(500).json(error);
}
}



module.exports = { create, getCustomer, getAllCustomers, washController };
