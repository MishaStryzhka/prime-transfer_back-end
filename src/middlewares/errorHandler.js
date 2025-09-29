import logger from '../utils/logger.js';

export const errorHandler = (err, req, res, next) => {
  // Якщо заголовки вже відправлені, передаємо далі
  if (res && res.headersSent) {
    return next(err);
  }

  logger.error(err); // включає стек завдяки форматуванню winston

  const payload = {
    message: 'An unexpected error occurred.',
    // eslint-disable-next-line no-undef
    error: process.env.NODE_ENV === 'development' ? err : {},
  };

  if (
    res &&
    typeof res.status === 'function' &&
    typeof res.json === 'function'
  ) {
    return res.status(500).json(payload);
  }

  return next(err);
};
