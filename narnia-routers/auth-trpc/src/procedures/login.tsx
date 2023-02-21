import { z } from 'zod';
import { Luna } from 'luna-sdk'
import { t } from '../trpc';
import { TRPCError } from '@trpc/server';

const input = z.object({
  email: z.string().email(),
  password: z.string(),
});

const output = z.object({
  user: Luna.User
});

export const login = t.router({
  login: t.procedure.input(input).output(output)
    .meta({
      openapi: {
        method: 'POST',
        path: '/auth/login',
        protect: true,
        description: 'Authenticate with email and password',
        tags: ['auth']
      }
    })
    .mutation(async ({ ctx, input }) => {
      console.log('login procedure!!!!!!');

      const authenticate = await ctx.authenticateWithEmailAndPassword(input.email, input.password);
      const user = await ctx.fetchCurrentUser();

      if (!user) {
        throw new TRPCError({
          code: 'UNAUTHORIZED'
        });
      }

      return user;
    })
});
