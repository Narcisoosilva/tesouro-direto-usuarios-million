const mongoose = require('mongoose');

const uri = process.env.MONGO_URI ? process.env.MONGO_URI : 'mongodb://localhost/millionTesouroDireto';

mongoose.connect(uri,  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
mongoose.Promise = global.Promise;

module.exports = mongoose;