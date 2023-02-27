import { z } from 'zod';
import { Luna } from 'luna-sdk'
import { t } from '../trpc';
import { withCurrentUser } from 'narnia-trpc-context';
import { TRPCError } from '@trpc/server';
import { AuthRouter } from 'auth/src/router';
import { createTRPCProxyClient, httpLink } from '@trpc/client';
import superjson from 'superjson';
import { env } from 'env';

export const authClient = createTRPCProxyClient<AuthRouter>({
  transformer: superjson,
  links: [
    httpLink({
      url: env.AUTH_API_URL
    }),
  ],
});

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
