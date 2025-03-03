var jwt = require('jsonwebtoken');
const SignUp = require("../Models/SignUp");

module.exports.SignUpPost = async (req, res) => {
    const { name, lastname, gender, phone, email, password, address } = req.body;
    try {
        const response = await SignUp.create({ name, lastname, gender, phone, email, password, address });
        console.log("Data Save");

        res.status(200).json({ message: "Data Saved", response });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: "Data Not Saved" });
    }
};

module.exports.SignUpGet = async (req, res) => {
    try{
        const response = await SignUp.find();
        res.status(200).json({message:"Data Found",response});

    }catch(err){
        console.log(err);
        res.status(400).json({message:"Data Not Found"});

    }
};

module.exports.SignUpPut = async (req, res) => {
    const { id } = req.params;
    const { name, lastname, gender, phone, email, password, address } = req.body;
    try {
       const  response=await SignUp.findByIdAndUpdate(id, { name, lastname, gender, phone, email, password, address },{new:true});
        res.status(200).json({ message: "Data Updated", response });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: "Data Not Updated" });
    }
};

module.exports.SignUpDelete = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await SignUp.findByIdAndDelete(id);
        res.status(200).json({ message: "Data Deleted", response });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: "Data Not Deleted" });
    }
};
// login api

module.exports.SignUpLogin = async (req, res) => {
    const {email,password} = req.body;
    try{
        const responce=await SignUp.findOne({email});
        if(!responce){
            return res.status(400).json({message:"Data Not Found",responce});
        }
        if(responce.password !==password){
            return res.status(400).json({message:"Incorrect Password",responce});
        }

      const token = jwt.sign({ id: responce._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.status(200).json({message:"Login Successfully",responce,token});

    }catch(err){
        console.log(err);
        res.status(500).json({message:"Server Error",error:err.message});   

    }
};




