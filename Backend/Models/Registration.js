const mongoose=require('mongoose')

const registrationSchema=new mongoose.Schema({
    name:{type:String,required:true},
    lastname:{type:String,required:true},
    gender :{type:String,required:true},
    phone :{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    adderss :{type:String,required:true},
})

module.exports=mongoose.model('Registration',registrationSchema)