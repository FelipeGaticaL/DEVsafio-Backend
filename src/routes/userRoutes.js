const { Router } = require('express');
const userController = require('../controllers/userController');
const { validateCv, validatePersonalData, validateWorkExperience, validateAvailability, validateStackSalary, validateEducation, validateEditDevLanguages, validateEditDatabases, validateEditTools } = require('../validators/perfilValidators')

const router = Router();

router.get('/', userController.getAllUsers);
router.get('/skills', userController.getSkills)
router.get('/email/:email', userController.getUserByEmail);
router.post('/', userController.createUserWorkProfile);
router.put('/personal-data', validatePersonalData, userController.editPersonalData)
router.put('/work-experience', validateWorkExperience, userController.editWorkExperience)
router.put('/availability', validateAvailability, userController.editWorkAvailability)
router.put('/stack-salary', validateStackSalary, userController.editStackSalary)
router.post('/edit-devlanguages',validateEditDevLanguages, userController.editDevlanguages)
router.post('/edit-databases', validateEditDatabases, userController.editDatabases)
router.post('/edit-tools', validateEditTools, userController.editTools)
router.post('/education', validateEducation, userController.createEducation)
router.put('/education', validateEducation, userController.editEducation)
router.delete('/education/:id', userController.deleteEducation)
router.put('/cv', validateCv, userController.cvUrl)

module.exports = router;
