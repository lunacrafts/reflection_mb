import t from "../../../trpc";
import { z } from 'zod';
import { Mirrorboards } from 'mirrorboards-sdk'
import { MirrorboardsServiceDTO } from "../../services/mirrorboards.service.dto";
import { withMirrorboards } from "../../withMirrorboards.procedure";
import { withCurrentUserProtected } from "../../withCurrentUserProtected.procedure";
import { ObjectId } from "mongodb";

const input = MirrorboardsServiceDTO.create.Mirrorboard

const output = z.object({
  mirrorboard: Mirrorboards.Mirrorboard
});

export const create = t.router({
  create: withCurrentUserProtected.use(withMirrorboards).input(input).output(output)
    .meta({
      openapi: {
        method: 'POST',
        path: '/mirrorboards/mirrorboards/create',
        protect: true,
        description: 'Create mirrorboard',
        tags: ['mirrorboards']
      }
    })
    .mutation(async ({ ctx: { currentUser, mirrorboards }, input }) => {
      const mirrorboard = await mirrorboards.services.mirrorboards.create(input, currentUser);

      return {
        mirrorboard: {
          id: 'mirrorboard-id',
          title: 'Mirrorboard!',
          isPublic: true,
          createdBy: {
            email: 'foo@bar.pl',
            id: 'created by id'
          }
        }
      }
    })
});
