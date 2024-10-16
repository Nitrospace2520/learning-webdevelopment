require("dotenv").config();
const jwt = require("jsonwebtoken");
const fsPromises = require("fs").promises;
const path = require("path");

const bcrypt = require("bcrypt");
const usersDB = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const handleLogin = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res
      .status(400)
      .json({ message: "Username and Password are required" });
  const foundUser = usersDB.users.find((user) => user.username === username);
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
    const otherUsers = usersDB.users.filter(
      (user) => user.username !== foundUser.username
    );
    const currentUser = { ...foundUser, refreshToken };
    usersDB.setUsers([...otherUsers, currentUser]);
    await fsPromises.writeFile(
      path.join(__dirname, "..", "model", "users.json"),
      JSON.stringify(usersDB.users)
    );
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
