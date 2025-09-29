import express from 'express';
import { ctrl } from '../../controllers/index.js';
import { isVerifiedPhoneSchema } from '../../schemas/index.js';
import { requireApiKey, validateBody } from '../../middlewares/index.js';

const router = express.Router();

router.get(
  '/isVerifiPhone',
  requireApiKey,
  validateBody(isVerifiedPhoneSchema),
  ctrl.isVerifiPhone
);
router.post('/confirmPhone', ctrl.confirmPhone);

export default router;
