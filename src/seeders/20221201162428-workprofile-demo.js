'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

     return await queryInterface.bulkInsert(
      'WorkProfiles',
      [
        {
          id: 7,
          phoneNumber: "+56965930736",
          city: "Santiago",
          country: "Chile",
          gender: "Masculino",
          employmentStatusCurrent: "Sin Empleo",
          stack: "full stack",
          educationalLevel: "universitaria",
          educationStatusCurrent: "Bootcamp",
          englishLevel: "No Level",
          additionalToolsComment: "NestJS",
          cvUrl: "http://www.cvUrlAlexis.net",
          linkedinUrl: "http://www.linkedinUrlAlexis.net",
          githubUrl: "http://www.githubUrlAlexis.net",
          portfolioUrl: "http://www.portfolioUrlAlexis.net",
          featuredProject: "web para vender productos",
          devExperience: "sin experiencia",
          idealWorkComment: "No lo tengo claro aún",
          workAvailability: "fulltime, partime",
          relocationOption: "Trabajar desde Francia",
          visa: "Inglesa, Chilena",
          userId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 8,
          phoneNumber: "+56978952897",
          city: "Lisboa",
          country: "Portugal",
          gender: "Masculino",
          employmentStatusCurrent: "Empleado",
          stack: "full stack",
          educationalLevel: "universitaria",
          educationStatusCurrent: "Universitaria",
          englishLevel: "Avanzado",
          additionalToolsComment: "WebPack",
          cvUrl: "http://www.cvUrlCristiano.net",
          linkedinUrl: "http://www.linkedinUrlCristiano.net",
          githubUrl: "http://www.githubUrlCristiano.net",
          portfolioUrl: "http://www.portfolioUrlCristiano.net",
          featuredProject: "Ser el mejor jugador",
          devExperience: "Con experiencia",
          idealWorkComment: "Donde pueda brillar",
          workAvailability: "fulltime, partime",
          relocationOption: "Trabjo desde cualquier lugar",
          visa: "Mundial",
          userId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Users', null, {});
  }
};
