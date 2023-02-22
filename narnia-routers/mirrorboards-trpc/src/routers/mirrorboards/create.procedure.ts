import t from "../../trpc";
import { z } from 'zod';
import { Mirrorboards } from 'mirrorboards-sdk'
import { withCurrentUserProtected } from "narnia-trpc-context";

const input = z.object({
  id: z.string(),
});

const output = z.object({
  mirrorboard: Mirrorboards.Mirrorboard
});

export const findOne = t.router({
  findOne: withCurrentUserProtected.input(input).output(output)
    .meta({
      openapi: {
        method: 'GET',
        path: '/mirrorboards/mirrorboards/create',
        protect: true,
        description: 'Create mirrorboard',
        tags: ['mirrorboards']
      }
    })
    .query(async ({ ctx, input }) => {
      return {
        mirrorboard: {
          id: input.id,
          title: 'Mirrorboard!'
        }
      }
    })
});
