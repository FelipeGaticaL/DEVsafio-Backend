'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

     return await queryInterface.bulkInsert(
      'WorkProfileSoftSkills',
      [
        {
          softSkillsId: 1,
          workProfileId: 7,
        },
        {
          softSkillsId: 3,
          workProfileId: 7,
        },
        {
          softSkillsId: 1,
          workProfileId: 8,
        },
        {
          softSkillsId: 4,
          workProfileId: 8,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('WorkProfileSoftSkills', null, {});
  }
};
