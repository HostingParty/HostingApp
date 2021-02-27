const express = require("express");
const router = express.Router();
const isLoggedIn = require("../../middleware/isLoggedIn");
const {
  getUsers,
  getSingleUser,
  getUserByName,
  addUser,
  updateUser,
  updateUserArrayField,
  updateUserPw,
  deleteUser,
} = require("../../controllers/userController");

router.route("/search").get(getUserByName);

router.route("/:id").get(getSingleUser).put(updateUser).delete(deleteUser);

router.route("/pw/:id").put(isLoggedIn, updateUserPw);

// This will handle updates to friends, allergies, preferences, favoriteRecipes, hosting, pending, accepted, declined
router.route("/array/:id").put(updateUserArrayField);

//Below routers are set to path /api/v1/users
router.route("/").get(getUsers).post(addUser);

module.exports = router;
