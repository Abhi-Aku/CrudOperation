const express = require('express');
const router = express.Router();
const lead = require('../Controller/LeadController');

router.post('/lead', lead.leades);

module.exports = router;