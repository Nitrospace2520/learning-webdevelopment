require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../model/User");

const handleLogin = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res
      .status(400)
      .json({ message: "Username and Password are required" });
  const foundUser = await User.findOne({ username: username }).exec();
  if (!foundUser)
    return res.status(401).json({ Unauthorized: `${username} doesn't exist` });

  const matchPassword = await bcrypt.compare(password, foundUser.password);
  if (matchPassword) {
    // TODO: create JWTs (JSON Web Tokens)
    const roles = Object.values(foundUser.roles);

    const accessToken = jwt.sign(
      { UserInfo: { username: foundUser.username, roles: roles } },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "30s" }
    );
    const refreshToken = jwt.sign(
      { username: foundUser.username },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    // note: saving refresh token with current user:-
    foundUser.refreshToken = refreshToken;
    const result = await foundUser.save();
    console.log(result);

    // note:
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 24 * 60 * 60 * 1000, // => 1 day
    });
    res.status(200).json({ accessToken });
    // TODO: Write The code:-
  } else {
    res.status(401).json({ Unauthorized: `Please enter a valid password` });
  }
};

module.exports = { handleLogin };
