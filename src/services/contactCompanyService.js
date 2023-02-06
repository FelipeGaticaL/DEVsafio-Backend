const { ContactCompany, CompanyWorkArea } = require('../models');

const createContactCompany = async ( company ) => {
  try {
    const { workAreaId: work_id, ...payload } = company;
    /* BULK sobre ContactCompany */
    ContactCompany.bulkCreate( [payload] )
    /* Obteniendo el ID */
    let email = company.email;
    const companyData = await ContactCompany.findOne({
      where: { email },
      raw: true
    });

    let optionContact = company.workAreaId;
    let companyId = companyData.id;
    let workAreaCompany = [];
    for (i = 0; i < optionContact.length; i++) {
      workAreaCompany.push({ 'companyId': companyId, 'workAreaId': optionContact[i]});
    }
       /* BULK sobre CompanyWorkArea */
    CompanyWorkArea.bulkCreate( workAreaCompany )
  } catch ( e ) {
    console.log( 'Error :' + e );
  }
};

module.exports = {
  createContactCompany
};


