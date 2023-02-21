import { z } from 'zod';

export const Mirrorboard = z.object({
  id: z.string(),
  title: z.string(),
});

export type Mirrorboard = z.infer<typeof Mirrorboard>;
