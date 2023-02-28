import { z } from 'zod';
import { User } from './User';

export const Mirrorboard = z.object({
  id: z.string(),
  title: z.string(),
  isPublic: z.boolean()
});

export type Mirrorboard = z.infer<typeof Mirrorboard>;
