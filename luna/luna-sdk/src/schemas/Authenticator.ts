import { ObjectId } from 'mongodb';
import { z } from 'zod';

export const Authenticator = z.object({
  _id: z.instanceof(ObjectId).or(z.string().transform(val => new ObjectId(val))),
  provider: z.enum(['openAI', 'facebook', 'twitter']),
  token: z.string()
});

export type Authenticator = z.infer<typeof Authenticator>;
