const path = require("path");
const fsPromises = require("fs").promises;
const bcrypt = require("bcrypt");

const User = require("../model/User");

const handleNewUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res
      .status(400)
      .json({ message: `Username and password are required` });
  // Check for duplicate username:-
  const duplicate = await User.findOne({ username: username }).exec();
  if (duplicate)
    return res
      .status(409) //* 409 => conflict
      .json({ conflict: `Username ${username} already exits` });

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // note: adding salt to the user's password

    const result = await User.create({
      username: username,
      password: hashedPassword,
    });
    /**
     * * OR
     * const newUser = new User({
     *    username: username,
     *    password: hashedPassword,
     * })
     * const result = await newUser.save();
     */
    console.log(result);

    res.status(201).json({ success: `${username} is successfully created` });
  } catch (error) {
    res.status(500).json({ message: error.message }); //* 500 => internal server error
  }
};

module.exports = { handleNewUser };
