const path = require("path");
const fsPromises = require("fs").promises;
const bcrypt = require("bcrypt");

const usersDB = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const handleNewUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res
      .status(400)
      .json({ message: `Username and password are required` });
  // Check for duplicate username:-
  const duplicate = usersDB.users.find((user) => user.username === username);
  if (duplicate)
    return res
      .status(409) //* 409 => conflict
      .json({ conflict: `Username ${username} already exits` });

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // note: adding salt to the user's password
    const id = usersDB.users[usersDB.users.length - 1]?.id + 1 || 1;
    const newUser = { id: id, username: username, password: hashedPassword };
    usersDB.setUsers([...usersDB.users, newUser]);

    await fsPromises.writeFile(
      path.join(__dirname, "..", "model", "users.json"),
      JSON.stringify(usersDB.users)
    );
    // console.log(usersDB.users);
    res.status(201).json({ success: `${username} is successfully created` });
  } catch (error) {
    res.status(500).json({ message: error.message }); //* 500 => internal server error
  }
};

module.exports = { handleNewUser };
