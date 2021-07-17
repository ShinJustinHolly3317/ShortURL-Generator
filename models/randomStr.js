const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const upperAlpha = alphabet.toUpperCase()
const nums = '0123456789'
const bunch = alphabet + upperAlpha + nums


// functions
function randomStr (len) {
  let randStr = ''
  for (let i = 0; i < len; i++) {
    let randIndex = Math.floor(Math.random() * bunch.length)
    randStr += bunch[randIndex]
  }
  return randStr
}

module.exports = randomStr