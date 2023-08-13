const JWT = require("jsonwebtoken")

exports.verifyToken = async(req,res,next)=>{

    // const token = req.cookies.accessToken;
    

    try{

        // if(!token){
        //     return res.status(401).send({
        //         success:false,
        //         message:"Auth failed5"
        //     })
        // }
        const token = req.headers["authorization"].split(" ")[1];
        //if token is exists
        // const token = req.cookies.accessToken;
        // console.log(token)
        JWT.verify(token, process.env.JWT_SECRET, (err,user)=>{
            if(err){
                console.log(err)
                return res.status(401).send({
                    success:false,
                    message:"Auth Failed6"
                })
            } else {
                req.user = user;
                next();
            }
        })
    }catch(err){
        console.log(err);
        return res.status(401).send({
            success:false,
            err,
            message:"Auth Failed7"
        })
    }
}

// exports.verifyUser = async(req,res,next)=>{
//     try{
//         verifyToken(req,res,next,()=>{
//             if(req.user.id === req.params.id || req.user.role === "admin"){
//                 next();
//             } else {
//                 return res.status(401).send({
//                     success:false,
//                     message:"Auth Failed"
//                 })
//             }
//         })
//     }catch(err){
//         console.log(err);
//         return res.status(401).send({
//             success:false,
//             err,
//             message:"Auth Failed"
//         })
//     }
// }

// exports.verifyAdmin = async(req,res,next)=>{
//     try{
//         verifyToken(req,res,next,()=>{
//             if(req.user.role === "admin"){
//                 next();
//             } else {
//                 return res.status(401).send({
//                     success:false,
//                     message:"Auth Failed"
//                 })
//             }
//         })
//     }catch(err){
//         console.log(err);
//         return res.status(401).send({
//             success:false,
//             err,
//             message:"Auth Failed"
//         })
//     }
// }