import { ObjectId } from 'mongodb';
import { z } from 'zod';

export const User = z.object({
  _id: z.string(),
  email: z.string().email(),
});

export type User = z.infer<typeof User>;
