const express = require("express");
const router = express.Router();
const {
  getEvents,
  getSingleEvent,
  addEvent,
  updateEvent,
  deleteEvent,
  updateEventRecipe,
} = require("../../controllers/eventsController");

//Below routers are set to path /api/v1/events
router.route("/recipe/:id").put(updateEventRecipe);

router.route("/:id").get(getSingleEvent).put(updateEvent).delete(deleteEvent);

router.route("/").get(getEvents).post(addEvent);

module.exports = router;
