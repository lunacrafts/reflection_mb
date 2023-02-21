import { z } from 'zod';
import { Luna } from 'luna-sdk'
import { t } from '../trpc';
import { lunaClient } from 'luna-trpc-client';
import { TRPCError } from '@trpc/server';

const input = z.object({
  email: z.string().email(),
  password: z.string(),
  repeatPassword: z.string(),
})

const output = z.object({
  user: Luna.User
});

export const register = t.router({
  register: t.procedure.input(input).output(output)
    .meta({
      openapi: {
        method: 'POST',
        path: '/auth/register',
        protect: true,
        description: 'Register with email and password',
        tags: ['auth']
      }
    })
    .mutation(async ({ ctx, input }) => {
      const { email, password, repeatPassword } = input;

      try {
        const { user } = await lunaClient.auth.register.mutate({
          email, password, repeatPassword,
        })

        return { user }
      } catch (error) {
        throw error;
      }
    })
});
