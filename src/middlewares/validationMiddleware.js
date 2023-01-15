// const Joi = require('joi');

const { HttpError } = require('../helpers');

// const addContactValidation = (req, res, next) => {
//   const schema = Joi.object({
//     name: Joi.string().alphanum().min(3).max(30).required(),
//     email: Joi.string()
//       .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
//       .required(),
//     phone: Joi.number().integer().min(7).required(),
//     favorite: Joi.boolean(),
//   });

//   const validatedResult = schema.validate(req.body);
//   if (validatedResult.error) {
//     return res.status(400).json({ message: validatedResult.error.details });
//   }
//   next();
// };

// const addFavoriteValidation = (req, res, next) => {
//   const schema = Joi.object({
//     favorite: Joi.boolean().required(),
//   });

//   const validatedResult = schema.validate(req.body);
//   if (validatedResult.error) {
//     return res.status(400).json({ message: validatedResult.error.details });
//   }
//   next();
// };

const validateBody = schema => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };

  return func;
};

module.exports = {
  validateBody,
};
