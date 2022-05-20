const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
const User = mongoose.model("Users", userSchema);
module.exports = User;
