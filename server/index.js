const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors")
const tourRouter = require("./routes/tourRoute")
const userRouter = require("./routes/userRoute")
const authRouter = require("./routes/authRoute");
const reviewRouter = require("./routes/reviewRoute");
const bookingRouter = require("./routes/bookingRoute");
const cookieParser = require("cookie-parser");

dotenv.config()
const server = express();
const port = process.env.PORT || 8080;
const corsOptions = {
  origin:true,
  credentials:true,
}

//Database

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb+srv://codersam:oAehfbswfH9OfkiW@cluster0.sjry8oj.mongodb.net/?retryWrites=true&w=majority");

  console.log("Database connected successfully");
}

//middleware

server.use(express.json())
server.use(cookieParser())
server.use(cors(corsOptions))
server.use("/api/v1/auth",authRouter.router)
server.use("/api/v1/tours", tourRouter.router)
server.use("/api/v1/users", userRouter.router)
server.use("/api/v1/reviews", reviewRouter.router)
server.use("/api/v1/booking", bookingRouter.router)

server.get("/",(req,res)=>{
    
    res.send("Hello World")
})



//listen to server

server.listen(port,()=>{
    console.log(`Server Started on ${port}`);
})
