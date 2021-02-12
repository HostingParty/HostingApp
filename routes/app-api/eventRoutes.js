const express = require("express");
const router = express.Router();
const { getEvents, getSingleEvent } = require("../../controllers/eventsController");

router.route("/").get(getEvents);

router.route("/:id").get(getSingleEvent);

module.exports = router;
