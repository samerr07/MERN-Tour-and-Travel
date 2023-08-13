const express = require('express');
const { createTour, updateTour, deleteTour, getTour, getAllTours, getTourBySearch, getFeaturedTour, getTourCount } = require('../controllers/tourController');
const { verifyAdmin } = require('../middleware/adminAuth');

const router = express.Router();


//create Tour
router.post("/createTour",createTour);

//get tour
router.get("/getTour/:id",getTour);

//get all tour
router.get("/getAllTours",getAllTours)

//update Tour
router.put("/updateTour/:id",verifyAdmin, updateTour);

//Delete Tour
router.delete("/deleteTour/:id",verifyAdmin,deleteTour);

//search tour
router.get("/search/getTourBySearch",getTourBySearch);

//featuredTour

router.get("/getFeaturedTour",getFeaturedTour);

//tour count

router.get("/getTourCount",getTourCount);




exports.router = router;