const jwt=require('jsonwebtoken');
const Authorization=(req,res,next)=>{
     const token=req.headers.authorization.split(" ")[1];
     if(!token) return res.status(400).json({message:"token not found"})
   try{
    const decoded=jwt.verify(token,process.env.SECRET_KEY);
    req.user=decoded;
    next();
   }catch(err){
    res.status(400).json({message:"token not valid"})
   }
};
// generate token
const generateAccessToken = (user) => {
    return jwt.sign({user}, process.env.SECRET_KEY, {expiresIn: '1h'});
} 

module.exports={Authorization,generateAccessToken} 