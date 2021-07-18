/* Express */
const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  const newShorten = req.cookies.urlMessage.newShorten
  const newUrl = req.cookies.urlMessage.newUrl
  res.render('index', { newShorten, newUrl})
})


module.exports = router