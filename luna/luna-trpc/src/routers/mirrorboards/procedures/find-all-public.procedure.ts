import { z } from 'zod';
import { Luna } from "luna-sdk";
import { t } from '../../../trpc';
import { withLuna } from '../../../luna/luna.withLuna.procedure';
import { Pagination, PaginationInput } from '../../../luna/utils/Pagination';

const input = PaginationInput;

const output = z.object({
  mirrorboards: z.array(Luna.Mirrorboard),
  nextCursor: z.number(),
});

export const findAllPublic = t.router({
  findAllPublic: withLuna.input(input).output(output)
    .meta({
      openapi: {
        method: 'GET',
        path: '/luna/mirrorboards/find-all-public',
        tags: ['mirrorboards']
      }
    })
    .query(async ({ ctx: { luna }, input }) => {
      const { pagination, nextCursor } = new Pagination(input);
      const mirrorboards = await luna.services.mirrorboards.findAllPublic(pagination);

      return {
        mirrorboards,
        nextCursor
      }
    })
});
