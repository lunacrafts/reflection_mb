import { createTRPCProxyClient, httpLink } from "@trpc/client";
import { inferAsyncReturnType } from "@trpc/server";
import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import type { LunaRouter } from 'luna/src/router'

const luna = createTRPCProxyClient<LunaRouter>({
  links: [
    httpLink({
      url: 'http://localhost:4000/api/trpc',
    }),
  ],
});

export const createContext = async (opts: CreateNextContextOptions) => {
  const token = opts.req.cookies['access_token'] ? opts.req.cookies['access_token'] : null;

  return {
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
