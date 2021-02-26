const express = require("express");
const router = express.Router();
const { uploadPhoto } = require("../../controllers/awsController");

//Below routers are set to path /api/v1/aws
router.route("/upload-photo")
    .post(uploadPhoto)

router.route("/text-user")
    .post(textUser)

module.exports = router;