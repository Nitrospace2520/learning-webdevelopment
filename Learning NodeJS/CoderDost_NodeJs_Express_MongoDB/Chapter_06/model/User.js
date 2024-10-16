const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const validateHairType = (value) => {
  const validHairTypes = [
    "straight",
    "curly",
    "wavy",
    "kinky",
    "frizzy",
    "spiky",
    "bald",
    "very curly",
    "etc",
  ];
  return validHairTypes.includes(value.toLowerCase());
};

const userSchema = new Schema({
  id: { type: Number, default: 1 },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  maidenName: String,
  age: {
    type: Number,
    required: true,
    min: [0, "Age must be at least 0"],
    max: [120, "Age must be at most 120"],
  },
  gender: { type: String, required: true },
  email: { type: String, required: true },
  phone: {
    type: String,
    required: true,
  },
  username: { type: String, required: true },
  password: { type: String, required: true },
  birthDate: { type: Date, required: true },
  image: String,
  bloodGroup: String,
  height: {
    type: Number,
    min: [0, "Height must be at least 0"],
    max: [300, "Height must be at most 300"],
  },
  weight: {
    type: Number,
    min: [0, "Weight must be at least 0"],
    max: [500, "Weight must be at most 500"],
  },
  eyeColor: String,
  hair: {
    color: String,
    type: {
      type: String,
      validate: [validateHairType, "Invalid hair type"],
    },
  },
  domain: String,
  ip: String,
  address: {
    address: String,
    city: String,
    coordinates: {
      lat: Number,
      lng: Number,
    },
    postalCode: String,
    state: String,
  },
  macAddress: String,
  university: String,
  bank: {
    cardExpire: String,
    cardNumber: String,
    cardType: String,
    currency: String,
    iban: String,
  },
  company: {
    address: {
      address: String,
      city: String,
      coordinates: {
        lat: Number,
        lng: Number,
      },
      postalCode: String,
      state: String,
    },
    department: String,
    name: String,
    title: String,
  },
  ein: String,
  ssn: String,
  userAgent: String,
  crypto: {
    coin: String,
    wallet: String,
    network: String,
  },
});

module.exports = mongoose.model("User", userSchema, "users");
