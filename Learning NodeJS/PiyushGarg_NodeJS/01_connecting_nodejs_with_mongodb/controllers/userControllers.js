const User = require("../models/user-model");

const getAllUsers = async (req, res) => {
  try {
    //* Fetching data from json file:=
    // const html = `<ul>
    //   ${users.map((user) => `<li key={${user.id}}>${user.name}</li>`).join("")}
    // </ul>`;
    // res.send(html);

    //* Fetching data from mongodb:=
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getUser = async (req, res) => {
  try {
    const id = req.params.id;

    //* Fetching data from json file:=
    // const filter = users.find((user) => user.id === +id);
    // res.send(`<h1>${filter?.name}</h1>`);

    //* Fetching data from mongodb:=
    const filter = await User.findById(id);
    if (!filter) return res.status(404).send("User not found");

    res.send(filter);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const body = req.body;
    //* Adding data to json file:=
    // users.push({ ...body, id: users[users.length - 1].id + 1 || 1 });
    // fs.writeFile(
    //   path.join(__dirname, "/users.json"),
    //   JSON.stringify(users),
    //   (err) => {
    //     if (err) throw new Error(err.message);
    //     res.status(201).send("done");
    //   }
    // );

    //* Adding data to mongodb:=
    const user = new User(body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    //* Deleting data from json file:=
    // const index = users.findIndex((user) => user.id === id);
    // users.splice(index, 1);
    // res.end("deleted successfully");
    // fs.writeFile(
    //   path.join(__dirname, "/users.json"),
    //   JSON.stringify(users),
    //   (err) => {
    //     if (err) throw new Error(err.message);
    //     res.status(201).send("done");
    //   }
    // );

    //* Deleting data from mongodb:=
    const filter = await User.findByIdAndDelete(id);
    if (!filter) return res.status(404).send("User not found");

    res.send(filter);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    //* Updating data in json file:=
    // const index = users.findIndex((user) => user.id === id);
    // users[index] = { ...users[index], ...body };
    // fs.writeFile(
    //   path.join(__dirname, "/users.json"),
    //   JSON.stringify(users),
    //   (err) => {
    //     if (err) throw new Error(err.message);
    //     res.status(201).send("done");
    //   }
    // );

    //* Updating data in mongodb:=
    const filter = await User.findByIdAndUpdate(id, body, { new: true });
    res.send(filter);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
module.exports = { getAllUsers, getUser, createUser, deleteUser, updateUser };
