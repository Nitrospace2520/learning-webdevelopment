const User = require("../model/User");

const handleLogout = async (req, res) => {
  // todo: On client side, also delete the accessToken

  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); // 204 => no content
  const refreshToken = cookies.jwt;

  const foundUser = await User.findOne({ refreshToken }).exec();
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
  foundUser.refreshToken = "";
  const result = await foundUser.save();
  console.log(result);

  res.clearCookie("jwt", {
    httpOnly: true,
    sameSite: "None",
    secure: true,
    maxAge: 24 * 60 * 60 * 1000,
  }); //? ADD 'secure: true' in production to server on https
  res.sendStatus(204);
};

module.exports = { handleLogout };
