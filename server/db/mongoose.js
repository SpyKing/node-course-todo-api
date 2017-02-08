var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// connect to the local mongodb database or the heroku database
mongoose.connect(process.env.MONGODB_URI); 

module.exports = {mongoose};
