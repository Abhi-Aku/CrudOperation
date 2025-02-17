const SignUp = require('../Models/SignUpModels');

const signup = async (req, res) => {
    try {
        const { name, lastname, gender, email, password, phone, address } = req.body;
        
        const user = await SignUp.create({ name, lastname, gender, email, password, phone, address });

        console.log("Data Saved");
        res.status(200).json({ message: "Data Sent Successfully", user });

    } catch (err) {
        console.log("Something went wrong:", err.message);
        res.status(500).json({ message: err.message });
    }
};

module.exports = signup;
