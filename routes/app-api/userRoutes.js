const express = require("express");
const router = express.Router();
const isLoggedIn = require("../../middleware/isLoggedIn");
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

router.route("/pw/:id").put(isLoggedIn, updateUserPw);

router.route("/:id").get(getSingleUser).put(isLoggedIn, updateUser).delete(isLoggedIn, deleteUser);

module.exports = router;
