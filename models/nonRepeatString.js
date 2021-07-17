function nonRepeatString (len, collection) {
  let randStr = require('./randomStr')
  let shorten = randStr(len)
  while (collection.includes(shorten)) {
    shorten = randStr(len)
  }
  return shorten
}


module.exports = nonRepeatString