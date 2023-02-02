const express = require('express');
const { validateBody, authenticate, upload } = require('../../middlewares');
const { registrationSchemas } = require('../../models');
const { authCtrl } = require('../../controllers');
const { asyncWrapper } = require('../../helpers');

const authRouter = express.Router();

authRouter.post(
  '/register',
  validateBody(registrationSchemas.registerSchema),
  asyncWrapper(authCtrl.register)
);

authRouter.get('/verify/:verificationToken', asyncWrapper(authCtrl.getEmailVerification));

authRouter.post('/verify', asyncWrapper(authCtrl.verifyEmailResend));

authRouter.post(
  '/login',
  validateBody(registrationSchemas.loginSchema),
  asyncWrapper(authCtrl.login)
);

authRouter.get('/current', authenticate, asyncWrapper(authCtrl.getCurrent));

authRouter.post('/logout', authenticate, asyncWrapper(authCtrl.logout));

authRouter.patch('/', authenticate, asyncWrapper(authCtrl.updateSubscription));

authRouter.patch(
  '/avatars',
  authenticate,
  upload.single('avatar'),
  asyncWrapper(authCtrl.updateAvatar)
);

module.exports = authRouter;
