import { z } from 'zod';

const envs = z.object({
  VITE_NARNIA_TRPC: z.string()
}).parse({
  VITE_NARNIA_TRPC: import.meta.env.VITE_NARNIA_TRPC
});

export default envs;
