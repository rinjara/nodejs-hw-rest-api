const express = require('express');
const { validateBody, authenticate } = require('../../middlewares');
const { registrationSchemas } = require('../../models');
const { authCtrl } = require('../../controllers');
const { asyncWrapper } = require('../../helpers');

const authRouter = express.Router();

authRouter.post(
  '/register',
  validateBody(registrationSchemas.registerSchema),
  asyncWrapper(authCtrl.register)
);

authRouter.post(
  '/login',
  validateBody(registrationSchemas.loginSchema),
  asyncWrapper(authCtrl.login)
);

authRouter.get('/current', authenticate, asyncWrapper(authCtrl.getCurrent));

authRouter.post('/logout', authenticate, asyncWrapper(authCtrl.logout));

module.exports = authRouter;
