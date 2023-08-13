const { Review } = require("../models/Review")
const { Tour } = require("../models/Tour")

exports.createReview = async(req,res)=>{
    const tourId = req.params.tourId;

    const newReview = new Review(req.body);
    try{
        const savedReview = await newReview.save();

        //After creatimg the new review now update the reviews array of tour
        
        await Tour.findByIdAndUpdate(tourId,{
            $push:{reviews: savedReview._id}
        })
        return res.status(200).send({
            success:true,
            message:"Review Submitted",
            data:savedReview
        })
    }catch(err){
        console.log(err)
        return res.status(500).send({
            success:false,
            message:"Failed to submit review",
            err
        })
    }
}