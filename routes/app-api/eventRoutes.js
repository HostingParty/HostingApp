const express = require("express");
const router = express.Router();
const { getEvents, getSingleEvent, addEvent, deleteEvent } = require("../../controllers/eventsController");

//Below routers are set to path /api/v1/events
router.route("/").get(getEvents).post(addEvent);

router.route("/:id").get(getSingleEvent).delete(deleteEvent);

module.exports = router;
