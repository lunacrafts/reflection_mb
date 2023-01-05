import { z } from 'zod';

export const env = z.object({
  VITE_NARNIA_TRPC: z.string()
}).parse({
  VITE_NARNIA_TRPC: import.meta.env.VITE_NARNIA_TRPC
});
