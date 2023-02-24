import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { lunaClient } from 'luna-trpc-client';
import { decodeJWTToken } from './utils/decodeJWTToken';
import { TRPCError } from '@trpc/server';

export const createContext = async (opts: CreateNextContextOptions) => {
  return {
    decodeJWTToken: async () => {
      const access_token = opts.req.cookies['access_token'];

      if (!access_token) {
        return new TRPCError({
          code: 'UNAUTHORIZED'
        });
      }

      const payload = await decodeJWTToken(access_token);

      return {
        _id: '123',
        email: 'decodeJWTToken@foo.pl'
      }
    },
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
