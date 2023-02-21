import { createTRPCProxyClient, httpLink } from "@trpc/client";
import { inferAsyncReturnType, TRPCError } from "@trpc/server";
import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import cookie from 'cookie';
import type { LunaRouter } from 'luna/src/router'

const luna = createTRPCProxyClient<LunaRouter>({
  links: [
    httpLink({
      url: 'http://localhost:4000/api/trpc',
    }),
  ],
});

export const createContext = async (opts: CreateNextContextOptions) => {
  const access_token = opts.req.cookies['access_token'] ? opts.req.cookies['access_token'] : null;

  return {
    fetchCurrentUser: async () => {
      if (access_token) {
        const user = await luna.auth.me.query({ access_token });

        return user;
      }

      return null;
    },
    authenticateWithEmailAndPassword: async (email: string, password: string) => {
      const { access_token } = await luna.auth.login.mutate({ email, password });

      const setCookie = cookie.serialize('access_token', access_token, {
        secure: false,
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
      });

      opts.res.setHeader('Set-Cookie', setCookie);

      if (access_token) {
        const { user } = await luna.auth.me.query({ access_token });

        return { user };
      }

      throw new TRPCError({
        code: 'UNAUTHORIZED'
      });
    },
    fetchAuthenticator: async ({ authenticator }: { authenticator: string }) => {
      const res = await luna.authenticators.fetchAuthenticator.query({ token: '123', authenticator });

      return res;
    },
    fetchAuthenticators: async ({ authenticators }: { authenticators: string[] }) => {
      return await luna.authenticators.fetchAuthenticators.query({ token: '123', authenticators });
    }
  }
}

export type NarniaContext = inferAsyncReturnType<typeof createContext>
