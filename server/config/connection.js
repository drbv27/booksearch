const mongoose = require('mongoose');

mongoose.connect(/* process.env.MONGODB_URI */'mongodb+srv://drbv27:Sofia.0910@cluster0.1xobesi.mongodb.net/books' || 'mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
