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
      const { email, password } = input;
      const { access_token } = await luna.auth.login.mutate({ email, password });

      ctx.setAccessToken(access_token);

      if (access_token) {
        const { user } = await luna.auth.me.query({ access_token });

        return { user };
      }

      throw new TRPCError({
        code: 'UNAUTHORIZED'
      });
    })
});
