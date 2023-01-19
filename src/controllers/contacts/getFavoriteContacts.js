const { Contact } = require('../../models');

const getFavoriteContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;

  const favoriteContactsList = await Contact.find(
    { owner, favorite: { $eq: 'true' } },
    '-__v -createdAt -updatedAt',
    {
      skip,
      limit,
    }
  ).populate('owner', 'email');
  res.json({ favoriteContactsList, code: 200, status: 'success' });
};

module.exports = getFavoriteContacts;
