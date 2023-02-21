import t from "../../trpc";
import { z } from 'zod';
import { Mirrorboards } from 'mirrorboards-sdk'

const input = z.void();

const output = z.object({
  user: Mirrorboards.User
});

export const login = t.router({
  login: t.procedure.input(input).output(output)
    .meta({
      openapi: {
        method: 'GET',
        path: '/mirrorboards/auth/login',
        protect: true,
        description: 'Issue Luna JWT token',
        tags: ['mirrorboards']
      }
    })
    .query(async ({ ctx }) => {
      try {
        const authenticator = await ctx.fetchAuthenticator({
          authenticator: '123'
        });

        console.log(authenticator);
      } catch (e) {
        console.log(e);
      }

      return {
        user: {
          id: 'luna_id',
          email: 'lunacrafts@protonmail.com'
        }
      }
    })
});
