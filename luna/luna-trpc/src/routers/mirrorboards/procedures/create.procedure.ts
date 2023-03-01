import { z } from 'zod';
import { Luna } from "luna-sdk";
import { t } from '../../../trpc';
import { MirrorboardsServiceDTO } from '../../../luna/services/mirrorboards.service.dto';
import { withCurrentUserProtected } from '../../../luna/middlewares/withCurrentUserProtected.middleware';
import { TRPCError } from '@trpc/server';

const input = MirrorboardsServiceDTO.create.input;

const output = z.object({
  mirrorboard: Luna.Mirrorboard,
});

export const create = t.router({
  create: t.procedure.use(withCurrentUserProtected).input(input).output(output)
    .meta({
      openapi: {
        method: 'POST',
        path: '/luna/mirrorboards/create',
        tags: ['mirrorboards']
      }
    })
    .mutation(async ({ ctx: { luna, currentUser }, input }) => {
      console.log(currentUser);

      throw new TRPCError({
        code: 'UNAUTHORIZED'
      });

      // const mirrorboard = await luna.services.mirrorboards.create(input);


      // return { mirrorboard }
    })
});
