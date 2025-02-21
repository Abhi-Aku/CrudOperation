const mongoose=require('mongoose')
require('dotenv').config()


const db=mongoose.connect('mongodb://127.0.0.1:27017/FULLCRUDOPERATION',{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
  
})
module.exports=db