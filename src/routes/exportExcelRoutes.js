const { Router } = require('express');
const exportExcelController = require('../controllers/exportExcelController');
const authAdmin = require('../middleware/adminauth');

const router = Router();

router.get('/excelworkprofiles', authAdmin, exportExcelController.getExcelWorkProfiles); 
router.get('/excelcontactcompanies', authAdmin, exportExcelController.getExcelContactCompanies); 

module.exports = router;