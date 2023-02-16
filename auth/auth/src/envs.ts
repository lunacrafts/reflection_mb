import path from 'path';
import dotenv from 'dotenv'
import { z } from 'zod';

dotenv.config({ path: path.join(process.cwd(), '.env.local'), override: true });
dotenv.config({ path: path.join(process.cwd(), '.env'), override: true });

export const env = z.object({
  MONGODB_URI: z.string().trim().min(1),
}).parse({
  MONGODB_URI: process.env.MONGODB_URI,
});
