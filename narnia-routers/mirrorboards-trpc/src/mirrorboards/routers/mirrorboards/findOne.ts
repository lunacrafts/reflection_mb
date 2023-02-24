import t from "../../../trpc";
import { z } from 'zod';
import { Mirrorboards } from 'mirrorboards-sdk'
import { withCurrentUser } from "narnia-trpc-context";
import { TRPCError } from "@trpc/server";

const input = z.object({
  id: z.string(),
});

const output = z.object({
  mirrorboard: Mirrorboards.Mirrorboard
});

export const findOne = t.router({
  findOne: withCurrentUser.input(input).output(output)
    .meta({
      openapi: {
        method: 'GET',
        path: '/mirrorboards/mirrorboards/findOne',
        protect: true,
        description: 'Fetch mirrorboard details',
        tags: ['mirrorboards']
      }
    })
    .query(async ({ ctx: { currentUser }, input }) => {
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Not Implemented'
      });
    })
});
