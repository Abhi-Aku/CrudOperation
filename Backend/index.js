const express=require('express');
const app=express();

app.use(express.json())
app.use(express.urlencoded({extended:true}));

 require('dotenv').config();
 port=process.env.PORT || 4000;

 require('./db')

const Data=require('./Routers/Registration');

 app.use('/apiPost',Data)

 app.listen(port,()=>{
    console.log(`server is running on port http://localhost:${port}`);
 })