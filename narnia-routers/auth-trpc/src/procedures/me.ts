import { z } from 'zod';
import { Luna } from 'luna-sdk'
import { t } from '../trpc';
import { withCurrentUserProtected } from 'narnia-trpc-context';

const input = z.void();

const output = z.object({
  currentUser: Luna.User
});

export const me = t.router({
  me: withCurrentUserProtected.input(input).output(output)
    .meta({
      openapi: {
        method: 'GET',
        path: '/auth/me',
        protect: true,
        description: 'Fetch current user',
        tags: ['auth']
      }
    })
    .mutation(async ({ ctx: { currentUser }, input }) => {
      return { currentUser }
    })
});
