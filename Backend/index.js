const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
require("./db");

const app = express(); 

const port = process.env.PORT || 4000;

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Data = require('./Routers/SignUp');
app.use('/SignUp', Data);

// leads
const Dataleads=require('./Routers/LeadesRout')
app.use('/LeadData',Dataleads);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
