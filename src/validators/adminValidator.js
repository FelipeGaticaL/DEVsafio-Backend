const { check } = require('express-validator');
const validateResult = require('./validateResult')

const validateCreateTool = [
    check("name").exists().withMessage("tool es requerido").isAlphanumeric([ 'es-ES' ], {ignore: ' '}).withMessage("tool debe ser alfa numérico"),
    validateResult
]

const validateUpdateTool = [
    check("id").exists().withMessage("tool es requerido").isInt().withMessage("tool debe ser un número entero"),
    check("name").exists().withMessage("tool es requerido").isAlphanumeric([ 'es-ES' ], {ignore: ' '}).withMessage("tool debe ser alfa numérico"),
    validateResult
]

const validateCreateDatabase = [
    check("name").exists().withMessage("database es requerido").isAlphanumeric([ 'es-ES' ], {ignore: ' '}).withMessage("database debe ser alfa numérico"),
    validateResult
]

const validateUpdateDatabase = [
    check("id").exists().withMessage("database es requerido").isInt().withMessage("database debe ser un número entero"),
    check("name").exists().withMessage("database es requerido").isAlphanumeric([ 'es-ES' ], {ignore: ' '}).withMessage("database debe ser alfa numérico"),
    validateResult
]

const validateCreateDevLanguage = [
    check("name").exists().withMessage("devlenguage es requerido").isAlphanumeric([ 'es-ES' ], {ignore: ' '}).withMessage("devlenguage debe ser alfa numérico"),
    validateResult
]

const validateUpdateDevLanguage = [
    check("id").exists().withMessage("devlenguage es requerido").isInt().withMessage("devlenguage debe ser un número entero"),
    check("name").exists().withMessage("devlenguage es requerido").isAlphanumeric([ 'es-ES' ], {ignore: ' '}).withMessage("devlenguage debe ser alfa numérico"),
    validateResult
]

module.exports = { validateCreateTool, validateUpdateTool, validateCreateDatabase, validateUpdateDatabase, validateCreateDevLanguage, validateUpdateDevLanguage }