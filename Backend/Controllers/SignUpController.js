const SignUp = require('../Models/SignUpModels');
const {authorize,generateAccessToken}=require('../JwtAuthorization');



const signup = async (req, res) => {
    try {
        const { name, lastname, gender, email, password, phone, address } = req.body;
        const user = await SignUp.create({ name, lastname, gender, email, password, phone, address });
        const paylod={
            user:user._id,
            name:user.name,
        };
        const token=generateAccessToken(paylod);


        res.status(200).json({ message: "Data Sent Successfully", user,token });


        console.log("Data Saved");
        res.status(200).json({ message: "Data Sent Successfully", user });
    } catch (err) {
        console.log("Something went wrong:", err.message);
    }
};
// getData
const getData = async (req, res) => {
    try {
        const users = await SignUp.find();
        res.status(200).json({ message: "Data find Successfully", users });
    }catch(err){
        console.log("Something went wrong:", err);
        res.status(500).json({ message: err.message });
    }
}

//  putData

const putData = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, lastname, gender, email, password, phone, address } = req.body;

        const user = await SignUp.findByIdAndUpdate(
            id, 
            { name, lastname, gender, email, password, phone, address }, 
            { new: true } 
        );

        res.status(200).json({ message: "Data Updated Successfully", user });
    } catch (err) {
        console.log("Something went wrong:", err);
        res.status(404).json({ message: "Data not Updated" }); 
    }
};

const deleteData=async(req,res)=>{
    try {
        const id = req.params.id;
        const user = await SignUp.findByIdAndDelete(id);
        res.status(200).json({ message: "Data Deleted Successfully", user });
    }catch(err){
        console.log("Something went wrong:", err);
        res.status(404).json({ message: "Data not Deleted" });
    }
};

module.exports = {signup,getData,putData,deleteData};
