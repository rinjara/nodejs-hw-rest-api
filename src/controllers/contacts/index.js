const getContacts = require('./getContacts');
const getOneContactById = require('./getOneContactById');
const addNewContact = require('./addNewContact');
const deleteContact = require('./deleteContact');
const changeContact = require('./changeContact');
const updateFavorite = require('./updateFavorite');

module.exports = {
  getContacts,
  getOneContactById,
  addNewContact,
  deleteContact,
  changeContact,
  updateFavorite,
};
