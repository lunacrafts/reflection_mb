import { z } from 'zod';

export const envs = z.object({
  MONGODB_URI: z.string().trim().min(1),
  MONGODB_DB_NAME: z.string().trim().min(1),
  JWT_SECRET_KEY: z.string(),
  JWT_EXPIRES_IN: z.string().or(z.number())
}).parse({
  MONGODB_URI: process.env.MONGODB_URI,
  MONGODB_DB_NAME: process.env.MONGODB_DB_NAME,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN
});
