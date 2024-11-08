const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Connection to MongoDB
mongoose.connect('mongodb://localhost:27017/User')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// Define a Schema  
const UserSchema = new mongoose.Schema({
    Email: {
        type: String,
        required: true,
        unique: true,
    },
    Name: {
        type: String,
        required: true,
    },
    Password: {
        type: String, 
        required: true,
    },
    Status: {
        type: String,
        required: true,
    }
});

// Create collection name
const User = mongoose.model('UserData', UserSchema); 

// POST   create a user
app.post('/UserData', async (req, res) => {
    try {
        const { Email, Name, Password, Status } = req.body; 

        if (!Email || !Name || !Password || !Status) {
            return res.status(400).json({ message: "All fields are required" });
        }
 const userData = new User({
            Email,
            Name,
            Password, 
            Status
        }); 

        await userData.save(); 
        res.status(201).json({ message: 'User created successfully', userData });
    } catch (error) {
        console.error(error); 

        if (error.code === 11000) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
});

 // get Data 
   app.get('/GetData',async (req,res)=>{
    
   try {
    const FindData= await User.find()
    if(!FindData){
        return res.status(400).json({ message: "No data found" });
    }else{
        res.status(200).json({ message: 'Data found', FindData });
    }
   } catch (error) {
    res.status(500).json({ message: 'Error find user', error: error.message });

   }
    
   })



//    put operation 
// PUT update user data by ID
app.put('/UserData/:id', async (req, res) => {
    const { id } = req.params;
    const { Email, Name, Password, Status } = req.body;

    try {
        // Update user data
        const updatedData = await User.findByIdAndUpdate(
            id,
            { Email, Name, Password, Status },
            { new: true, runValidators: true } // Options to return the updated document and run schema validation
        );

        if (!updatedData) {
            return res.status(404).json({ message: "No data found with this ID" });
        }

        res.status(200).json({ message: 'User updated successfully', updatedData });
    } catch (error) {
        console.error(error);

        // Check for unique email constraint error
        if (error.code === 11000) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        res.status(500).json({ message: 'Error updating user', error: error.message });
    }
});
   //delete Daata
   app.delete('/DataDelete/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedData = await User.findByIdAndDelete(id);
        if (!deletedData) {
            return res.status(404).json({ message: "No data found with this ID" });
        }
        res.status(200).json({ message: 'Data deleted successfully', deletedData });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
});
const PORT =  3000;
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost${PORT}`);
});
