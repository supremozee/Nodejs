const fs = require("fs")
const data = JSON.parse(fs.readFileSync("./user.json"));

exports.getUser = (req, res) => {
  res.json({
    status: "success",
    message: "Data fetched successfuly",
    data: {
      count: data.length,
      user: data,
    },
  });
};
exports.postUser = (req, res) => {
  let newId = data[data.length - 1].id + 1;
  let newUser = Object.assign({ id: newId }, req.body);
  data.push(newUser);
  fs.writeFile("./user.json", JSON.stringify(data), () => {});
  res.status(200).json({
    status: "Success",
    data: {
      data: data,
    },
  });
};
exports.getUserById = (req, res) => {
  let id = req.params.id;
  let user = data.find((el) => el.id == id);
  if (!user) {
    return res.status(404).json({
      status: " ُError",
      message: `User of ID: ${id} not found`,
    });
  }
  return res.status(200).json({
    status: " Success",
    data: {
      user: user,
    },
  });
};
exports.patchUserById = (req, res) => {
  let id = req.params.id;
  let findUserToUpdate = data.find((el) => el.id == id);
  let index = data.indexOf(findUserToUpdate);
  Object.assign(findUserToUpdate, req.body);
  data[index] = findUserToUpdate;
  fs.writeFile("./user.json", JSON.stringify(data), () => {
    res.status(201).json({
      status: "Success",
      data: {
        user: findUserToUpdate,
      },
    });
  });
};

exports.deleteUser = (req, res) => {
  const deleteId = req.params.id;
  const userToDelete = data.find((el) => el.id == deleteId);
  const index = data.indexOf(userToDelete);
  data.splice(index, 1);
  res.status(204).json({
    status: "Success",
    message: "Deleted successfully",
  });
};
