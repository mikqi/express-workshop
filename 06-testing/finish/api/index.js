const express = require('express')
const usersApi = require('./users')

const router = express.Router()

router.use(usersApi)

module.exports = router
