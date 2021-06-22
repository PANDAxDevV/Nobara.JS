const mongoose = require("mongoose");
const { DEFAULTSETTINGS: defaults } = require("../config");

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  guildID: String,
  guildName: String,
  userID: String,
  username: String,
  experience: {
    "type": Number,
    "default": 0
  },
  level: {
    "type": Number,
    "default": 0
  },
  coins: {
    "type": Number,
    "default": 1000
  },
  bank: {
    "type": Number
  },
  registeredAt: { 
    type: Number, 
    default: Date.now()
  }
});

module.exports = mongoose.model("User", userSchema);