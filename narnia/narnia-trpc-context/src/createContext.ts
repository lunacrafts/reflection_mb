import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { lunaClient } from 'luna-trpc-client';
import axios from 'axios';
import { TRPCError } from '@trpc/server';
import { envs } from './envs';
import { LunaJWT } from 'luna-sdk';

export const createContext = async (opts: CreateNextContextOptions) => {
  return {
    fetchCurrentUser: async () => {
      const access_token = opts.req.cookies['access_token'];

      if (!access_token) {
        return {
          currentUser: null
        }
      }

      const { currentUser } = await lunaClient.session.findByJWTToken.query({ access_token });

      return { currentUser }
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
