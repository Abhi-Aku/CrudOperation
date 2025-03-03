const Leades = require("../Models/Leads");
module.exports.LeadsPost = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const response = await Leades.create({name ,email,password});
        res.status(200).json({ message: "Data Saved", response });
        
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: "Data Not Found" });
    }
};