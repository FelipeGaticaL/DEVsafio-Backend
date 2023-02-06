require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieSession = require('cookie-session');
const routes = require('./src/routes/');
const errorHandler = require('./src/middleware/ErrorHandler'); 
//variable para configurar la variable swaggerSpec
const path = require("path");
//swagger
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const { config } = require('dotenv');
const swaggerSpec = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Devsafio API",
        version: "1.0.0"
      },
      servers: [
        {
          url: "http://localhost:3001/api"
        }
      ]
    },
    apis: [`${path.join(__dirname, "./src/routes/*.js")}`]
}




const app = express();

// cors config
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  allowedHeaders: 'Content-Type,Authorization'
};



// middleware para las cookies
app.use(
  cookieSession({
    name: 'session',
    keys: 'clave',
    // opciones de las cookies
    maxAge: 24 * 60 * 60 * 1000 // duracion de 24 horas
  })
);

app.use(cors(corsOptions));

//Apertura imagenes URL
app.use(express.static(path.join(__dirname, 'public')))

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Ruta donde se muestra la documentación con swagger
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))

app.use('/api', routes);
/* http://localhost:3001/api/users */


app.get('/', function (_req, res) {
  res.send({
    name: 'Devsafio API',
    environment: process.env.NODE_ENV
  });
});

app.get('/ping', function (_req, res) {
  res.send('pong');
});


app.use(errorHandler); 

/* istanbul ignore if */
//*This means: Run app.listen(8080) only if you are running the file
if (!module.parent) {
  const server = app.listen(process.env.PORT,"0.0.0.0", function () {
    const port = server.address().port;
    console.log('Example app listening at http://localhost:%s', port);
  });
}

module.exports = app;
