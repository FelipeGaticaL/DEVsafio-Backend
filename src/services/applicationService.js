const { WorkProfiles, EducationExperience, sequelize } = require('../models')

const getApplicant = async ( id ) => {
    let arrayData =[], data = '', workprofileId
    data = await WorkProfiles.findOne( { where: { userId: id }, raw: true } )
    workprofileId = data['id']
    arrayData.push( data )

    data = await EducationExperience.findAll( { where: { workProfileId: data['id'] }, order: [ ["id", "ASC"] ], raw: true } )
    arrayData.push( data )

    data = await sequelize.query(
        `select * from "DevLanguages" as D INNER JOIN "WorkProfileDevLanguages" as W ON D.id = "devLanguageId" WHERE "workProfileId" = ${workprofileId};`
    )
    arrayData.push( data[0] )

    data = await sequelize.query(
        `select * from "DataBases" as D INNER JOIN "WorkProfileDatabases" as W ON D.id = "databaseId" WHERE "workProfileId" = ${workprofileId};`
    )
    arrayData.push( data[0] )

    data = await sequelize.query(
        `select * from "Tools" as T INNER JOIN "WorkProfileTools" as W ON T.id = "toolsId" WHERE "workProfileId" = ${workprofileId};`
    )
    arrayData.push( data[0] )

    data = await sequelize.query(
        `select * from "SoftSkills" as S INNER JOIN "WorkProfileSoftSkills" as W ON S.id = "softSkillsId" WHERE "workProfileId" = ${workprofileId};`
    )
    arrayData.push( data[0] )

    return arrayData
}

module.exports = { getApplicant }