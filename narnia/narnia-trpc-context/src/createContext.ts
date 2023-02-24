import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { lunaClient } from 'luna-trpc-client';

export const createContext = async (opts: CreateNextContextOptions) => {
  // const access_token = opts.req.cookies['access_token'] ? opts.req.cookies['access_token'] : null;

  return {
    fetchCurrentUser: async () => {
      return { currentUser: null }
    },
    fetchAuthenticator: async ({ authenticator }: { authenticator: string }) => {
      const res = await lunaClient.authenticators.fetchAuthenticator.query({ token: '123', authenticator });

      return res;
    },
    fetchAuthenticators: async ({ authenticators }: { authenticators: string[] }) => {
      return await lunaClient.authenticators.fetchAuthenticators.query({ token: '123', authenticators });
    }
  }
}
