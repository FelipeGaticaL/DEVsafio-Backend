const { check, body } = require('express-validator')
const validateResult = require('./validateResult')

const validateCv = [
    check("cvUrl").exists().withMessage("El link del CV es requerido").isURL().withMessage("Debe ser una URL válida").isLength({ min: 10 }).withMessage("El link del CV debe contener al menos 10 caracteres"),
    validateResult
]

const validatePersonalData = [
    check("firstName").exists().withMessage("El nombre es requerido").isAlpha([ 'es-ES' ], {ignore: ' '}).withMessage("El nombre solo debe contener letras").isLength({ min: 2 }).withMessage("El nombre debe contener al menos 2 letras"),
    check("lastName").exists().withMessage("El apellido es requerido").isAlpha([ 'es-ES' ], {ignore: ' '}).withMessage("El apellido solo debe contener letras").isLength({ min: 2 }).withMessage("El apellido debe contener al menos 2 letras"),
    check("email").exists().withMessage("Email requerido").isEmail().withMessage("Debe ser un email válido"),
    check("phoneNumber").exists().withMessage("El teléfono es requerido").isMobilePhone().withMessage("El numero de telefono debe ser alfa numerico").isLength({ min: 8 }).withMessage("El numero de telefono debe contener al menos 8 digitos"),
    check("city").exists().withMessage("La ciudad es requerida").isAlpha([ 'es-ES' ], {ignore: ' '}).withMessage("La ciudad debe contener solo letras").isLength({ min: 3 }).withMessage("La ciudad debe tener al menos 3 letras"),
    check("linkedinUrl").exists().withMessage("El link de Linkedin es requerido").isURL().withMessage("Debe ser una URL válida").isLength({ min: 15 }).withMessage("El link de linkedin debe contener al menos 15 letras"),
    check("githubUrl").exists().withMessage("El link de Github es requerido").isURL().withMessage("Debe ser una URL válida").isLength({ min: 15 }).withMessage("El link de github debe contener al menos 15 letras"),
    validateResult
]

const validateWorkExperience = [
    check("englishLevel").exists().withMessage("El nivel de ingles es requerido").isString().withMessage("El nivel de inglés debe ser un texto").isLength({ min: 3 }).withMessage("El nivel de ingles debe contener al menos 3 letras"),
    check("devExperience").exists().withMessage("El nivel de experiencia es requerido").isString().withMessage("El nivel de experiencia debe ser un texto"),
    validateResult
]

const validateAvailability = [
    check("workAvailability").exists().withMessage("La disponibilidad de trabajo es requerida").isString().withMessage("La disponibilidad de trabajo debe ser un texto"),
    check("availabilityStatus").exists().withMessage("El estado de la disponibilidad es requerido").isString().withMessage("El estado de la disponibilidad debe ser un texto"),
    validateResult
]

const validateStackSalary = [
    check("stack").exists().withMessage("El stack actual es requerido").isString().withMessage("El stack debe contener letras"),
    check("currentSalary").exists().withMessage("El salario actual es requerido").isString().withMessage("El salario debe contener letras"),
    validateResult
]

const validateEducation = [
    check("name").exists().withMessage("El nombre es requerido").isString().withMessage("El nombre debe contener letras"),
    check("instituteName").exists().withMessage("El nombre del instituto es requerido").isString().withMessage("El nombre del instituto debe contener letras"),
    check("startMonth").exists().withMessage("El mes inicial es requerido").isString().withMessage("El mes inicial debe contener letras"),
    check("endMonth").exists().withMessage("El mes de término es requerido").isString().withMessage("El mes de término debe contener letras"),
    check("startYear").exists().withMessage("El año inicial es requerido").isInt().withMessage("El año inicial debe ser un numero"),
    check("endYear").exists().withMessage("El año de término es requerido").isInt().withMessage("El año de término debe ser un numero"),
    validateResult
]

const validateEditDevLanguages = [
    body().isArray(),
    body("*.devLanguageId").exists().withMessage("devLanguageId es requerido").isInt().withMessage("devLanguageId debe ser un numero"),
    body("*.level").exists().withMessage("level es requerido").isInt({ min: 1, max: 3 }).withMessage("level debe ser entre 1 y 3"),
    validateResult
]

const validateEditDatabases = [
    body().isArray(),
    body("*.databaseId").exists().withMessage("devLanguageId es requerido").isInt().withMessage("devLanguageId debe ser un numero"),
    body("*.level").exists().withMessage("level es requerido").isInt({ min: 1, max: 3 }).withMessage("level debe ser entre 1 y 3"),
    validateResult
]

const validateEditTools = [
    body().isArray(),
    body("*.toolsId").exists().withMessage("devLanguageId es requerido").isInt().withMessage("devLanguageId debe ser un numero"),
    body("*.level").exists().withMessage("level es requerido").isInt({ min: 1, max: 3 }).withMessage("level debe ser entre 1 y 3"),
    validateResult
]

module.exports = { validatePersonalData, validateWorkExperience, validateAvailability, validateStackSalary, validateEducation, validateCv, validateEditDevLanguages, validateEditDatabases, validateEditTools }