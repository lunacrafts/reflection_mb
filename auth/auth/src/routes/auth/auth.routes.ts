import express from 'express';
import { env } from '../../envs';

const router = express.Router();

router.get('/me', (req, res) => {
  res.json(env);
});

export default router;
