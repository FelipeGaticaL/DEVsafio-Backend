'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    return await queryInterface.bulkInsert(
      'TestDevlanguages',
      [
        {
          testId: 1,
          devLanguageId: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('TestDevlanguages', null, {});
  }
};
