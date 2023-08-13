const express = require("express");
const { createReview } = require("../controllers/reviewController");
const { verifyUser } = require("../middleware/userAuth");
const router = express.Router();


router.post("/:tourId",verifyUser,createReview)

exports.router = router;