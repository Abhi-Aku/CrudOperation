const express = require('express');
const router = express.Router();
const registration = require('../Controller/Registration');





router.post('/registration', registration.registration);
router.get('/registration', registration.GetData);
router.put('/registration/:id', registration.PutData);
router.delete('/registration/:id', registration.DeleteData);
// login routes
router.post('/login', registration.login);
module.exports = router;