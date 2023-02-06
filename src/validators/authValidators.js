const { check } = require('express-validator');
const validateResult = require('./validateResult')

const validateRegister = [
    check("email").exists().withMessage("Email requerido").isEmail().withMessage("Debe ser un email válido"),
    check("password").exists().withMessage("Password requerido").isStrongPassword( { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 0, returnScore: false, pointsPerUnique: 0, pointsPerRepeat: 0, pointsForContainingLower: 0, pointsForContainingUpper: 0, pointsForContainingNumber: 0, pointsForContainingSymbol: 0 } ).withMessage("El password debe tener mínimo 8 caracteres alfanumérica y debe tener 1 mayúscula"),
    check("firstName").exists().withMessage("El nombre es requerido").isAlpha([ 'es-ES' ], {ignore: ' '}).withMessage("El nombre solo debe contener letras").isLength({ min: 2 }).withMessage("El nombre debe contener al menos 2 letras"),
    check("lastName").exists().withMessage("El apellido es requerido").isAlpha([ 'es-ES' ], {ignore: ' '}).withMessage("El apellido solo debe contener letras").isLength({ min: 2 }).withMessage("El apellido debe contener al menos 2 letras"),
    validateResult
]

const validateLogin = [
    check("email").exists().withMessage("Email requerido").isEmail().withMessage("Debe ser un email válido"),
    check("password").exists().withMessage("Password requerido").isStrongPassword( { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 0, returnScore: false, pointsPerUnique: 0, pointsPerRepeat: 0, pointsForContainingLower: 0, pointsForContainingUpper: 0, pointsForContainingNumber: 0, pointsForContainingSymbol: 0 } ).withMessage("El password debe tener mínimo 8 caracteres alfanumérica y debe tener 1 mayúscula"),
    validateResult
]

module.exports = { validateRegister, validateLogin }