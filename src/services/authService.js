const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userServices = require('./userServices');
const ApiError = require('../helpers/apiError');
const httpStatus = require('http-status');
const nodemailer = require('nodemailer');
const { transporter } = require('../config/configEmailing.js');
const { User, sequelize } = require('../models');

const login = async ({ email, password }) => {
  const user = await userServices.getUserByEmailLogin(email);
  if (!user) {
    throw new ApiError('Credenciales inválidas', httpStatus.FORBIDDEN);
  }

  /* acá se quita el password con el spread operator */
  const { password: userPassword, ...payload } = user;
  /* Comparativa de validación de bcrypt b  */
  const validPassowrd = await bcrypt.compare(password, userPassword);

  if (!validPassowrd) {
    throw new ApiError('Credenciales inválidas', httpStatus.FORBIDDEN);
  }
  const token = jwt.sign(payload, process.env.SECRET, {
    expiresIn: 60 * 60 * 24
  });

  return { user: payload, token };
};

const loginFirebase = async (email) => {
  const user = await userServices.getUserByEmailLogin(email);
  if (!user) {
    throw new ApiError('Credenciales inválidas', httpStatus.FORBIDDEN);
  }
  const { password: userPassword, ...payload } = user;
  const token = jwt.sign(payload, process.env.SECRET, {
    expiresIn: 60 * 60 * 24
  });

  return { user: payload, token };
};

const forgotPassword = async (email, ApiHost) => {
  const user = await userServices.getUserByEmail(email);
  console.log(ApiHost, "hola")
  console.log(email, "hola")

  try {
    if (email !== user.email) {
      throw new ApiError('User not register', httpStatus.NOT_FOUND);
    }
    const payload = {
      email: user.email
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '240s' /* "24hr" */
    });
    /* OJO CON EL LOCAL HOST DEBE SER DINÁMICO */
    const link = `${ApiHost}/restore-password?token=${token}`;

    let info = await transporter.sendMail({
      from: '"Devsafio Soporte" <soporte@devsafio.com>',
      to: email,
      subject: 'Recuperación de contraseña Devsafio',
      html: `
      <h2> Recuperador de contraseña </h2>
      <br>
      <br>
      <b>Estimado ${user.firstName}, </b>
      <p>Por favor haz click sobre el siguiente link para restablecer contraseña: </p>
      <a href="${link}">${link}</a>
      `
    });
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    return {
      message: 'El link para el reset del password se ha enviado al mail'
    };
  } catch (error) {
    throw new ApiError(
      'Error en el proceso de restablecer contraseña',
      httpStatus.UNPROCESSABLE_ENTITY
    );
  }
};

const resetPassword = async ({ token, password, passwordConfirm }) => {
  if (password !== passwordConfirm) {
    throw new ApiError(
      'Contraseñas no coinciden',
      httpStatus.UNPROCESSABLE_ENTITY
    );
  }
  if (!token) {
    throw res.status(401).send('Necesita autorizacion');
  }
  const newPassword = password;

  /* Falta agregar un blacklist */
  try {
    let decoded = jwt.verify(token, process.env.JWT_SECRET);
    let email = decoded.email;
    const userData = await User.findOne({ where: { email }, raw: true });
    if (!userData) {
      throw new ApiError('El email No existe', httpStatus.NOT_FOUND);
    }
    const { password, ...newUserData } = userData;

    const hash = bcrypt.hashSync(newPassword, 10);
    newUserData.password = hash;

    updatePasswordUser(newUserData);

    return { message: 'Contraseña actualizada de manera correcta' };
  } catch (err) {
    throw new ApiError('Token inválido', httpStatus.UNPROCESSABLE_ENTITY);
  }
};

const updatePasswordUser = async (newUserData) => {
  let t1 = await sequelize.transaction();
  try {
    await User.update(
      { password: newUserData.password },
      { where: { id: newUserData.id }, transaction: t1 }
    );
    await t1.commit();
    return { message: 'Los datos se han actualizado con éxito' };
  } catch (error) {
    await t1.rollback();
    throw new ApiError(
      'No se ha posido actualizar el password',
      httpStatus.UNPROCESSABLE_ENTITY
    );
  }
};

const welcomeEmail = async (datos, LocalHost) => {
  

  const user = datos;
  const link = `http://${LocalHost}/dev_logo.png`

  try {
    let info = await transporter.sendMail({
      from: '"Devsafio Soporte" <soporte@devsafio.com>',
      to: user.email,
      subject: 'Bienvenida a DEVsafio',
      html: `
      <h2> Bienvenido a DEVsafio </h2>
      <br>
      <b>Hola!! ${user.firstName}, </b>
      <br> 
      <p class="text-justify">
      Devsafio es una iniciativa que une talento junior Latinoamericano (trainee, bootcamp, entre otros) con mentores senior TI para potenciar su empleabilidad inicial e impactar la industria tecnológica.
      </p>
      <p class="text-justify">
      Si estás buscando empleo como Junior o Trainee (Desarrollo, Diseño UX/UI y Data Science) te dejamos este formulario para que seas parte de distintas ofertas laborales que tenemos junto a importantes empresas en latinoamérica.
      </p>
      <br>
      <b>¿Debo pagar algo por inscribirme y participar?</b>
      <p class="text-justify">
      ¡No! Participar en nuestras ofertas no tiene costo para ti. Una vez seas seleccionado para la contratación, se te hará una oferta remunerada inferior a la de mercado, en pesos chilenos, si vives en Chile o en dólares, si vives fuera de Chile.  Sin embargo, tendrás el beneficio y la garantía de ser apoyado y guiado de forma personalizada por un mentor senior.
      Este programa tiene una duración de 3 meses, posterior a esto tienes la posibilidad de ser contratado directamente por la empresa, con sus distintos beneficios y remuneración acorde al mercado.
      </p>
      <br>
      <p>
      Si quieres saber más de nosotros y nuestras actividades, nos puedes seguir en: https://www.linkedin.com/company/devsafio
      </p>
      <br>
      <p>Muchas gracias por registrarte en Devsafio</p>
      <br>
      <br>    
      <img src="cid:devsafio:unique@devsafio.com"/>
      `,
      attachments: [
        {
          filename: 'dev_logo.png',
          /* OJO CON ESTE LOCALHOST, DEBE SER EL DE VERCEL */
          path: link,
          cid: 'devsafio:unique@devsafio.com'
        }
      ]
    });
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    return {
      message: 'Mensaje de bienvenida enviado al correo'
    };
  } catch (error) {
    throw new ApiError(
      'Error en el proceso de envío de correo de bienvenida',
      httpStatus.UNPROCESSABLE_ENTITY
    );
  }
};

module.exports = {
  login,
  forgotPassword,
  resetPassword,
  loginFirebase,
  welcomeEmail
};
