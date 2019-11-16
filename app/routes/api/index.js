const router = require('express').Router()
const usersApi = require('./users')

router.use(usersApi)

module.exports = router
