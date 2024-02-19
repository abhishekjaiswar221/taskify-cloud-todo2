const mongoose = require("mongoose"); // Import mongoose module
const { Schema } = mongoose;
// Declare the Schema of the Mongo model
const NotesSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    default: "General",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//Export the model
module.exports = mongoose.model("notes", NotesSchema);
