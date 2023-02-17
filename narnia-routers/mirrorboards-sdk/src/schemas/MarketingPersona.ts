import { z } from 'zod';

export const MarketingPersona = z.object({
  name: z.string(),
  description: z.string()
});

export type MarketingPersona = z.infer<typeof MarketingPersona>;
