import { z } from 'zod';
import { Luna } from "luna-sdk";
import { t } from '../../../trpc';
import { withLuna } from '../../../luna/luna.withLuna.procedure';
import { MirrorboardsServiceDTO } from '../../../luna/services/mirrorboards.service.dto';

const input = MirrorboardsServiceDTO.create.input;

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
      const mirrorboard = await luna.services.mirrorboards.create(input);

      return { mirrorboard }
    })
});
