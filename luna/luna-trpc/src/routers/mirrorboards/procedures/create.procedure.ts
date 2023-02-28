import { z } from 'zod';
import { Luna } from "luna-sdk";
import { t } from '../../../trpc';
import { withLuna } from '../../../luna/luna.withLuna.procedure';

const input = z.object({
  isPublic: z.boolean(),
});

const output = z.object({
  mirrorboard: Luna.Mirrorboard,
});

export const create = t.router({
  create: withLuna.input(input).output(output)
    .meta({
      openapi: {
        method: 'POST',
        path: '/luna/mirrorboards/create',
        tags: ['mirrorboards']
      }
    })
    .mutation(async ({ ctx: { luna }, input }) => {
      const mirrorboard = await luna.services.mirrorboards.create(input.isPublic);

      return { mirrorboard }
    })
});
