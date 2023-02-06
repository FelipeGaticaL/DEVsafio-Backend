const { Router } = require('express');
const databasesController = require('../controllers/databaseController');
const router = Router();

router.get('/', databasesController.getAllDatabases);

module.exports = router;