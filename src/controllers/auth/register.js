const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');

const { User } = require('../../models');
const { HttpError } = require('../../helpers');

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, 'Email in use');
  }
  const avatarURL = gravatar.url(email);

  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ ...req.body, password: hashPassword, avatarURL });
  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: 'starter',
    },
  });
  console.log('Register Completed');
};

module.exports = register;
