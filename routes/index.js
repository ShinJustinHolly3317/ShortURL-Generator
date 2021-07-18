/* Express */
const express = require('express')
const router = express.Router()

/* Routes */
const home = require('./modules/home')
const crud = require('./modules/crud')

router.use('/', home, crud)



module.exports = router