import HttpError from '../helpers/HttpError.js';

export const validateBody = schema => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    next(HttpError(400, error.message));
  } else {
    next();
  }
};
