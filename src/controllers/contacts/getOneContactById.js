const { HttpError } = require('../../helpers');
const { Contact } = require('../../models');

const getOneContactById = async (req, res) => {
  const searchedContact = await Contact.findById(
    req.params.contactId,
    '-__v -createdAt -updatedAt'
  );

  if (!searchedContact) {
    throw HttpError(404);
  }

  res.json({ searchedContact, status: 200 });
};

module.exports = getOneContactById;
