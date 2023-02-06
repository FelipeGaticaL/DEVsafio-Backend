'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    return await queryInterface.bulkInsert(
      'TestDatabases',
      [
        {
          testId: 2,
          databaseId: 14,
        },
        {
          testId: 3,
          databaseId: 12,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('TestDatabases', null, {});
  }
};
