const mongoose = require('mongoose')
const MONGO_DB = process.env.MONGO_DB || 'mongodb://localhost/shorten-url'
mongoose.connect(MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

// print Database response
db.on('error', error => {
  console.log(error);
})

db.once('open', () => {
  console.log('MongoDB connected~');
})


module.exports = db