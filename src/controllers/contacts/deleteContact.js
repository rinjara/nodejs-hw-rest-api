const { HttpError } = require('../../helpers');
const { Contact } = require('../../models');

const deleteContact = async (req, res) => {
  const result = await Contact.findByIdAndRemove(req.params.contactId);
  if (!result) {
    throw HttpError(404);
  }
  res.json({ message: 'contact deleted', code: 200, status: 'success' });
};

module.exports = deleteContact;
