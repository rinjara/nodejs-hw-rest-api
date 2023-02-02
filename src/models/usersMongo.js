const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');

const Joi = require('joi');

const subscriptionList = ['starter', 'pro', 'business'];

const usersSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, 'Set password for user'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    subscription: {
      type: String,
      enum: subscriptionList,
      default: 'starter',
    },
    token: String,
    avatarURL: String,
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, 'Verify token is required'],
    },
  },
  { versionKey: false, timestamps: true }
);

usersSchema.post('save', handleMongooseError);

const registerSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  subscription: Joi.string().valid(...subscriptionList),
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  subscription: Joi.string().valid(...subscriptionList),
});

const registrationSchemas = {
  registerSchema,
  loginSchema,
};

const User = model('user', usersSchema);

module.exports = { User, registrationSchemas };
