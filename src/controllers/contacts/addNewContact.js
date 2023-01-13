const { Contact } = require('../../models');

const addNewContact = async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ message: 'missing required name field' });
  }

  const newContact = await Contact.create(req.body);
  res.status(201).json({ newContact, status: 201 });
};

module.exports = addNewContact;
