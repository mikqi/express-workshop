const router = require('express').Router()
const homeController = require('../controllers/home')

router.get('/', homeController.homeView)
router.get('/add', homeController.addView)

module.exports = router
