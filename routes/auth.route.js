const {Router} = require('express')
const router = new Router()
const authController = require('../controllers/auth.controller')

router.post('/signup', authController.signup)

module.exports = router