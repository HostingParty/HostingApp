const express = require("express");
const router = express.Router();
const { getRecipes } = require("../../controllers/foodController");

//Below routers are set to path /api/v1/food
router.route("/api/v1/recipes")
    .get(getRecipes)

module.exports = router;
