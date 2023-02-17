import { inferAsyncReturnType } from "@trpc/server";
import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { router as lunaRouter } from 'luna/src/router'

const luna = lunaRouter.createCaller({});

export const createContext = async (opts: CreateNextContextOptions) => {
  const token = opts.req.cookies['access_token'] ? opts.req.cookies['access_token'] : null;

  return {
    fetchAuthenticator: async ({ authenticator }: { authenticator: string }) => {
      return await luna.authenticators.fetchAuthenticator({ token, authenticator });
    },
    fetchAuthenticators: async ({ authenticators }: { authenticators: string[] }) => {
      return await luna.authenticators.fetchAuthenticators({ token, authenticators });
    }
  }
}

export type NarniaContext = inferAsyncReturnType<typeof createContext>
