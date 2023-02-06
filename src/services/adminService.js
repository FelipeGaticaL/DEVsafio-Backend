const { WorkProfiles, Users, sequelize } = require('../models')

const getAllWorkProfiles = async () => {
    const data = await sequelize.query(
        `SELECT W.id, "firstName", "lastName", "email", W."createdAt", W."updatedAt", "phoneNumber", "city", "country", "gender", "employmentStatusCurrent", "stack", "educationalLevel", "educationStatusCurrent", "englishLevel", "additionalToolsComment", "cvUrl", "linkedinUrl", "githubUrl", "portfolioUrl", "featuredProject", "devExperience", "idealWorkComment", "workAvailability", "availabilityStatus", "currentSalary", "relocationOption", "visa","userId" FROM "Users" as U FULL OUTER JOIN "WorkProfiles" as W ON U.id = "userId" WHERE "roleId"= 1 AND "statusId" = 2;`
    )
    return data[0]
}

const getAllContactCompanies = async () => {
    const data = await await sequelize.query(`SELECT 
    "ContactCompanies"."id",
    "ContactCompanies"."companyName",
    "ContactCompanies"."name",
    "ContactCompanies"."lastName",
    "ContactCompanies"."email",
    "ContactCompanies"."phone",
    "JoinConcatConcatCompanies"."name" AS "search",
    "ContactCompanies"."doubts"
    FROM "ContactCompanies" 
    INNER JOIN (SELECT "JoinCompanyWorkAreasId"."id", STRING_AGG("JoinCompanyWorkAreasId"."name", ', ') AS "name" 
    FROM (SELECT "CompanyWorkAreas"."companyId" AS "id", "WorkAreas"."name" AS "name"
     FROM "CompanyWorkAreas" INNER JOIN "WorkAreas"  ON "CompanyWorkAreas"."workAreaId" = "WorkAreas"."id") 
          AS "JoinCompanyWorkAreasId" GROUP BY "id")
     AS "JoinConcatConcatCompanies"
     ON "ContactCompanies"."id" = "JoinConcatConcatCompanies"."id"`)
    return data[0];
  };

module.exports = { getAllWorkProfiles, getAllContactCompanies }
