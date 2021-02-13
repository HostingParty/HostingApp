const express = require("express");
const router = express.Router();
const { getEvents, getSingleEvent, addEvent, updateEvent, deleteEvent } = require("../../controllers/eventsController");

//Below routers are set to path /api/v1/events
router.route("/").get(getEvents).post(addEvent);

router.route("/:id").get(getSingleEvent).put(updateEvent).delete(deleteEvent);

module.exports = router;
