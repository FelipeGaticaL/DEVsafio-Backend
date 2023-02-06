const { sequelize } = require('../models');
const path = require('path');

const getExcelWorkProfiles = async () => {
  try {
    const allData = await sequelize.query(
      `
    SELECT 
      "Users"."id" AS "Usuario id",
      "Users"."firstName" AS "Nombre",
      "Users"."lastName" AS "Apellido",
      "Users"."email" AS "Email",
      "JoinRoleUser"."name" AS "Rol",
      "JoinStatusUser"."name" AS "Estado",
      "WorkProfiles"."phoneNumber" AS "Teléfono", 
      "WorkProfiles"."city" AS "Ciudad", 
      "WorkProfiles"."country" AS "País", 
      "WorkProfiles"."gender" AS "Género", 
      "WorkProfiles"."employmentStatusCurrent" AS "Trabajo Actual", 
      "WorkProfiles"."stack" AS "Stack", 
      "WorkProfiles"."educationalLevel" AS "Nivel educación", 
      "WorkProfiles"."educationStatusCurrent" AS "Estatus Actual Educación", 
      "WorkProfiles"."englishLevel" AS "Nivel inglés", 
      "WorkProfiles"."additionalToolsComment" AS "Comentario Adicional", 
      "WorkProfiles"."cvUrl" AS "CV URL", 
      "WorkProfiles"."linkedinUrl" AS "Linkedin", 
      "WorkProfiles"."githubUrl" AS "Github", 
      "WorkProfiles"."portfolioUrl" AS "Portafolio URL", 
      "WorkProfiles"."featuredProject" AS "Características Proyecto", 
      "WorkProfiles"."devExperience"  AS "Exp Desarrollador",
      "WorkProfiles"."idealWorkComment" AS "Trabajo Ideal", 
      "WorkProfiles"."workAvailability" AS "Disponibilidad Laboral", 
      "WorkProfiles"."relocationOption" AS "Relocación", 
      "WorkProfiles"."visa" AS "Visado",
      "JoinConcatDevLanguage"."name" AS "Lenguajes",
      "JoinConcatDatabases"."name" AS "Databases",
      "JoinConcatTools"."name" AS "Herramientas",
      "JoinConcatSoftSkills"."name" AS "Habilidades Blandas",
      to_char("Users"."createdAt", 'DD-MM-YYYY') AS "Fecha Agregado",
      to_char("Users"."updatedAt", 'DD-MM-YYYY') AS "Fecha Actualización"
      FROM "WorkProfiles"
      INNER JOIN "Users" ON "WorkProfiles"."id" = "Users"."id"
      INNER JOIN (SELECT "Users"."id", "Roles"."name" FROM "Users" INNER JOIN "Roles" ON "Roles"."id" = "Users"."roleId" ) AS "JoinRoleUser" 
      ON "WorkProfiles"."id" = "JoinRoleUser"."id"
      INNER JOIN (SELECT  "Users"."id","UserStatuses"."name" FROM "Users" INNER JOIN "UserStatuses" ON "UserStatuses"."id" = "Users"."roleId" ) AS "JoinStatusUser" 
      ON "WorkProfiles"."id" = "JoinStatusUser"."id"
      INNER JOIN (SELECT "JoinDevLanguagesIdUser"."id" ,STRING_AGG("JoinDevLanguagesIdUser"."name", ', ') AS "name"
      FROM ( SELECT "WorkProfileDevLanguages"."workProfileId" AS "id", "DevLanguages"."name"  
      FROM "WorkProfileDevLanguages" INNER JOIN "DevLanguages"  ON "WorkProfileDevLanguages"."devLanguageId" = "DevLanguages"."id"
      ) AS "JoinDevLanguagesIdUser" GROUP BY "id") AS "JoinConcatDevLanguage"
      ON "WorkProfiles"."id" = "JoinConcatDevLanguage"."id"
      INNER JOIN (SELECT "JoinDatabasesIdUser"."id" ,STRING_AGG("JoinDatabasesIdUser"."name", ', ') AS "name"
      FROM ( SELECT "WorkProfileDatabases"."workProfileId" AS "id", "DataBases"."name"  
      FROM "WorkProfileDatabases" INNER JOIN "DataBases"  ON "WorkProfileDatabases"."databaseId" = "DataBases"."id"
      ) AS "JoinDatabasesIdUser" GROUP BY "id") AS "JoinConcatDatabases"
      ON "WorkProfiles"."id" = "JoinConcatDatabases"."id"
      INNER JOIN (SELECT "JoinToolIdUser"."id" ,STRING_AGG("JoinToolIdUser"."name", ', ') AS "name"
      FROM ( SELECT "WorkProfileTools"."workProfileId" AS "id", "Tools"."name"  
      FROM "WorkProfileTools" INNER JOIN "Tools"  ON "WorkProfileTools"."toolsId" = "Tools"."id"
      ) AS "JoinToolIdUser" GROUP BY "id") AS "JoinConcatTools"
      ON "WorkProfiles"."id" = "JoinConcatTools"."id"
      INNER JOIN (SELECT "JoinSoftSkillsIdUser"."id" ,STRING_AGG("JoinSoftSkillsIdUser"."name", ', ') AS "name"
      FROM ( SELECT "WorkProfileSoftSkills"."workProfileId" AS "id", "SoftSkills"."name"  
      FROM "WorkProfileSoftSkills" INNER JOIN "SoftSkills"  ON "WorkProfileSoftSkills"."softSkillsId" = "SoftSkills"."id"
      ) AS "JoinSoftSkillsIdUser" GROUP BY "id") AS "JoinConcatSoftSkills"
      ON "WorkProfiles"."id" = "JoinConcatSoftSkills"."id"
  
    `,
      { nest: true }
    );
    const workSheetColumnNames = Object.keys( allData[0] );
    const workSheetValues = allData.map((e, i) => {
      return Object.values( allData[i] );
    });

    return { workSheetValues, workSheetColumnNames };
  } catch ( error ) {
    return error;
  }
};
const getExcelContactCompanies = async () => {
  try {
    const allData = await sequelize.query(
      `
      SELECT 
      "ContactCompanies"."companyName" AS "Empresa",
      "ContactCompanies"."name" AS "Nombre",
      "ContactCompanies"."lastName" AS "Apellido",
      "ContactCompanies"."email" AS "Email",
      "ContactCompanies"."phone" AS "Teléfono",
      "JoinConcatConcatCompanies"."name" AS "Área de Busqueda",
      "ContactCompanies"."doubts" AS "Dudas/Comentarios"
      FROM "ContactCompanies" 
      INNER JOIN (SELECT "JoinCompanyWorkAreasId"."id", STRING_AGG("JoinCompanyWorkAreasId"."name", ',') AS "name" 
      FROM (SELECT "CompanyWorkAreas"."companyId" AS "id", "WorkAreas"."name" AS "name"
       FROM "CompanyWorkAreas" INNER JOIN "WorkAreas"  ON "CompanyWorkAreas"."workAreaId" = "WorkAreas"."id") 
            AS "JoinCompanyWorkAreasId" GROUP BY "id")
       AS "JoinConcatConcatCompanies"
       ON "ContactCompanies"."id" = "JoinConcatConcatCompanies"."id"
  
    `,
      { nest: true }
    );
    const workSheetColumnNames = Object.keys(allData[0]);
    const workSheetValues = allData.map((e, i) => {
      return Object.values(allData[i]);
    });

    return { workSheetValues, workSheetColumnNames };
  } catch ( error ) {
    return error;
  }
};

module.exports = {
  getExcelWorkProfiles, getExcelContactCompanies
};
