'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('DevLanguages', [
      {
        name: 'Python'
      },
      {
        name: 'JavaScript'
      },
      {
        name: 'HTML/CSS'
      },
      {
        name: 'Java'
      },
      {
        name: 'PHP'
      },
      {
        name: 'Ruby'
      },
      {
        name: 'Scala, Perl y/o Go'
      },
      {
        name: 'C/C++'
      },
      {
        name: 'Kotlin'
      },
      {
        name: 'Swift'
      },
      {
        name: 'C#'
      },
      {
        name: 'TypeScript'
      },
      {
        name: 'Assembly'
      },
      {
        name: 'R'
      },
      {
        name: 'Go'
      },
      {
        name: 'Bash/Shell'
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('DevLanguages', null, {});
  }
};
