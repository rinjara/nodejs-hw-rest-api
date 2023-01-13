const { Contact } = require('../../models');

const getOneContactById = async (req, res) => {
  const searchedContact = await Contact.findById(req.params.contactId, '-__v');

  if (!searchedContact) {
    return res.status(404).json({ message: 'Not found' });
  }

  res.json({ searchedContact, status: 200 });
};

module.exports = getOneContactById;
