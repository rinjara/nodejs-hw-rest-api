const logout = require('./logout');
const register = require('./register');
const login = require('./login');
const getCurrent = require('./getCurrent');
const updateSubscription = require('./updateSubscription');
const updateAvatar = require('./updateAvatar');
const getEmailVerification = require('./getEmailVerification');
const verifyEmailResend = require('./verifyEmailResend');

module.exports = {
  register,
  getEmailVerification,
  login,
  getCurrent,
  logout,
  updateSubscription,
  updateAvatar,
  verifyEmailResend,
};
