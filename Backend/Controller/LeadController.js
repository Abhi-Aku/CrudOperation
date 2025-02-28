const Lead=require('../Models/Lead')

module.exports.leades=async(req,res)=>{
    const{name,email,password}=req.body;
    try{
        const responce=await Lead.create({
            name,
            email,
            password
        });
        res.status(200).json({massage :"registration success" ,responce})

    }catch(err){
        console.log(err);
        res.status(400).json({message:"something went wrong",err})
        
    }
};