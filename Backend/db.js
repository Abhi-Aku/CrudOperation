const  mongoose = require("mongoose");
require('dotenv').config();

module.exports.db =mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Connected to DB");
})
.catch((err)=>{
    console.log(err);
});