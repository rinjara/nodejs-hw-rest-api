const { HttpError } = require('../../helpers');
const { User } = require('../../models');
const sendEmail = require('../../services');

const verifyEmailResend = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    throw HttpError(400, 'missing required field email');
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(404, 'User not found');
  }

  if (user.verify) {
    throw HttpError(400, 'Verification has already been passed');
  }

  await sendEmail(email, user.verificationToken);

  res.json({ message: 'Verification email sent' });
};

module.exports = verifyEmailResend;
