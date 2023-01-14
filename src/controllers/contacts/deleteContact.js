const { Contact } = require('../../models');

const deleteContact = async (req, res) => {
  const result = await Contact.findByIdAndRemove(req.params.contactId);
  if (!result) {
    res.status(404).json({ message: 'Not found' });
  }
  res.json({ message: 'contact deleted', status: 200 });
};

module.exports = deleteContact;
