const { Contact } = require('../../models');

const changeContact = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: 'missing fields' });
  }

  const updatedContact = await Contact.findByIdAndUpdate(req.params.contactId, req.body, {
    new: true,
  });
  if (!updatedContact) {
    return res.status(404).json({ message: 'Not found' });
  }
  res.json({ updatedContact, status: 200 });
};

module.exports = changeContact;
