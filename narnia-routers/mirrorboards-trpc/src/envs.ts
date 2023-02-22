import { z } from 'zod';

export const envs = z.object({
  MIRRORBOARDS_MONGODB_URI: z.string().trim().min(1),
  MIRRORBOARDS_MONGODB_DB_NAME: z.string().trim().min(1),
}).parse({
  MIRRORBOARDS_MONGODB_URI: process.env.MIRRORBOARDS_MONGODB_URI,
  MIRRORBOARDS_MONGODB_DB_NAME: process.env.MIRRORBOARDS_MONGODB_DB_NAME,
});
