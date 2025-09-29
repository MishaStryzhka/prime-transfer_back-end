import Joi from 'joi';

export const isVerifiedPhoneSchema = Joi.object({
  phone: Joi.string()
    .pattern(/^\+?[1-9]\d{1,14}$/)
    .required(),
});
