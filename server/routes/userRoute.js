const express = require("express");
const { updateUser, deleteUser, getUser, getAllUsers } = require("../controllers/userController");
const { verifyUser } = require("../middleware/userAuth");
const { verifyAdmin } = require("../middleware/adminAuth");

const router = express.Router();

//update user

router.put("/updateUser/:id",verifyUser,updateUser)

//delete user
router.delete("/deleteUser/:id" ,verifyUser,deleteUser)

//get user 
router.get("/getUser/:id" ,verifyUser,getUser)

//get all users
router.get("/getAllUsers" ,verifyAdmin,getAllUsers)

exports.router = router;