const { Contact } = require('../../models');

const getContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;

  const contactsList = await Contact.find({ owner }, '-__v -createdAt -updatedAt', {
    skip,
    limit,
  }).populate('owner', 'email');
  res.json({ contactsList, code: 200, status: 'success' });
};

module.exports = getContacts;
