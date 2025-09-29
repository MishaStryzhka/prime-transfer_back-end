/* eslint-disable no-undef */
export const requireApiKey = (req, res, next) => {
  const apiKey = req.get('x-api-key') || req.headers['x-api-key'];
  if (!process.env.API_KEY) {
    return res.status(500).json({ message: 'API_KEY not set in environment' });
  }
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(403).json({ message: 'Forbidden: Invalid API Key' });
  }

  console.log('qwe');
  return next();
};
