import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import setRoutes from './routes/index.js';
import { errorHandler } from './middlewares/errorHandler.js';
import logger from './utils/logger.js';

const app = express();

// CORS - дозволяємо тільки фронтенд
app.use(
  cors({
    // eslint-disable-next-line no-undef
    origin: ['http://localhost:5173', process.env.FRONTEND_URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

// Middleware
app.use(express.json());

// HTTP request logging via morgan -> write to winston
app.use(
  morgan('combined', {
    stream: {
      write: message => logger.info(message.trim()),
    },
  })
);

// Set up routes
setRoutes(app);

// Error handling middleware
app.use(errorHandler);

export default app;
