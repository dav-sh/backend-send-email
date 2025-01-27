const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_FROM,
    pass: process.env.SMTP_PASS,
  },
  debug: true, // Habilita el modo de depuración
  logger: true, // Muestra logs en la consola
});

module.exports = transporter;
