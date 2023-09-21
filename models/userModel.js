const mongoose = require("mongoose");

const userModel = new mongoose.Schema(
  {
    username: {
      type: String,
      // required: [true, "Username is required"],
      // minLength: [4, "Username must have atleast 4 characters."],
      // unique: true,
    },
    email: {
      type: String,
      // required: [true, "Email is required"],
      // lowercase: true,
      // match: [
      //   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      //   "Please fill a valid email address",
      // ],
    },
    password: {
      type: String,
      // required: [true, "Password is required"],
      // minLength: [8, "Password must have atleast 8 characters."],
      select: false,
      // match: [
      //     /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/,
      //     "Please fill valid password",
      // ],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userModel);
