const { Router } = require('express')
const router = Router()
const applicationController = require('../controllers/applicationController')

router.get('/', applicationController.getApplicant)

module.exports = router