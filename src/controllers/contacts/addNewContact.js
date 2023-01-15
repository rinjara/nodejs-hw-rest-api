const { Contact } = require('../../models');

const addNewContact = async (req, res) => {
  const { _id: owner } = req.user;

  const newContact = await Contact.create({ ...req.body, owner });
  res.status(201).json({ newContact, status: 201 });
};

module.exports = addNewContact;
