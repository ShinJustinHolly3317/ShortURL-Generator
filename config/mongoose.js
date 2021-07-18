const mongoose = require('mongoose')
const MONGO_DB = process.env.MONGO_DB || 'mongodb://localhost/shorten-url'
mongoose.connect(MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })

const dbRes = mongoose.connection

// print Database response
dbRes.on('error', error => {
  console.log(error);
})

dbRes.once('open', () => {
  console.log('MongoDB connected~');
})