const fsPromises = require("fs").promises;
const path = require("path");
const usersDB = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const handleLogout = async (req, res) => {
  // todo: On client side, also delete the accessToken

  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); // 204 => no content
  const refeshToken = cookies.jwt;

  const foundUser = usersDB.users.find(
    (user) => user.refreshToken === refeshToken
  );
  if (!foundUser) {
    res.clearCookie("jwt", {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 24 * 60 * 60 * 1000, // maxAge is not necessary for delete a cookie
    });
    return res.sendStatus(204); // 204 => successfull but no content
  }

  //$ delete refresh token in db
  const otherUsers = usersDB.users.find(
    (user) => user.refreshToken !== foundUser.refreshToken
  );
  const currentUser = { ...foundUser, refreshToken: "" };
  usersDB.setUsers([otherUsers, currentUser]);
  await fsPromises.writeFile(
    path.join(__dirname, "..", "model", "users.json"),
    JSON.stringify(usersDB.users)
  );
  res.clearCookie("jwt", {
    httpOnly: true,
    sameSite: "None",
    secure: true,
    maxAge: 24 * 60 * 60 * 1000,
  }); //? ADD 'secure: true' in production to server on https
  res.sendStatus(204);
};

module.exports = { handleLogout };
