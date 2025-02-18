const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()

const app = express();
app.use(cors()); 
app.use(bodyParser.json());
const port = 4000;

const db = require('./db'); 

const kubhi=require('./Routers/SignUpRouter')
app.use('/Data',kubhi)


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
