const mongoose = require("mongoose");

//? Schema of mongoose:=
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    address: {
      street: String,
      suite: String,
      city: String,
      zipcode: String,
      geo: { lat: String, lng: String },
    },
    phone: { type: String, required: true },
    website: String,
    company: {
      name: String,
      catchPhrase: String,
      bs: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
