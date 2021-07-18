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

// Listen to server
app.listen(PORT, () => {
  console.log(`This server is running on ${PORT}`);
})