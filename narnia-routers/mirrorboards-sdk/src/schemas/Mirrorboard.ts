import { Luna } from 'luna-sdk';
import { ObjectId } from 'mongodb';
import { z } from 'zod';

export const Mirrorboard = z.object({
  _id: z.instanceof(ObjectId).or(z.string().transform(val => new ObjectId(val))),
  title: z.string(),
  isPublic: z.boolean(),
  createdBy: Luna.User
});

export type Mirrorboard = z.infer<typeof Mirrorboard>;