const nodemailer = require('nodemailer');
require('dotenv').config();
const { META_PASSWORD, BASE_URL } = process.env;

async function sendEmail(userEmail, verificationToken) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.meta.ua',
    port: 465,
    secure: true,
    auth: {
      user: 'rinjara@meta.ua',
      pass: META_PASSWORD,
    },
  });

  const output = `
  <h1>Please, verify your email by clicking on link below!</h1>
 <a target="_blank" href="${BASE_URL}/api/users/verify/${verificationToken}">Click here</a>
    `;

  await transporter.sendMail({
    from: 'rinjara@meta.ua',
    to: userEmail,
    subject: 'Verify email',
    html: output,
  });

  console.log('Verification email sent: successfully');
}

module.exports = sendEmail;
