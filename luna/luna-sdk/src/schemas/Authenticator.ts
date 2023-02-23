import { ObjectId } from 'mongodb';
import { z } from 'zod';

export const Authenticator = z.object({
  provider: z.enum(['openAI', 'facebook', 'twitter']),
  token: z.string()
});

export type Authenticator = z.infer<typeof Authenticator>;
