const { Router } = require('express');
const router = Router();

// middlwares
const auth = require('../middleware/auth');

router.use('/auth', require('./authRoutes'));
router.use('/users', auth, require('./userRoutes'));
router.use('/applicant', auth, require('./applicationRoute'));
router.use('/soft-skills', require('./softSkillRoutes'));
router.use('/tools', require('./toolRoutes'));
router.use('/dev-languages', require('./devlanguageRoutes'));
router.use('/databases', require('./databaseRoute'));
router.use('/contact-company', require('./contactCompany'));
router.use('/work-area-company', require('./workAreaCompanyRoute'));
router.use('/export-excel', auth, require('./exportExcelRoutes'));
router.use('/admin', auth, require('./adminRoutes'));
router.use('/tests', auth ,require('./testRoutes'))

module.exports = router;
