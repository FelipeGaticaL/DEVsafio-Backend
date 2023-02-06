'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      'UserStatuses',
      [
        {
          name: 'active',
        },
        {
          name: 'jobready'
        },
        {
          name: 'disabled'
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('UserStatuses', null, {});
  }
};
