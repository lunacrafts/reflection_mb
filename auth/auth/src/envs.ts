import dotenv from 'dotenv'
import { z } from 'zod';

dotenv.config();

export const envs = z.object({
  MONGODB_URI: z.string().trim().min(1),
}).parse({
  MONGODB_URI: process.env.MONGODB_URI,
});
