'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

     return await queryInterface.bulkInsert(
      'WorkProfileDevLanguages',
      [
        {
          devLanguageId: 1,
          level: 2,
          workProfileId: 7
        },
        {
          devLanguageId: 2,
          level: 1,
          workProfileId: 7
        },
        {
          devLanguageId: 4,
          level: 2,
          workProfileId: 8
        },
        {
          devLanguageId: 5,
          level: 1,
          workProfileId: 8
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('WorkProfileDatabases', null, {});
  }
};
