'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

   return await queryInterface.bulkInsert(
      'ContactCompanies',
      [
        {
          id: 4,
          name: 'Bill',
          lastName: 'Gates',
          email: 'BGates@microsoft.com',
          phone: '7895487324',
          companyName: 'Microsoft',
          doubts: 'Necesito a un developer full stack de Apple',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 5,
          name: 'Elon',
          lastName: 'Musk',
          email: 'emusk@spacex.com',
          phone: '8895887828',
          companyName: 'Space X',
          doubts: 'Necesito un develop de la Nasa',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('ContactCompanies', null, {});
  }
};
