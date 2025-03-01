const express = require('express'); 

const SignUp = require('../Controllers/SignUp');
const router = express.Router(); 

router.post('/api', SignUp.SignUpPost); 
router.get('/api', SignUp.SignUpGet); 
router.put('/api/:id', SignUp.SignUpPut); 
router.delete('/api/:id', SignUp.SignUpDelete); 

// login
router.post('/api/login', SignUp.SignUpLogin);

module.exports = router;
