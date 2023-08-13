const mongoose = require("mongoose")
const { Schema } = mongoose;

const bookingSchema = new Schema({
    userId:String,
    userEmail:String,
    tourName:{
        type:String,
        required:true
    },
    fullName: {
        type:String,
        required:true
    },
    guestSize:{
        type:Number,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    bookAt:{
        type:Date,
        required:true
    } 
    },
    { timestamps: true }
);

exports.Booking = mongoose.model('Booking', bookingSchema);