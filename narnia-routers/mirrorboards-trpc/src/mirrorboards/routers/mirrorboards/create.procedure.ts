import t from "../../../trpc";
import { z } from 'zod';
import { Mirrorboards } from 'mirrorboards-sdk'
import { withCurrentUserProtected } from "narnia-trpc-context";
import { MirrorboardsServiceDTO } from "../../services/mirrorboards.service.dto";
import { withMirrorboards } from "../../withMirrorboards.procedure";

const input = MirrorboardsServiceDTO.create.Mirrorboard;

const output = z.object({
  mirrorboard: Mirrorboards.Mirrorboard
});

export const create = t.router({
  create: withMirrorboards.input(input).output(output)
    .meta({
      openapi: {
        method: 'POST',
        path: '/mirrorboards/mirrorboards/create',
        protect: true,
        description: 'Create mirrorboard',
        tags: ['mirrorboards']
      }
    })
    .mutation(async ({ ctx: { mirrorboards, currentUser }, input }) => {
      if (currentUser) {
        const mirrorboard = await mirrorboards.services.mirrorboards.create(input, currentUser);
      }

      return {
        mirrorboard: {
          id: input.id + 'optional',
          title: 'Mirrorboard!',
          isPublic: true
        }
      }
    })
});
