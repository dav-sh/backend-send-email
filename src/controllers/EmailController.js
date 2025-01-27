const transporter = require("../config/smtp");
const emailSchema = require("../schemas/emailSchema");

const sendEmail = async (req, res) => {
  const { email, subject, text, name } = req.body;

  try {
    emailSchema.parse({ email, subject, text, name });
    let content = `${text} By: ${name}  Email: ${email}`;
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject,
      text: content,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Mail sent successfully" });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res.status(500).json({ message: "There was an error, mail not sent" });
  }
};

module.exports = { sendEmail };
