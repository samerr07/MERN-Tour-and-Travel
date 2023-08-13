const { verifyToken } = require("./authMiddleware");

exports.verifyUser = async(req,res,next)=>{
    try{
        verifyToken(req,res,next,()=>{
            if(req.user.id === req.params.id || req.user.role === "admin"){
                next();
            } else {
                return res.status(401).send({
                    success:false,
                    message:"Auth Failed4"
                })
            }
        })
    }catch(err){
        console.log(err);
        return res.status(401).send({
            success:false,
            err,
            message:"Auth Failed3"
        })
    }
}