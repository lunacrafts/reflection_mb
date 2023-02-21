import { z } from 'zod';
import { Luna } from 'luna-sdk'
import { t } from '../trpc';

const input = z.object({
  email: z.string().email(),
  password: z.string(),
  repeatPassword: z.string(),
})

const output = z.object({
  user: z.null().or(Luna.User)
});

export const register = t.router({
  register: t.procedure.input(input).output(output)
    .meta({
      openapi: {
        method: 'POST',
        path: '/auth/me',
        protect: true,
        description: 'Fetch current user',
        tags: ['auth']
      }
    })
    .mutation(async ({ ctx, input }) => {
      const { user } = await ctx.fetchCurrentUser();

      return { user }
    })
});
