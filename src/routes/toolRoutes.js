const { Router } = require('express');
const toolController = require('../controllers/toolController');

const router = Router();

router.get('/', toolController.getAllTools);

module.exports = router;