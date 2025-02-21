const jwt=require('jsonwebtoken');

const authorize=(req,res,next)=>{
    const authorizeToken=req.headers['authorization'];
    if(!authorizeToken) return res.status(401).json({message:"Unauthorized"});

    const token=req.headers['authorization'].split(' ')[1];
    if(!token)  return res.status(401).json({message:"Unauthorized"});
     try{
        const decode=jwt.verify(token,process.env.JWT_SECRET);
        req.user=decode;
        next();

     }catch(err){
        return res.status(401).json({message:"Unauthorized"});
     }
}

const generateAccessToken = (user) => {
    return jwt.sign({user}, process.env.JWT_SECRET, {expiresIn: '1h'});



};

module.exports={authorize,generateAccessToken};

    
 