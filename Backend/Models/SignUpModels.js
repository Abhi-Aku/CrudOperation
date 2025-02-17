const mongoose = require('mongoose');
const SignUpSchema= new mongoose.Schema({
    name: { type: String},
    lastname : { type: String },
    gender : { type: String },
    email : { type: String },
    password : { type: String },
    phone : { type: String },
    address : { type: String },

})
const SignUp = mongoose.model('SignUp', SignUpSchema);
module.exports = SignUp;