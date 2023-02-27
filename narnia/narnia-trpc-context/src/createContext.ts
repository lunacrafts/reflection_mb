import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { createTRPCProxyClient, httpLink } from "@trpc/client";
import superjson from 'superjson';
import { env } from 'env';
import type { AuthRouter } from 'auth/src/router';

export const authClient = createTRPCProxyClient<AuthRouter>({
  transformer: superjson,
  links: [
    httpLink({
      url: env.AUTH_TRPC_URL
    }),
  ],
});

export const createContext = async (opts: CreateNextContextOptions) => {
  return {
    fetchCurrentUser: async () => {
      const access_token = opts.req.cookies['access_token'];

      if (!access_token) {
        return {
          currentUser: null
        }
      }

      const { currentUser } = await authClient.session.findByJWTToken.query({ access_token });

      return { currentUser }
    },
    fetchAuthenticator: async ({ authenticator }: { authenticator: string }) => {
    },
    fetchAuthenticators: async ({ authenticators }: { authenticators: string[] }) => {
    }
  }
}
