const { Router } = require('express');
const softSkillController = require('../controllers/softSkillController');

const router = Router();

router.get('/', softSkillController.getAllSoftSkills);

module.exports = router;