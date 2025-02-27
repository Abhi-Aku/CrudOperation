const mongoose=require('mongoose')

module.exports.db=mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Db is connected successfully")
}).catch((err)=>{
    console.log("db not connected",err)

});