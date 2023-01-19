const express = require('express');
const { validateBody, authenticate } = require('../../middlewares');
const { contactsSchemas } = require('../../models');
const { contactsCtrl } = require('../../controllers');
const { asyncWrapper } = require('../../helpers');

const contactsRouter = express.Router();

contactsRouter.get('/', authenticate, asyncWrapper(contactsCtrl.getContacts));

contactsRouter.get('/?favorite=true', authenticate, asyncWrapper(contactsCtrl.getFavoriteContacts));

contactsRouter.get('/:contactId', authenticate, asyncWrapper(contactsCtrl.getOneContactById));

contactsRouter.post(
  '/',
  authenticate,
  validateBody(contactsSchemas.addContactSchema),
  asyncWrapper(contactsCtrl.addNewContact)
);

contactsRouter.delete('/:contactId', authenticate, asyncWrapper(contactsCtrl.deleteContact));

contactsRouter.put(
  '/:contactId',
  authenticate,
  validateBody(contactsSchemas.addContactSchema),
  asyncWrapper(contactsCtrl.changeContact)
);

contactsRouter.patch(
  '/:contactId/favorite',
  authenticate,
  validateBody(contactsSchemas.updateFavoriteSchema),
  asyncWrapper(contactsCtrl.updateFavorite)
);

module.exports = contactsRouter;
