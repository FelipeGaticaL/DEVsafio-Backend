'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('DataBases', [
      {
        name: 'Oracle'
      },
      {
        name: 'Cassandra'
      },
      {
        name: 'SQLite'
      },
      {
        name: 'Redis'
      },
      {
        name: 'MongoDB'
      },
      {
        name: 'PostgreSQL'
      },
      {
        name: 'MySQL'
      },
      {
        name: 'Firebase'
      },
      {
        name: 'MariaDB'
      },
      {
        name: 'Microsoft SQL Server'
      },
      {
        name: 'JQuery'
      },
      {
        name: 'React.js'
      },
      {
        name: 'Spring'
      },
      {
        name: 'Angular.js'
      },
      {
        name: 'Vue.js'
      },
      {
        name: 'Laravel'
      },
      {
        name: 'Django'
      },
      {
        name: 'Ruby on Rails'
      },
      {
        name: 'ASP.NET'
      },
      {
        name: 'Flask'
      },
      {
        name: 'Express.js'
      },
      {
        name: 'FastAPI'
      },
      {
        name: '.NET'
      },
      {
        name: 'Node.js'
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('DataBases', null, {});
    };
  }
};
