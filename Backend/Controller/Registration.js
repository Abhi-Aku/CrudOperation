
const Registration=require('../Models/Registration')

module.exports.registration=async(req,res)=>{
    const{name,lastname,gender,phone,email,password,adderss}=req.body
    try{
        const responce=await  Registration.create({
            name,
            lastname,
            gender,
            phone,
            email,
            password,
            adderss
        });
        res.status(200).json({massage :"registration success" ,responce})
    }catch(err){
        console.log(err)
        res.status(400).json({message:"something went wrong"})

    }
};

module.exports.GetData=async(req,res)=>{
    try{
        const responce=await Registration.find();
        res.status(200).json({massage :"registration success" ,responce})

    }catch(err){
        console.log(err)
        res.status(400).json({message:"something went wrong",err})
    }
};

module.exports.PutData = async (req, res) => {
    const { id } = req.params;
    try {
        const { name, lastname, gender, phone, email, password, address } = req.body;
        const response = await Registration.findByIdAndUpdate(id, { name, lastname, gender, phone, email, password, address });
        
        res.status(200).json({ message: "Update success", response });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: "Something went wrong", err });
    }
};

module.exports.DeleteData = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await Registration.findByIdAndDelete(id);
        res.status(200).json({ message: "Delete success", response });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: "Something went wrong", err });
    }
};
