const { Booking } = require("../models/Booking")

//Create Booking

exports.createBooking = async(req,res)=>{
    const newBooking = new Booking(req.body);

    try{
        const savedBooking = await newBooking.save();

        return res.status(200).send({
            success:true,
            message:"Your tour is booked",
            data:savedBooking
        })
    } catch(err){
        console.log(err)
        return res.status(500).send({
            success:false,
            message:"Internal Server Error",
            err
        })
    }
}

//Get Single Booking Details

exports.getBookingDetails = async(req,res)=>{
    const id = req.params.id;
    try{
        const booking = await Booking.findById(id);

        return res.status(200).send({
            success:true,
            message:"Booking Details found Successfully",
            booking
        })
    }catch(err){
        return res.status(404).send({
            success:false,
            message:"Booking Details Not Found",
            err
        })
    }
}

//Get All Bookings Details

exports.getAllBookingDetails = async(req,res)=>{
    
    try{
        const bookings = await Booking.find();

        return res.status(200).send({
            success:true,
            message:"All Booking Details found Successfully",
            bookings
        })
    }catch(err){
        return res.status(500).send({
            success:false,
            message:"Internal Server Error,Booking Details Not Found",
            err
        })
    }
}