const { User } = require("../models/User")


//create user

exports.createUser = async(req,res)=>{
    const newUser = new User(req.body);
    try{
        const savedUser = await newUser.save()
        return res.status(201).send({
            success:true,
            message:"User created successfully",
            data:savedUser
        })
    }catch(err){
        return res.status(500).send({
            success:false,
            message:"User creation failed",
            err
        })
    }
}

//update user

exports.updateUser = async(req,res)=>{
    const id = req.params.id;
    try{
        const updatedUser = await User.findByIdAndUpdate(id,{$set:req.body},{new:true})
        return res.status(200).send({
            success:true,
            message:"User updated successfully",
            updatedUser
        })
    }catch(err){
        return res.status(500).send({
            success:false,
            message:"User update failed",
            err
        })
    }
}

//Delete user

exports.deleteUser = async(req,res)=>{
    const id = req.params.id;
    try{
        await User.findByIdAndDelete(id);
        return res.status(200).send({
            success:true,
            message:"User deleted successfully",
        })
    }catch(err){
        return res.status(404).send({
            success:false,
            message:"User deletion failed",
            err
        })
    }
}

//Get single user

exports.getUser = async(req,res)=>{
    const id = req.params.id;
    try{
        const user = await User.findById(id)
        return res.status(200).send({
            success:true,
            message:"User found successfully",
            data:user,
        })
    }catch(err){
            return res.status(401).send({
                success:false,
                message:"User not found",
                err
            })
        }
    }


    //get all users

exports.getAllUsers = async(req,res)=>{
    try{
        const users = await User.find()
        return res.status(200).send({
            success:true,
            message:"All Users found successfully",
            data:users
        })
    }catch(err){
        return res.status(401).send({
            success:false,
            message:"Error while fetching users",
            err
        })
    }
}
