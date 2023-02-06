'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

     return await queryInterface.bulkInsert(
      'WorkProfileDatabases',
      [
        {
          databaseId: 2,
          level: 1,
          workProfileId: 7,
        },
        {
          databaseId: 1,
          level: 2,
          workProfileId: 8,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('WorkProfileDatabases', null, {});
  }
};
