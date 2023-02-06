'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

     return await queryInterface.bulkInsert(
      'WorkProfileTools',
      [
        {
          toolsId: 2,
          level: 2,
          workProfileId: 7  
        },
        {
          toolsId: 3,
          level: 4,
          workProfileId: 8  
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('WorkProfileTools', null, {});
  }
};
