function nonRepeatString (len, collection) {
  console.log(`Collection is: ${collection[0]}`);
  let randStr = require('./randomStr')
  let shorten = randStr(len)
  while (collection.includes(shorten)) {
    console.log('Shorten repeated!!!');
    shorten = randStr(len)
  }
  return shorten
}


module.exports = nonRepeatString