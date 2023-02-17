import { z } from 'zod';

export const Account = z.object({
  id: z.string(),
  email: z.string().email(),
});

export type Account = z.infer<typeof Account>;
