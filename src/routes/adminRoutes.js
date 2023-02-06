const { Router } = require('express');
const toolController = require('../controllers/toolController');
const databaseController = require('../controllers/databaseController');
const devlanguageController = require('../controllers/devlanguageController');
const testController = require('../controllers/testController')
const softskillController = require('../controllers/softSkillController')
const adminController = require('../controllers/adminController')
const ContactCompaniesController = require('../controllers/contactCompanyController')
const adminAuth = require('../middleware/adminauth')
const { validateCreateTool, validateUpdateTool, validateCreateDatabase, validateUpdateDatabase, validateCreateDevLanguage, validateUpdateDevLanguage } = require('../validators/adminValidator')

const router = Router();

/* Tools */
router.get('/get-tools', adminAuth, toolController.getAllTools);
router.post('/create-tool', adminAuth, validateCreateTool, toolController.postCreateTool);
router.put('/update-tool', adminAuth, validateUpdateTool, toolController.putUpdateTool);
router.delete('/delete-tool', adminAuth, toolController.deleteDestroyTool);

/* databases */

router.get('/get-database', adminAuth, databaseController.getAllDatabases);
router.post('/create-database', adminAuth, validateCreateDatabase, databaseController.postCreateDatabase);
router.put('/update-database', adminAuth, validateUpdateDatabase, databaseController.putUpdateDatabase);
router.delete('/delete-database', adminAuth, databaseController.deleteDestroyDatabase);

/* dev-languages */

router.get('/get-devlenguages', adminAuth, devlanguageController.getAllDevLanguages);
router.post('/create-devlenguage', adminAuth, validateCreateDevLanguage, devlanguageController.postCreateDevlenguage);
router.put('/update-devlenguage', adminAuth, validateUpdateDevLanguage, devlanguageController.putUpdateDevlenguage);
router.delete('/delete-devlenguage', adminAuth, devlanguageController.deleteDestroyDevlenguage);


/* tests */

router.get('/get-tests', adminAuth, testController.getAllTests)
router.post('/create-test', adminAuth, testController.postCreateTest)
router.put('/update-test', adminAuth, testController.putUpdateTest)
router.delete('/delete-test', adminAuth, testController.deleteDestroyTest)

/*soft-skill */

router.get('/get-softskills', adminAuth, softskillController.getAllSoftSkills)
router.post('/create-softskills', adminAuth, softskillController.postCreateSoftSkills)
router.get('/update-softskills', adminAuth, softskillController.putUpdateSoftSkill)
router.get('/delete-softskills', adminAuth, softskillController.deleteDestroySoftSkill)

/* work profile */
router.get('/get-workprofiles', adminAuth, adminController.getAllWorkProfiles)

/* Companies */

router.get('/get-companies', adminAuth, adminController.getAllContactCompanies)

module.exports = router;