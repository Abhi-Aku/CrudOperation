const mongoose=require('mongoose');
const { Schema } = mongoose;

const signUpSchema = new Schema({
    name: String,
    lastname: String,
    gender : String,
    phone: String,
    email: String,
    password: String,
    address: String,
    
    
});

module.exports = mongoose.model('SignUp', signUpSchema);