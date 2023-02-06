const {check} = require('express-validator')
const validateResult = require('./validateResult')

const validateContactCompany = [
    check("name").exists().withMessage("El nombre es requerido").isAlpha([ 'es-ES' ], {ignore: ' '}).withMessage("El nombre solo debe contener letras").isLength({ min: 2 }).withMessage("El nombre debe contener al menos 2 letras"),
    check("lastName").exists().withMessage("El apellido es requerido").isAlpha([ 'es-ES' ], {ignore: ' '}).withMessage("El nombre solo debe contener letras").isLength({ min: 2 }).withMessage("El nombre debe contener al menos 2 letras"),
    check("email").exists().withMessage("Email requerido").isEmail().withMessage("Debe ser un email válido"),
    check("phone").exists().withMessage("El numero de telefono debe ser alfa numerico").isLength({ min: 8 }).withMessage("El numero de telefono debe contener al menos 8 digitos"),
    check("companyName").exists().withMessage("El nombre de la empresa es requerido").isLength({ min: 2 }).withMessage("El nombre debe contener al menos 2 letras"),
    //check("workAreaId").exists().withMessage("Debe seleccionar al menos una opción"),
    validateResult
]

module.exports = { validateContactCompany }