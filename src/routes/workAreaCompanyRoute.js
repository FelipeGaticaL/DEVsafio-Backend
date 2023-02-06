const { Router } = require('express');
const workAreaCompanyController = require('../controllers/workAreaCompanyController');

const router = Router();

router.get('/', workAreaCompanyController.getAllWorkAreaCompany);

module.exports = router;
