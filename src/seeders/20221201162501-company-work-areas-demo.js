'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    return await queryInterface.bulkInsert(
      'CompanyWorkAreas',
      [
        {
          companyId: 4,
          workAreaId: 1,
        },
        {
          companyId: 4,
          workAreaId: 2,
        },
        {
          companyId: 5,
          workAreaId: 3,
        },
        {
          companyId: 5,
          workAreaId: 4,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('CompanyWorkAreas', null, {});
  }
};
