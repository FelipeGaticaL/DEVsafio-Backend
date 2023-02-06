const { Router } = require('express');
const devLanguagesController = require('../controllers/devlanguageController');

const router = Router();

router.get('/', devLanguagesController.getAllDevLanguages);

module.exports = router;