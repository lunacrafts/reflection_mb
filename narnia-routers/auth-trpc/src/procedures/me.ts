import { z } from 'zod';
import { Luna } from 'luna-sdk'
import { t } from '../trpc';
import { withSession } from 'narnia-trpc-context';

const input = z.void();

const output = z.object({
  currentUser: Luna.User
});

export const me = t.router({
  me: withSession.input(input).output(output)
    .meta({
      openapi: {
        method: 'GET',
        path: '/auth/me',
        protect: true,
        description: 'Fetch current user',
        tags: ['auth']
      }
    })
    .query(async ({ ctx, input }) => {
      return {
        currentUser: {
          _id: '123',
          email: 'foo@bar.pl',
        }
      }
    })
});
