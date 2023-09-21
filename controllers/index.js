const userModel = require("../models/userModel.js");

exports.home = async (req, res) => {
  res.status(200).json({ message: "this is test route" });
};

// create
exports.create = async (req, res, next) => {
  try {
    const data = req.body;
    const newUser = new userModel(data);
    const user = await newUser.save();
    res.status(200).json({
      message: "Successfully Created",
      user,
    });
  } catch (error) {
    res.status(501).json(error.message);
    console.log(error);
  }
};

exports.readall = async (req, res) => {
  const users = await userModel.find();
  res.status(200).json({ users });
  // console.log(users);
};
