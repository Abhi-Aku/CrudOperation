const mongoose = require('mongoose');
const { Schema } = mongoose;

const leadsSchema = new Schema({
    name: String,
    email: String,
    password: String,
});

module.exports = mongoose.model('Leads', leadsSchema); // Fixed typo
