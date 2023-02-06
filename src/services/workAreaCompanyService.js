const { WorkArea } = require('../models');

const getAllWorkAreaCompany = async () => {
  const allWorkArea = await WorkArea.findAll( { order: [ ["id", "ASC"] ] } );
  return allWorkArea;
};

module.exports = {
    getAllWorkAreaCompany
};
