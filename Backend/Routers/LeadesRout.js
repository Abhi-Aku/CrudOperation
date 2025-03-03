const express = require("express");
const router=express.Router();
const Leads = require("../Controllers/LeadsCont");

router.post('/api',Leads.LeadsPost);
module.exports = router;