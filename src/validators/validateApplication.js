const {check} = require('express-validator')
const validateResult = require('./validateResult')

const validateApplicationForm = [
    check("phoneNumber").optional().isMobilePhone().withMessage("El numero de telefono debe ser alfa numerico").isLength({ min: 8 }).withMessage("El numero de telefono debe contener al menos 8 digitos"),
    check("city").optional().isAlpha([ 'es-ES' ], {ignore: ' '}).withMessage("La ciudad debe contener solo letras").isLength({ min: 3 }).withMessage("La ciudad debe tener al menos 3 letras"),
    check("country").optional().isAlpha([ 'es-ES' ], {ignore: ' '}).withMessage("El pais debe contener solo letras").isLength({ min: 3 }).withMessage("El pais debe contener al menos 3 letras"),
    check("gender").optional().isAlpha([ 'es-ES' ], {ignore: ' '}).withMessage("El genero solo debe contener letras").isLength({ min: 3 }).withMessage("El genero debe contener al menos 3 letras"),
    check("employmentStatusCurrent").exists().withMessage("El estado laboral actual es requerido").isString().withMessage("El estado laboral actual debe contener solo letras"),
    check("stack").exists().withMessage("El stack actual es requerido").isString().withMessage("El stack debe contener letras"),
    check("educationalLevel").exists().withMessage("El nivel de educacion es requerido").isString().withMessage("El nivel de educacion debe ser un texto"),
    check("educationStatusCurrent").exists().withMessage("La educacion actual es requerida").isString().isLength({ min: 3 }).withMessage("La educacion actual debe contener al menos 3 letras"),
    check("englishLevel").exists().withMessage("El nivel de ingles es requerido").isString().withMessage("El nivel de inglés debe ser un texto").isLength({ min: 3 }).withMessage("El nivel de ingles debe contener al menos 3 letras"),
    check("additionalToolsComment").optional().isString().withMessage("El comentario adicional debe ser un texto"),
    check("cvUrl").exists().withMessage("El link del CV es requerido").isURL().withMessage("Debe ser una URL válida").isLength({ min: 15 }).withMessage("El link del CV debe contener al menos 15 letras"),
    check("linkedinUrl").exists().withMessage("El link de Linkedin es requerido").isURL().withMessage("Linkedin debe ser una URL válida").isLength({ min: 15 }).withMessage("El link de linkedin debe contener al menos 15 letras"),
    check("githubUrl").exists().withMessage("El link de Github es requerido").isURL().withMessage("Github debe ser una URL válida").isLength({ min: 15 }).withMessage("El link de github debe contener al menos 15 letras"),
    check("portfolioUrl").exists().withMessage("El link de Github es requerido").isURL().withMessage("Portafolio debe ser una URL válida").isLength({ min: 15 }).withMessage("El link del portfolio debe contener al menos 15 letras"),
    check("featuredProject").exists().withMessage("El proyecto destacado es requerido").isString().isLength({ min: 5 }).withMessage("El proyecto destacado debe contener al menos 5 letras"),
    check("devExperience").exists().withMessage("El nivel de experiencia es requerido").isString().withMessage("El nivel de experiencia debe ser un texto"),    
    check("idealWorkComment").exists().withMessage("El comentario de trabajo ideal es requerido").isString().withMessage("El comentario del trabajo ideal debe ser un texto"),
    check("workAvailability").optional("partime","fulltime","freelancer").isString().withMessage("Debes elegir alguna de las opciones en la disponibilidad laboral"),
    check("relocationOption").exists().withMessage("El lugar de localizacion es requerido").isString().withMessage("Relocation option debe ser un texto"),
    check("visa").exists().withMessage("Campo visa de trabajo es requerido").isString().withMessage("Debes escribir con letras en la visa"),
    check("userId").exists().withMessage("Campo userId es requerido").isInt().withMessage("Debes escribir un numero"),
    validateResult
]

module.exports = validateApplicationForm