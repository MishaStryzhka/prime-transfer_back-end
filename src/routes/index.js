import authRouter from './api/auth.js';

const setRoutes = app => {
  app.get('/test', (_req, res) => res.json({ status: 'ok' }));
  app.use('/api/auth', authRouter);
};

export default setRoutes;
