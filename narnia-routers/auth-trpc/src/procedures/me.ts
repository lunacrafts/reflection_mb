import { z } from 'zod';
import { Luna } from 'luna-sdk'
import { t } from '../trpc';
import { withCurrentUser, withSession } from 'narnia-trpc-context';
import { TRPCError } from '@trpc/server';

const input = z.void();

const output = z.object({
  currentUser: Luna.User
});

export const me = t.router({
  me: withCurrentUser.input(input).output(output)
    .meta({
      openapi: {
        method: 'GET',
        path: '/auth/me',
        protect: true,
        description: 'Fetch current user',
        tags: ['auth']
      }
    })
    .query(async ({ ctx: { currentUser }, input }) => {
      if (!currentUser) {
        throw new TRPCError({
          code: 'UNAUTHORIZED'
        });
      }

      return {
        currentUser: currentUser
      }
    })
});
