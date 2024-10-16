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
    res.status(200).json({ success: `Welcome back, ${username}` });
  } else {
    res.status(401).json({ Unauthorized: `Please enter a valid password` });
  }
};

module.exports = { handleLogin };
