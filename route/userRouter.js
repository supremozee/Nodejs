const express = require("express");
const router = express.Router();
const userController = require("../controller/userController")
router.route("/").get(userController.getUser).post(userController.postUser);
router
  .route("/:id")
  .get(userController.getUserById)
  .patch(userController.patchUserById)
  .delete(userController.deleteUser);

module.exports = router;
