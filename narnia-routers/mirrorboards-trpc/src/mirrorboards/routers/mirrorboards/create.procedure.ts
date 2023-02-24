import t from "../../../trpc";
import { z } from 'zod';
import { Mirrorboards } from 'mirrorboards-sdk'
import { withCurrentUser } from "narnia-trpc-context";
import { TRPCError } from "@trpc/server";

const input = z.object({
  title: z.string(),
});

const output = z.object({
  mirrorboard: Mirrorboards.Mirrorboard
});

export const create = t.router({
  create: withCurrentUser.input(input).output(output)
    .meta({
      openapi: {
        method: 'POST',
        path: '/mirrorboards/mirrorboards/create',
        protect: true,
        description: 'Create mirrorboard',
        tags: ['mirrorboards']
      }
    })
    .mutation(async ({ ctx: { currentUser }, input }) => {
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Not Implemented'
      });
    })
});
