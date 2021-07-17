const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/shorten-url', { useNewUrlParser: true, useUnifiedTopology: true })

const dbRes = mongoose.connection

// print Database response
dbRes.on('error', error => {
  console.log(error);
})

dbRes.once('open', () => {
  console.log('MongoDB connected~');
})