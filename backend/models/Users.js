const mongoose = require("mongoose"); // Import mongoose module
const { Schema } = mongoose; // Destructure Schema from mongoose

// Create a new Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  // username: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("users", UserSchema); // Create a new model from the Schema
User.createIndexes(); // Create Indexes for the Schema
module.exports = User; // Export the model
