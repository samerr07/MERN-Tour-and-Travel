const model = require("../models/Tour");
const Tour = model.Tour;
const mongoose = require("mongoose")

//Create tour 

exports.createTour = async(req,res)=>{
    
    const newTour = new Tour(req.body)
    try{
        const savedTour = await newTour.save();
        return res.status(200).send({
            success:true,
            message:"Tour Successfully Created",
            data:savedTour
        })
    } catch(err){
        return res.status(500).send({
            success:false,
            message:"Failed to create. Try again !!",
            err
        })
    }
}

//Update Tour 

exports.updateTour = async(req,res)=>{
    const id = req.params.id;
    try{
        const updatedTour = await Tour.findByIdAndUpdate(id,{$set:req.body},{new:true})
        // findOneAndUpdate({_id:id},req.body,{new:true})
        return res.status(200).send({
            success:true,
            message:"Tour Successfully Updated",
            data:updatedTour
        })
    }catch(err){
        return res.status(500).send({
            success:false,
            message:"Failed to update",
            err
        })
    }
}

//Delete Tour

exports.deleteTour = async(req,res)=>{
    const id = req.params.id;
    try{
        await Tour.findByIdAndDelete(id)
        // findOneAndDelete({_id:id})
        return res.status(200).send({
            success:true,
            message:"Successfully Deleted",
        })
    }catch(err){
        return res.status(500).send({
            success:false,
            message:"Failed to Delete",
            err
        })
    }
}

//Get Single Tour

exports.getTour = async(req,res)=>{
    const id = req.params.id;
    try{
        const tour = await Tour.findById(id).populate("reviews")
        return res.status(200).send({
            success:true,
            message:"Tour Found Successfully",
            tour
        })
    }catch(err){
        return res.status(500).send({
            success:false,
            message:"not found",
            err
        })
    }
}

//Get all Tours

exports.getAllTours = async(req,res)=>{

    //For Pagination
    const page = parseInt(req.query.page)
   
    try{
        const tours = await Tour.find({}).populate("reviews")
        // .skip((page-1)*5)
        // .limit(5)

        .skip(page * 7 ).limit(7);

        return res.status(200).send({
            
            success:true,
            message:"All Tours found Successfully",
            count:tours.length,
            tours
        })
    }catch(err){
        console.log(err)
        return res.status(500).send({
           
            success:false,
            message:"not found",
            err
        })
    }
}


//Get Tours by Search

exports.getTourBySearch = async(req,res)=>{
    //here "i" means case sensitive

   // http://localhost:8080/api/v1/tours/search/getTourBySearch?city=London&distance=300&maxGroupSize=10

    const city = new RegExp(req.query.city,"i");
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize);

    //body se kro query lga kr dono same h

    // const city = new RegExp(req.body.city,"i");
    // const distance = parseInt(req.body.distance);
    // const maxGroupSize = parseInt(req.body.maxGroupSize);
    try{
        
        const tours = await Tour.find({
            city,
            distance:{$gte:distance},
            maxGroupSize:{$gte:maxGroupSize}
        }).populate("reviews")
        return res.status(200).send({
            success:true,
            message:"Fetched Tours Successfully",
            tours
        })
    }catch(err){
        console.log(err)
        return res.status(404).send({
            success:false,
            message:"not found",
            err
        })
    }
}

//Get featured tour

exports.getFeaturedTour = async(req,res)=>{
    try{
        const tours = await Tour.find({featured:true}).limit(8).populate("reviews");

        return res.status(200).send({
            success:true,
            message:"Fetched Featured Tour Successfully",
            tours
        })
    }catch(err){
        return res.status(404).send({
            success:false,
            message:"Featured tour not found",
            err
        })
    }
}


//Get tour count

exports.getTourCount = async(req,res)=>{
    try{
        const tourCount = await Tour.estimatedDocumentCount();

        return res.status(200).send({
            success:true,
            message:"Fetched Tour Count Successfully",
            tourCount
        })
    }catch(err){
        console.log(err)
        return res.status(500).send({
            success:false,
            message:"Not fetched Successfully",
            err
        })
    }
}