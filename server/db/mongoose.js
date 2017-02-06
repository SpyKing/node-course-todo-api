var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp'); // connect to the local mongodb database or the heroku database

module.exports = {mongoose};
