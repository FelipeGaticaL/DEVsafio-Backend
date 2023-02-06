'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Tools', [
      {
        name: 'Github'
      },
      {
        name: 'Adobe Illustrator'
      }, 
      {
        name: 'Adobe Photoshop'
      },
      {
        name: 'Adobe XD'
      },
      {
        name: 'AWS'
      },
      {
        name: 'Docker'
      },
      {
        name: 'Figma'
      },
      {
        name: 'GIT'
      },
      {
        name: 'Google Analytics'
      },
      {
        name: 'Google Cloud Plataform'
      },
      {
        name: 'Google Data Studio'
      },
      {
        name: 'Invision'
      },
      {
        name: 'InVision studio'
      },
      {
        name: 'Jira'
      },
      {
        name: 'Kubernetes'
      },
      {
        name: 'Marvel'
      },
      {
        name: 'Microsoft Excel'
      },
      {
        name: 'Microsoft Azure'
      },
      {
        name: 'Miro'
      },
      {
        name: 'Power BI'
      },
      {
        name: 'Proto.io'
      },
      {
        name: 'Qlik'
      },
      {
        name: 'Sketch'
      },
      {
        name: 'SPSS'
      },
      {
        name: 'Tableau'
      },
      {
        name: 'Unity 3D'
      },
      {
        name: 'Unreal Engine'
      },
      {
        name: 'Zepelin'
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Tools', null, {});
  }
};
