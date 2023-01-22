const fs = require('fs/promises');
const path = require('path');
const { User } = require('../../models');
const { HttpError } = require('../../helpers');
const Jimp = require('jimp');

const avatarsDir = path.join(__dirname, '../', '../', '../', 'public', 'avatars');

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, filename } = req.file;

  await Jimp.read(`temp/${filename}`)
    .then(img => {
      return img.resize(250, 250).write(`temp/${filename}`);
    })
    .catch(err => {
      console.log(err);
      throw HttpError(404, err.message);
    });

  const newFileName = `resized_${_id}_${filename}`;

  const resultUpload = path.join(avatarsDir, newFileName);
  await fs.rename(tempUpload, resultUpload);

  const avatarURL = path.join('avatars', newFileName);
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.status(200).json({ avatarURL: `${avatarURL}` });
};

module.exports = updateAvatar;
