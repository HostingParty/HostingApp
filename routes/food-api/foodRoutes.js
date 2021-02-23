const express = require("express");
const router = express.Router();
const { getRecipes } = require("../../controllers/foodController");

//Below routers are set to path /api/v1/food
router.route("/recipes/:dishType")
    .get(getRecipes)

module.exports = router;
