import { z } from 'zod';
import { Luna } from "luna-sdk";
import { t } from '../../../trpc';
import { withCurrentUserProtected } from '../../../luna/middlewares/withCurrentUserProtected.middleware';
import { TRPCError } from '@trpc/server';

const input = z.object({
  id: z.string(),
  isPromoted: z.boolean(),
});

const output = z.object({
  mirrorboard: Luna.Mirrorboard,
});

export const promote = t.router({
  promote: t.procedure.use(withCurrentUserProtected).input(input).output(output)
    .meta({
      openapi: {
        method: 'POST',
        path: '/luna/mirrorboards/promote',
        tags: ['mirrorboards']
      }
    })
    .mutation(async ({ ctx: { luna, currentUser }, input }) => {
      const mirrorboard = await luna.services.mirrorboards.update(input.id, input.isPromoted, currentUser);

      if (!mirrorboard) {
        throw new TRPCError({
          code: 'NOT_FOUND'
        });
      }

      return { mirrorboard };
    })
});
