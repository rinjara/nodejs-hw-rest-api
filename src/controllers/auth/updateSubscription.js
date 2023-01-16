const { User } = require('../../models');
const { HttpError } = require('../../helpers');

const updateSubscription = async (req, res) => {
  const { subscription: sentSub } = req.body;

  if (sentSub !== 'starter' && sentSub !== 'pro' && sentSub !== 'business') {
    throw HttpError(401, `Subscription must be one of: 'starter', 'pro', 'business'`);
  }

  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { subscription: sentSub });
  res.status(201).json({ message: `Subscription successfully updated to: ${sentSub}` });
};

module.exports = updateSubscription;
