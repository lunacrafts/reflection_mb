import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { inferAsyncReturnType } from "@trpc/server";
import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import type { LunaRouter } from 'luna/src/router'

const luna = createTRPCProxyClient<LunaRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:4000/trpc',
    }),
  ],
});

export const createContext = async (opts: CreateNextContextOptions) => {
  const token = opts.req.cookies['access_token'] ? opts.req.cookies['access_token'] : null;

  return {
    fetchAuthenticator: async ({ authenticator }: { authenticator: string }) => {
      return await luna.authenticators.fetchAuthenticator.query({ token, authenticator });
    },
    fetchAuthenticators: async ({ authenticators }: { authenticators: string[] }) => {
      return await luna.authenticators.fetchAuthenticators.query({ token, authenticators });
    }
  }
}

export type NarniaContext = inferAsyncReturnType<typeof createContext>
