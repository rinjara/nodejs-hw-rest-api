const { HttpError } = require('../../helpers');
const { Contact } = require('../../models');

const updateFavorite = async (req, res) => {
  if (!req.body) {
    throw HttpError(400, 'missing field favorite');
  }
  const updatedContact = await Contact.findByIdAndUpdate(req.params.contactId, req.body, {
    new: true,
  });
  if (!updatedContact) {
    throw HttpError(404);
  }
  res.json({ updatedContact, status: 200 });
};

module.exports = updateFavorite;
