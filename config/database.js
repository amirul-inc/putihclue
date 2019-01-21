const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost/fullapi';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

module.exports = mongoose;


