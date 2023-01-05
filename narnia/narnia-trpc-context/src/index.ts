import { inferAsyncReturnType } from "@trpc/server";
import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { router as lunaRouter } from 'luna-trpc';

const luna = lunaRouter.createCaller({});

export const createContext = async (opts: CreateNextContextOptions) => {
  const token = opts.req.cookies['access_token'] ? opts.req.cookies['access_token'] : null;

  return {
    fetchAuthenticator: async (authenticators: string[]) => {
      return await luna.auth.fetchAuthenticators({ token, authenticators });
    }
  }
}

export type NarniaContext = inferAsyncReturnType<typeof createContext>
