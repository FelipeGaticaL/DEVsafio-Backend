'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    return await queryInterface.bulkInsert(
      'UserTests',
      [
        {
          testId: 1,
          userId: 7,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('UserTests', null, {});
  }
};
