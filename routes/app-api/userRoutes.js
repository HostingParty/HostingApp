const express = require("express");
const router = express.Router();
const { getUsers, getSingleUser, addUser, deleteUser } = require("../../controllers/userController");

//Below routers are set to path /api/v1/users
router.route("/").get(getUsers).post(addUser);

router.route("/:id").get(getSingleUser).delete(deleteUser);

module.exports = router;
