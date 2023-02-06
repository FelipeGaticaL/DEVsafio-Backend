const httpStatus = require('http-status');
const bcrypt = require("bcryptjs");
const userServices = require("../services/userServices");
const authService = require("../services/authService");
const ApiError = require('../helpers/apiError');

//Método para crear un usuario
const createUser = async ( req, res, next ) => {
    try {
        //Validar los datos
        const user = req.body
        //Variables para encryptar la password
        const salt = 10
        //Encriptar la password
        const hash = bcrypt.hashSync(user.password, salt)
        user.password = hash
        await userServices.createUser( user )
        res.status(httpStatus.OK).send({
            message: `Registro exitoso para Usuario ${user.firstName}`
        })
    } catch ( err ) {
        next( err );
    }
}

//Método que valida el login
const login = async ( req, res, next ) => {
    try {
        const { email, password } = req.body;
        const data = await authService.login({ email, password })
        return res.status(httpStatus.OK).send( data )
    } catch ( err ) {
        next( err );
    }
}

//Método que valida el login
const loginFirebase= async ( req, res, next ) => {
    const { email } = req.body.user
    try {
        const data = await authService.loginFirebase( email )
        return res.status(httpStatus.OK).send( data )
    } catch ( err ) {
        next( err );
    }
}

//Restablecer contraseña
const resetPassword = async ( req,res,next ) => {
    const token = req.body.token
    const password = req.body.values.password
    const passwordConfirm = req.body.values.passwordConfirm
    try {
        const data = await authService.resetPassword({ token, password, passwordConfirm })
        return res.status(httpStatus.OK).send( data )
    } catch ( err ) {
        next( err );
    }
}

const forgotpassword = async ( req, res, next ) => {  
    const { email } = req.body
    const ApiHost = req.get('origin')
    try {
        const data = await authService.forgotPassword( email, ApiHost )
        return res.status(httpStatus.OK).send( data )
    } catch ( err ) {
        next( err );
    }
}
const welcomeEmail = async ( req, res, next ) => {  
    
    const datos = req.body
    const LocalHost = req.get('host')
    try {
        await authService.welcomeEmail( datos, LocalHost)      
        res.status(httpStatus.OK).send({
            message: `Email enviado con éxtio a ${datos.email}`
        })
    } catch ( err ) {
        next( err );
    }
}

module.exports = { createUser, login , resetPassword, forgotpassword, loginFirebase, welcomeEmail }
