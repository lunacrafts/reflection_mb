import t from "../../../trpc";
import { z } from 'zod';
import { TRPCError } from "@trpc/server";

const input = z.void();

const output = z.object({
  mirrorboards: z.array(z.object({
    id: z.string()
  })),
});

export const findAll = t.router({
  findAll: t.procedure.input(input).output(output)
    .meta({
      openapi: {
        method: 'GET',
        path: '/mirrorboards/mirrorboards/findAll',
        protect: true,
        description: 'Find all mirrorboards',
        tags: ['mirrorboards']
      }
    })
    .query(async ({ ctx }) => {
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Not Implemented'
      });
    })
});
