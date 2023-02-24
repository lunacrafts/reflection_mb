import { z } from 'zod';

export const JwtPayload = z.object({
  _id: z.string(),
  email: z.string().email(),
});

export type JwtPayload = z.infer<typeof JwtPayload>;
