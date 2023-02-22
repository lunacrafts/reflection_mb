import t from "../../trpc";
import { z } from 'zod';
import { Mirrorboards } from 'mirrorboards-sdk'
import { withCurrentUserProtected } from "narnia-trpc-context";

const input = z.object({
  id: z.string().nullish(),
  title: z.string().min(3),
  isPublic: z.boolean().nullish().default(false),
});

const output = z.object({
  mirrorboard: Mirrorboards.Mirrorboard
});

export const create = t.router({
  create: withCurrentUserProtected.input(input).output(output)
    .meta({
      openapi: {
        method: 'POST',
        path: '/mirrorboards/mirrorboards/create',
        protect: true,
        description: 'Create mirrorboard',
        tags: ['mirrorboards']
      }
    })
    .mutation(async ({ ctx, input }) => {
      return {
        mirrorboard: {
          id: input.id + 'optional',
          title: 'Mirrorboard!'
        }
      }
    })
});
