import t from "../../../trpc";
import { z } from 'zod';
import { Mirrorboards } from 'mirrorboards-sdk'
import { withCurrentUser } from "narnia-trpc-context";
import { Luna } from 'luna-sdk';
import { ObjectId } from "mongodb";

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
      return {
        mirrorboard: {
          _id: new ObjectId(),
          title: 'Mirrorboard?',
          isPublic: true,
          createdBy: {
            _id: new ObjectId(),
            email: 'foo@bar.pl',
          }
        },
      }
    })
});