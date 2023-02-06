const jwt = require('jsonwebtoken');

const auth = ( req, res, next ) =>
{
  const token = req.headers.authorization || req.headers.token;

  if ( !token ) res.status(401).send( 'Necesita autorizacion' );

  jwt.verify(token, process.env.SECRET, (err, decoded) =>
  {
    if ( err )
    {
      res.status(401).send( 'No tiene autorizacion' );
    }
  
    req.user = decoded;
    next();
  });
};

module.exports = auth;