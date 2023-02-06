const nodemailer = require("nodemailer");

const  transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER_MAIL, 
      pass: process.env.PASSWORD_MAIL_API, 
    },
  });

module.exports = {transporter}