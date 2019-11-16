const router = require('express').Router()
const userController = require('../../controllers/api/users')

router.get('/users', userController.getUsers)

module.exports = router
