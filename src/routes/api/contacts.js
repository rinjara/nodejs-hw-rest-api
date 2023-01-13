const express = require('express');
const validation = require('../../middlewares');

const { ctrl } = require('../../controllers');

const { asyncWrapper } = require('../../helpers');

const contactsRouter = express.Router();

contactsRouter.get('/', asyncWrapper(ctrl.getContacts));

contactsRouter.get('/:contactId', asyncWrapper(ctrl.getOneContactById));

contactsRouter.post('/', validation.addContactValidation, asyncWrapper(ctrl.addNewContact));

contactsRouter.delete('/:contactId', asyncWrapper(ctrl.deleteContact));

contactsRouter.put(
  '/:contactId',
  validation.addContactValidation,
  asyncWrapper(ctrl.changeContact)
);

contactsRouter.patch(
  '/:contactId/favorite',
  validation.addFavoriteValidation,
  asyncWrapper(ctrl.updateFavorite)
);

module.exports = contactsRouter;
