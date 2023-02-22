import { ObjectId } from 'mongodb';
import { z } from 'zod';

export const User = z.object({
  _id: z.instanceof(ObjectId).or(z.string().transform(val => new ObjectId(val))),
  email: z.string().email(),
});

export type User = z.infer<typeof User>;
