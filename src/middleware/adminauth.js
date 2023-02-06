const { ROLES } = require('../config/config')

const verifyAdminRole = ( req, res, next ) => {

    const admin = req.user.roleId

    if( admin === ROLES.ADMIN ) {
        next()
    }else{
        return res.status(401).send( 'El usuario no es administrador' )
    }
}

module.exports = verifyAdminRole