const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlSchema = new Schema({
  href: {
    type: String,
    require: true
  },
  shorten: {
    type: String,
    require: true
  }
})


module.exports = mongoose.model('url-shorten', urlSchema)