const express = require("express");
const { verifyUser } = require("../middleware/userAuth");
const { createBooking, getBookingDetails, getAllBookingDetails } = require("../controllers/bookingController");
const router = express.Router();

//Create booking
router.post("/createBooking",verifyUser,createBooking)

//get single booking
router.get("/getBookingDetails/:id",verifyUser,getBookingDetails)

//Get all Booking details
router.get("/getAllBookingDetails",verifyUser,getAllBookingDetails)

exports.router = router;