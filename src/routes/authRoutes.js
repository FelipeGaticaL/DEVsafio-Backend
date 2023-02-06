const { Router } = require('express');
const router = Router();
const authController = require('../controllers/authController')
const { validateRegister, validateLogin } = require('../validators/authValidators')

router.post('/register', validateRegister, authController.createUser)
router.post('/login', validateLogin, authController.login)
router.post('/login-firebase', authController.loginFirebase)

router.post('/reset-password' , authController.resetPassword)
router.post('/forgot-password', authController.forgotpassword)
router.post('/welcome-email', authController.welcomeEmail)

module.exports = router;