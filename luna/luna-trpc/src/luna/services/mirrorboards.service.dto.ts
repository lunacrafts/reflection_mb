import { z } from 'zod';
import { ulid } from 'ulid';

export const MirrorboardsServiceDTO = {
  create: {
    input: z.object({
      id: z.string().nullish().default(() => ulid()),
      title: z.string(),
      isPublic: z.boolean(),
    }),
  }
}
