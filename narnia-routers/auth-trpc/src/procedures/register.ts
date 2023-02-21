import { createTRPCProxyClient, httpLink } from "@trpc/client";
import type { LunaRouter } from 'luna/src/router'
import { z } from 'zod';
import { Luna } from 'luna-sdk'
import { t } from '../trpc';
import { TRPCError } from "@trpc/server";

const luna = createTRPCProxyClient<LunaRouter>({
  links: [
    httpLink({
      url: 'http://localhost:4000/api/trpc',
    }),
  ],
});

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

      const { user } = await luna.auth.register.mutate({
        email, password, repeatPassword,
      })

      return { user }
    })
});
