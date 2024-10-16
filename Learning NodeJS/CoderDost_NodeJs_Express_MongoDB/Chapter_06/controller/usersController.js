const User = require("../model/User");

//* create
const createUser = async (req, res) => {
  try {
    const prevUser = await User.findOne().sort({ id: -1 });
    const id = prevUser ? prevUser.id + 1 : 1;
    const newUser = new User({ id, ...req.body });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//* read
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { _id: 0, __v: 0 }).sort({ id: 1 });
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ id: +id }, { _id: 0, __v: 0 });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//* update
const replaceUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ id: +id });
    if (user) {
      const replacedUser = await User.replaceOne(
        { id: +id },
        { ...req.body, id: +id, _id: user._id }
      );
      res.json(replacedUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({ id: +id });
    if (user) {
      const updatedUser = await User.updateOne(
        { id: +id },
        { ...req.body, id: +id, _id: user._id }
      );
      res.json(updatedUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//* delete
const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({ id: +id });
    if (user) {
      await User.deleteOne({ id: +id });
      res.json({ message: "User deleted" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUser,
  replaceUser,
  updateUser,
  deleteUser,
};
