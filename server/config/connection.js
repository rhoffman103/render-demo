require("dotenv").config();
const mongoose = require('mongoose');

// TODO: update localhost mongo database name
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/change_me');

module.exports = mongoose.connection;
