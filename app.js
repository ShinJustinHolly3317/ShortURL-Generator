/* Global variable */
const PORT = process.env.PORT || 3000
let newShorten = ''
let newUrl = ''

/* Express */
const express = require('express')
const app = express()

/* Mongoose */
require('./config/mongoose')

/* Schema */
const urlSchema = require('./models/schema')

/* Express Handlebars */
const exphbs = require('express-handlebars')
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs'}))
app.set('view engine', 'hbs')

/* Static files */
app.use(express.static('public'))

/* Body parser */
app.use(express.urlencoded({ extended: true }))

/* Cookie parser */
const cookieParser = require('cookie-parser')
app.use(cookieParser())

/* Routes */
const routes = require('./routes')
app.use(routes)

// app.get('/', (req, res) => {
//   console.log(newShorten);
//   res.render('index', { newUrl, newShorten })
// })

// app.post('/generate-url', (req, res) => {
//   // Get POST data
//   const reqUrl = req.body.url
//   console.log(reqUrl);
//   // Check if randStr exists
//   let shortenCollection = []

//   // check repeat
//   urlSchema.find()
//   .then(urls => {
//     urls.forEach(url => {
//       shortenCollection.push(url.shorten)
//     })
//     console.log(`collection after push: ${shortenCollection}`);
//   })
//   .then(() => {
//     // After collection for repeat check is done
//     urlSchema.create({
//       href: reqUrl,
//       shorten: nonRepeatString(5, shortenCollection)
//     })
//     .then(urlC => {
//       console.log(urlC);
//       newShorten = 'https://arcane-harbor-5566.herokuapp.com/' + urlC.shorten 
//       newUrl = urlC.href
//       res.redirect('/')
//     })
//     .catch(err => {
//       console.log(err);
//     })
//   })
// })
  
app.listen(PORT, () => {
  console.log(`This server is running on ${PORT}`);
})