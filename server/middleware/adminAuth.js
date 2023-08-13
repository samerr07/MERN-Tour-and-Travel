const { verifyToken } = require("./authMiddleware");

exports.verifyAdmin = async(req,res,next)=>{
    try{
        verifyToken(req,res,next,()=>{
            if(req.user.role === "admin"){
                next();
            } else {
                return res.status(401).send({
                    success:false,
                    message:"Auth Failed1"
                })
            }
        })
    }catch(err){
        console.log(err);
        return res.status(401).send({
            success:false,
            err,
            message:"Auth Failed2"
        })
    }
}