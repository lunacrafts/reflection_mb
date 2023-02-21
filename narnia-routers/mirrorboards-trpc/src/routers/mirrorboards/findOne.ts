import t from "../../trpc";
import { z } from 'zod';
import { Mirrorboards } from 'mirrorboards-sdk'

const input = z.object({
  id: z.string(),
});

const output = z.object({
  mirrorboard: Mirrorboards.Mirrorboard
});

export const findOne = t.router({
  findOne: t.procedure.input(input).output(output)
    .meta({
      openapi: {
        method: 'GET',
        path: '/mirrorboards/mirrorboards/findOne',
        protect: true,
        description: 'Fetch mirrorboard details',
        tags: ['mirrorboards']
      }
    })
    .query(async ({ ctx, input }) => {
      const { user } = await ctx.fetchCurrentUser();

      return {
        mirrorboard: {
          id: input.id,
          title: 'Mirrorboard!'
        }
      }
    })
});
