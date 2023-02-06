const { Router } = require('express');
const ContactCompanyController = require('../controllers/contactCompanyController');
const { validateContactCompany } = require('../validators/validateContactCompany')
const router = Router();

router.post('/', validateContactCompany, ContactCompanyController.createContactCompany);

module.exports = router;
