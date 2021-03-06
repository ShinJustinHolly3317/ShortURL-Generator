/* Global varables */
let newUrl = ''
let newShorten = ''

/* Express */
const express = require('express')
const router = express.Router()

/* module */
/* Random String creator */
const nonRepeatString = require('../../models/nonRepeatString')

/* Schema */
const urlSchema = require('../../models/schema')


// Route: generate url 
router.post('/generate-url', (req, res) => {
  // Get POST data
  const reqUrl = req.body.url
  // Check if randStr exists
  let shortenCollection = []

  // check if url is empty
  if (!reqUrl.length) {
    return res.render('errMess')
  }

  // check repeat
  urlSchema.find()
  .then(urls => {
    urls.forEach(url => {
      shortenCollection.push(url.shorten)
    })
  })
  .then(() => {
    // After collection for repeat check is done
    urlSchema.create({
      href: reqUrl,
      shorten: nonRepeatString(5, shortenCollection)
    })
    .then(urlC => {
      // check if executed on HEROKU or on local
      newShorten = process.env.PORT? 'https://sleepy-fjord-90832.herokuapp.com/' + urlC.shorten : 'localhost:3000/' + urlC.shorten
      newUrl = urlC.href
      // Set cookie for broswer but only with a duration of 60secs
      res.cookie('urlMessage', { newShorten: newShorten, newUrl: newUrl}, { maxAge: 60000 })
      res.redirect('/')
    })
    .catch(err => {
      console.log(err);
    })
  })
})
  
// Route: link to shortened url
router.get('/:shorten', (req, res) => {
  const shorten = req.params.shorten
  urlSchema.find({shorten: shorten}, function (err, docs) {
    if (docs) {
      let originUrl = docs[0].href
      res.redirect(originUrl)
    }
    else {
      console.log(err);
      return
    }
  })
})


module.exports = router