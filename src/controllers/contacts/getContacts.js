const { Contact } = require('../../models');

const getContacts = async (req, res) => {
  const contactsList = await Contact.find({}, '-__v');
  res.json({ contactsList, status: 200 });
};

module.exports = getContacts;
