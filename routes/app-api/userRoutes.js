const express = require("express");
const router = express.Router();
const {
  getUsers,
  getSingleUser,
  addUser,
  updateUser,
  updateUserPw,
  deleteUser,
} = require("../../controllers/userController");

//Below routers are set to path /api/v1/users
router.route("/").get(getUsers).post(addUser);

router.route("/pw/:id").put(updateUserPw);

router.route("/:id").get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;
