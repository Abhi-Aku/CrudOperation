 const express=require("express");
const {signup,getData,putData,deleteData}=require('../Controllers/SignUpController')
const router = express.Router();
 router.post('/signup',signup);
 router.get('/signup',getData);
 router.put('/signup/:id',putData);
 router.delete('/signup/:id',deleteData);

 module .exports=router;