const { Router } = require('express');
const testController = require('../controllers/testController')

const router = Router();

router.get('/', testController.getAllTests);

module.exports = router;